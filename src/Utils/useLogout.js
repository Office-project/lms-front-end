import { clearCurrentUser } from "../componets/Info/actions/user";
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux";
const useLogout = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    return () => {
        dispatch(clearCurrentUser());
        navigate("/")
    }
}

export default useLogout;
