import axios from "axios";
import api from "../ComponetApi";
import { authHeader } from "./BaseService"

class LeaveService{
    getLeaveTypes(){
        return axios.get(api.leave, {
            headers: authHeader(), 
        });
    }

    getLeaveHistory(){
        return axios.get(api.history, {
            headers: authHeader(),
        })
    }

}

export default new LeaveService();