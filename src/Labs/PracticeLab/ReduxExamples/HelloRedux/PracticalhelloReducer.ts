import { createSlice } from "@reduxjs/toolkit"


const initialState={
    message:"Hello world from practical world!!"
}
const helloSlice = createSlice({
    name:"hello",
    initialState,
    reducers:{}
})

export default helloSlice.reducer;
