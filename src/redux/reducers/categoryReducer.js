// import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
//  import { useInsertDataWithImage } from '../../hooks/useInsertData'
// import { useGetData } from "../../hooks/useGetData";


// export const getAllCategory= createAsyncThunk('categories/getAllCategory', async(limit,thunkAPI) =>{
//   try{
//     const res = await useGetData(`/api/v1/categories?limit=${limit}`);
//  return res;
//    }catch(error) {
//     console.log(error);

//     return error;

//   }
// })

// const initialState = {
//   category:null,
//   oneCategory:null,
//   loading: true,
  
//  }; 


//  const categoryReducer = createSlice({
//   name: "allCategory", 
//   initialState,
//   reducers: { 
//     // standard reducer logic, with auto-generated action types per reducer
//   },
//   extraReducers: (builder) => {
//     // Add reducers for additional action types here, and handle loading state as needed
//     builder.addCase(getAllCategory.fulfilled, (state, action) => {
//       state.category=action.payload;
//       console.log(state.category)
//     })
    
//   },
// })
// export default categoryReducer.reducer;

import { GET_ALL_CATEGORY, GET_ONE_CATEGORY, GET_ERROR, CREATE_CATEGORY } from '../type'

const inital = {
    category: [],
    oneCategory: [],
    loading: true,
}
const categoryReducer = (state = inital, action) => {
    switch (action.type) {
        case GET_ALL_CATEGORY:
            return {
                ...state,
                category: action.payload,
                loading: false, 
            }
        case GET_ONE_CATEGORY:
            return {
                oneCategory: action.payload,
                loading: false,
            }
        case CREATE_CATEGORY:
            return {
                category: action.payload,
                loading: false
            }
        case GET_ERROR:
            return {
                loading: true,
                category: action.payload,
            }
        default:
            return state;
    }
}
export default categoryReducer