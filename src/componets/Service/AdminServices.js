import axios from "axios";
import api from "../ComponetApi";
import { authHeader } from "./BaseService"

class AdminServices{
    createDepatment(payload){
        return axios.post(api.department,payload, {
            headers: authHeader(), 
        });
    }

    getAllDepartment(){
        return axios.get(api.department, {
            headers: authHeader(),
        })
    }

    createLocation(payload){
        return axios.post(api.locations,payload,{headers: authHeader()})
    }

    getAllLocation(){
        return axios.get(api.locations,{
            headers: authHeader()
        })
    }

}

export default new AdminServices();