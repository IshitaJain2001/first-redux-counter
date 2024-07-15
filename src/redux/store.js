import { createStore } from "redux";
const initialstate={
    count:0
}

const reducerfn=(state=initialstate,action)=>{
    switch(action.type){
        case "incre":return{
    count:state.count+1
        }
        case "decre" :return {
            count:state.count-1
        }
    }
return state
}
export const store=createStore(reducerfn)