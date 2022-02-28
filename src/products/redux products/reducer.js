import { INCREMENT, DECREMENT} from "./action-type";

const initialState ={
    counter:0,
    price:0,
    title: []
}

const counterReducer =(state=initialState, action)=>{

switch(action.type){
case INCREMENT: return{
    ...state, 
    counter:state.counter+1,
    price:state.price+Number(action.payload)
}
case DECREMENT: return{
    ...state, 
    counter:state.counter-1,
    price:state.price-Number(action.payload)
}
default: return state
}

}
export default counterReducer;