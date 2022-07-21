import axios from "axios";
import api from "../ComponetApi";
import { authHeader } from "./BaseService"
import instance from "../../Utils/Axios";

class OptionService {
    getUserOption() {
        return instance.get(api.user_option);
    }

    getUserOptionDept() {
        return instance.get(api.user_option_dept, {
            headers: authHeader(),
        });
    }

    getUserOptionDeptII(id) {
        return instance.get(api.user_option_dept + `/${id}`, {
            headers: authHeader()
        })
    }

    getDepartmentOption() {
        return instance.get(api.department_option)
    }

    getLocationOption() {
        return instance.get(api.location_option)
    }

    getLeaveTypeOption() {
        return instance.get(api.leave_type_option, {
            headers: authHeader(),
        })
    }

}

export default new OptionService();