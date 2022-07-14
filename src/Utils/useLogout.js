import { clearCurrentUser } from "../componets/Info/actions/user";
import { Link, useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux";


const useLogout = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    dispatch(clearCurrentUser());
    navigate("/login")
}

export default useLogout;
 