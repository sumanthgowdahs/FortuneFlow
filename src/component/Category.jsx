import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';

function Category() {
    let [userData,setUserData]= useState()
    let { CategoryList } = useSelector((store) => store.task)
    console.log(CategoryList);
    useEffect(()=>{
    setUserData(CategoryList)

    },[])
  return (
    <div className='taskList'>
            {userData?.length > 0 ? (
        userData?.map((items) => {
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

export default Category