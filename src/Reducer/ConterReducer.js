import { CRIMENT, INCRIMENT, INC_BY_VALUE } from "../Action/Type";

const ConterReducer=(State={cont:0},action={})=>{
    switch(action.type){
        case CRIMENT:
        return {...State,cont:State.cont + 1}
    
        case INCRIMENT :
        return {...State,cont:State.cont - 1}
        case INC_BY_VALUE:
            return{...State,cont:State.cont + action.value}
    
    
    default:
    return State
}
}
export default ConterReducer;