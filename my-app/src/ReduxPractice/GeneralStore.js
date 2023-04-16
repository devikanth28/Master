import React from 'react'
import { legacy_createStore } from 'redux'
import { useDispatch, useSelector } from "react-redux";
const GeneralStore = () => {
    const dispatch = useDispatch();
    const initialState={
        numOfLoptops:100
    }
    const BuyLoptop=()=>{
        return{
            type:"BUY_LOPTOP"
        }
    }
    const reducer=(state=initialState,action)=>{
        // if(action.type=="BUY_LOPTOP"){
        //     return{
        //         numOfLoptops:state.numOfLoptops-1
        //     }
        // }
        // else{
        //     return state;
        // }
        switch(action.type){
            case "BUY_LOPTOP":
                return {numOfLoptops:state.numOfLoptops-1}
            default:
                return state;
        }
    }
    const store=legacy_createStore(reducer);
    console.log(store);
    store.subscribe(()=>{console.log(store.getState())});
    store.dispatch(BuyLoptop())
  return (
    <div>GeneralStore</div>
  )
}

export default GeneralStore