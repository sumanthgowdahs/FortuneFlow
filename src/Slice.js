import { createSlice } from "@reduxjs/toolkit"

let initialState = {
    fetchData:[],
    message:''
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
        }
    }
})

export let {fetchedData,AddMessage} = taskSlice.actions
export default taskSlice.reducer