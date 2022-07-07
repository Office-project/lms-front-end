import axios from "axios";
import api from "../ComponetApi";
import { authHeader } from "./BaseService"

class AdminServices{
    createDepatment(){
        return axios.post(api.department, {
            headers: authHeader(), 
        });
    }

    getAllDepartment(){
        return axios.get(api.department, {
            headers: authHeader(),
        })
    }

}

export default new AdminServices();