import { FETCH_ALL,CREATE,DELETE,UPDATE} from "../constants/actionsContant";

export default (memories=[],action)=>{
    switch(action.type){
        case FETCH_ALL:
            return action.payload

            case CREATE:
                return  [...memories,action.payload] 

                case DELETE:
                    return  memories.filter((memory)=>memory._id !==action.payload)

                    case UPDATE:
                        return  memories.map((memory)=>
                        memory._id === action.payload._id ? action.payload : memory
                        )
            default:
                return memories
    }
}