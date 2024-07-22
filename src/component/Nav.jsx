import React, { useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import { AddCategory } from '../Slice'
import { useDispatch } from 'react-redux'

function Nav() {

  let dispatch = useDispatch()
  let inputRef = useRef()
  let { eid } = useParams()
  let [filterValue, setFilterValue] = useState([])
  // let [filter, setFilter] = useState([])

  let [category, setCategory] = useState()
  let filter = []
  let newFilter = []

  async function buttonClick(e) {
    
    let value = e.target.value
    console.log("value id ", value);
    if (filter.includes(value)) {
      filter = filter.filter((items, index) => {
        return items !== value
      })
      
    }
    else {
      filter?.push(value)
    }
    // setFilterValue(filter)
    console.log(filter);
    let response = await axios.get(`http://localhost:5000/fortuneflow/filterdata/${eid}?filter={"catagary":"${filter}"}`)
    console.log(response);
    dispatch(AddCategory(response.data))

  }

  return (
    <div className='nav'>
      <Link to={`/home/${eid}/Dashboard`}>Dashboard</Link>
      <Link to={`/home/${eid}/Allexpenses`}>All expenses</Link>
      <div className="catagories">
        <Link to={`/home/${eid}/Category`}>Category</Link>
        {/* <h3 className='heading'>catagories</h3> */}


        <div className="catagoriesList">
          <h4>Housing</h4>
          <input ref={inputRef} type="checkbox" value={"housing"} onChange={buttonClick} />
        </div>
        <div className="catagoriesList">
          <h4>transportation</h4>
          <input ref={inputRef} type="checkbox" value={"transportation"} onChange={buttonClick} />
        </div>
        <div className="catagoriesList">
          <h4>food</h4>
          <input ref={inputRef} type="checkbox" value={"food"} onChange={buttonClick} />
        </div>

        <div className="catagoriesList">
          <h4>personal care</h4>
          <input ref={inputRef} type="checkbox" value={"personal care"} onChange={buttonClick} />
        </div>

        <div className="catagoriesList">
          <h4>health care</h4>
          <input ref={inputRef} type="checkbox" value={"health care"} onChange={buttonClick} />
        </div>

        <div className="catagoriesList">
          <h4>entertainment</h4>
          <input ref={inputRef} type="checkbox" value={"entertainment"} onChange={buttonClick} />
        </div>
        <div className="catagoriesList">
          <h4>education</h4>
          <input ref={inputRef} type="checkbox" value={"education"} onChange={buttonClick} />
        </div>
        <div className="catagoriesList">
          <h4>investments</h4>
          <input ref={inputRef} type="checkbox" value={"investments"} onChange={buttonClick} />
        </div>
        <div className="catagoriesList">
          <h4>gifts</h4>
          <input ref={inputRef} type="checkbox" value={"gifts"} onChange={buttonClick} />
        </div>
        <div className="catagoriesList">
          <h4>travel</h4>
          <input ref={inputRef} type="checkbox" value={"travel"} onChange={buttonClick} />
        </div>

      </div>
    </div>
  )
}

export default Nav