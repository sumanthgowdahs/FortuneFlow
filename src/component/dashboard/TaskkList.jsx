import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { fetchedData ,AddMessage } from '../../Slice';

function TaskList() {
    let { fetchData, message } = useSelector((store) => store.task)
    let [userData, setUserData] = useState([])
    let { eid } = useParams()

    let dispatch = useDispatch()
    if(userData.length == 0){
        dispatch(AddMessage("Add new expeses"))
    }
   

    let apiFetch = async () => {
        let { data } = await axios.get(`http://localhost:5000/fortuneflow/getdata/${eid}`)
        console.log(data)
        dispatch(fetchedData(data))
    }
    useEffect(() => {
        apiFetch()
        // setUserData(fetchData[0].data)
    }, [])
    useEffect(() => {
        if (fetchData, fetchData.length > 0) {
            let reverseData = [...fetchData[0].data].reverse()
            console.log(reverseData);
            setUserData(reverseData)
        }
    }, [fetchData])
    // console.log(userData);
    
    let deleteItem = async (id)=>{
        dispatch(AddMessage("Loading..."))
        console.log(id);
        let {data} = await axios.post(`http://localhost:5000/fortuneflow/Removeexpense/${eid}/${id}`)
       console.log(data);
       dispatch(fetchedData(data))
       dispatch(AddMessage("expense deleted"))

    }
    





    return (
        <div className='taskList'>
            
            {userData.length > 0 ? (
                userData.map((items) => {
                    return (
                        <div key={items._id} className='expenses'>
                            <div className="categoryBox"><h4>{items.categary}</h4></div>
                            <div className="box1">
                                <div className="amount">
                                    <h2>Rs</h2>
                                <h1>{items.amount}</h1>

                                </div>
                               <h4>{items.name}</h4>
                               <h4>{items.date}</h4>
                            </div>
                            <div className="box2">
                                <div className="description">
                                {items.description}
                                </div>
                                <div className="deleteButton">
                                <button onClick={()=>{
                                    deleteItem(items._id)
                                }}><i class="fa-solid fa-trash"></i></button>
                                </div>
                            </div>
                        </div>
                    )
                })
            ) : (
                <div>there are no expenses added</div>
            )}

        </div>
    )
}

export default TaskList