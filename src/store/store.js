import {createStore} from "redux"
let initialState={
    count:100
}
let store=createStore((state=initialState,action)=>{
    switch (action.type){
        case "INCREMENT":
            return {
                count:state.count+100
            }
            default:
                return state
    }
})
export default store