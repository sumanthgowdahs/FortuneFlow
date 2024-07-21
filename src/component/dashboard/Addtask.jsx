import React, { useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import TaskList from './TaskkList'
import { useDispatch, useSelector } from 'react-redux'
import { fetchedData,AddMessage } from '../../Slice'

function Addtask() {
    let dispatch = useDispatch()
    let { fetchData,message } = useSelector((store) => store.task)


    let { eid } = useParams()
    let [error, setError] = useState()
    let nameRef = useRef()
    let amountRef = useRef()
    let descriptionRef = useRef()
    let categoryRef = useRef()

    // &getting date
    let getDate = new Date()
    let date = getDate.getDate()
    let month = getDate.getMonth()
    let year = getDate.getFullYear()
    let currentDate = `${date}-${month}-${year}`




    let fetch = async () => {
        let userData = {
            name: nameRef.current.value,
            amount: amountRef.current.value,
            date: currentDate,
            categary: categoryRef.current.value,
            description: descriptionRef.current.value
        }

        if (userData.name == "" || userData.amount == "") {
            dispatch(AddMessage("name and amount is mandatory"))
            return
        }
        // & sending new expense
        try {
            dispatch(AddMessage("Loading...."))
            setError("Loading.....")
            let {data} = await axios.post(`http://localhost:5000/fortuneflow/addexpense/${eid}`, userData)
            dispatch(fetchedData(data))
            dispatch(AddMessage("expense added"))
            setError("expense added")
        }
        catch (error) {
            dispatch(AddMessage(error.message))  
        }
    }





    return (
        <div>


            <div className='addtask'>
                <div className='inputSection'>
                <input placeholder='Name' ref={nameRef} type="text" />
                <input placeholder='Amount' ref={amountRef} type="number" />
                </div>
                <div className='inputSection'>
                <input maxLength={60} placeholder='Description' ref={descriptionRef} type="text" />
                <select  ref={categoryRef} id="taskOptions" name="taskOptions">
                    <option value="category">category</option>
                    <option value="Housing">Housing</option>
                    <option value="Transportation">Transportation</option>
                    <option value="Food">Food</option>
                    <option value="Personal">Personal care</option>
                    <option value="Healthcare">Healthcare</option>
                    <option value="Entertainment">Entertainment</option>
                    <option value="Education">Education</option>
                    <option value="Investments">Investments</option>
                    <option value="Gifts">Gifts</option>
                    <option value="Travel">Travel</option>
                </select>
                </div>
                <button onClick={fetch}>Add</button>
                    <h4>{message}</h4>
            </div>

        </div>
    )
}

export default Addtask