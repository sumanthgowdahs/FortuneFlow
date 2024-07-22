import { createSlice } from "@reduxjs/toolkit"
import Category from "./component/Category";

let initialState = {
    fetchData:[],
    message:'',
    CategoryList: []
}
console.log(initialState.fetchData);

let taskSlice = createSlice({
    name:"task",
    initialState,
    reducers:{
        fetchedData:(cState,action)=>{
            cState.fetchData=action.payload
        },
        AddMessage:(cState,action)=>{
cState.message = action.payload
        },
        AddCategory : (cState,action)=>{
            cState.CategoryList=action.payload

        }
    }
})

export let {fetchedData,AddMessage,AddCategory} = taskSlice.actions
export default taskSlice.reducer