import axios from "axios";
import api from "../ComponetApi";
import { authHeader } from "./BaseService"

class OptionService {
    getUserOption() {
        return axios.get(api.user_option);
    }

    getUserOptionDept() {
        return axios.get(api.user_option_dept, {
            headers: authHeader(),
        });
    }

    getDepartmentOption() {
        return axios.get(api.department_option)
    }

    getLocationOption() {
        return axios.get(api.location_option)
    }

    getLeaveTypeOption() {
        return axios.get(api.leave_type_option, {
            headers: authHeader(),
        })
    }

}

export default new OptionService();