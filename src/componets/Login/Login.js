import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom"
import User from "../Models/User";
import AuthenticationService from "../Service/AuthenticationService"
import { setCurrentUser } from "../Info/actions/user"
import style from "./Login.module.css"

const Login = () => {

  const [user, setUser] = useState(new User("", "", "", "")
  );
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();


  const dispatch = useDispatch();

  const currentUser = useSelector((state) => state.user);

  useEffect(() => {
    if (currentUser?.id) {
      navigate("/dashboard");
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUser((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();


    setLoading(true);

    AuthenticationService.login(user)
      .then((response) => {
        dispatch(setCurrentUser(response.data));
        navigate("/dashboard");
      })
      .catch((error) => {
        console.log(error);
        setErrorMessage("username or password is not valid");
        setLoading(false);
      });
  };




  return (
    <div className={style.mainLoginForm}>
      {errorMessage && (
        <div className="alert alert-danger">{errorMessage}</div>
      )}
      <form onSubmit={(e) => handleLogin(e)}
        noValidate >
        <div className={style.formGroup}>
          <label>
            EMAIL ADDRESS
          </label>
          <input
            key={"email"}
            type="email"
            name="email"
            required
            placeholder="user@northwestpetroluem_ng.com"
            value={user.email}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className={style.formGroup}>
          <label >
            PASSWORD
          </label>
          <input
          key={"password"}
            type="password"
            name="password"
            placeholder="••••••••"
            value={user.password}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className={style.formGroup}>
          <button disabled={loading}>Login</button>
        </div>

        <div className={style.formGroup}>
          <p className={style.trademark}>
            © 2021 NorthWest_petroleum. All Rights Reserved.®
          </p>
        </div>
      </form>
    </div>
  );




  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState();

  // const handleEmail = (evt) => {
  //   setEmail(evt.target.value);
  //   console.log(email)
  // }
  // const handlePassword = (evt) => {
  //   setPassword(evt.target.value);
  //   console.log(password)
  // }

  // const handleSubmit = (evt) => {
  //   evt.preventDefault();
  //   const loginDetails = {
  //     email: email,
  //     password: password,
  //   }
  //   // props.onSaveExpenseData(info);

  //   console.log(loginDetails)
  // }



  // return (
  //   <div className={style.mainLoginForm}>
  //     <form form onSubmit={handleSubmit}>
  //       <div className={style.formGroup}>
  //         <label html for="email">EMAIL ADDRESS</label>
  //         <input type="email" name="" id="" placeholder="user@northwestpetroluem_ng.com" onChange={handleEmail} />
  //       </div>
  //       <div className={style.formGroup}>
  //         <label html for="password">PASSWORD</label>
  //         <input type="password" name="" id="" placeholder="••••••••"
  //           onChange={handlePassword} />

  //       </div>
  //       <div className={style.formGroup}>
  //         <button type="submit">Login</button>
  //       </div>

  //     </form>
  //     <div className={style.loginBottom}>
  //       <p className={style.trademark}>© 2021 NorthWest_petroleum. All Rights Reserved.®</p>
  //     </div>
  //   </div>)

}

export default Login;