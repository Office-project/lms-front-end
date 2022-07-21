import api from "../ComponetApi";
import { authHeader } from "./BaseService"
import instance from "../../Utils/Axios";

class LeaveService {
    getLeaveTypes() {
        return instance.get(api.leave, {
            headers: authHeader(),
        });
    }

    getLeaveHistory() {
        return instance.get(api.history, {
            headers: authHeader(),
        })
    }

}

export default new LeaveService();