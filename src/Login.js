import { useState } from "react"
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Login.css";
const validEmailRegex = RegExp(
        /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);
const validpassword = RegExp(/^((?=.*[A-Z])(?=.*@).{8,99})$/i)

function Login(props) {
        const history = useHistory()
        const [userData, setUserData] = useState({
                email: "",
                password: "",

        })

        const [error, setErros] = useState({
                email: null,
                password: null,

        })

        const changeUserData = (e) => {


                if (e.target.name == "name") {
                        setUserData({
                                ...userData,
                                name: e.target.value
                        })

                        setErros({
                                ...error,
                                name: e.target.value.length == 0 ? "This Field is required" : e.target.value.length < 3
                                        ? 'Min length 3 characters'
                                        : ''


                        })
                }
                else if (e.target.name == "useremail") {
                        setUserData({
                                ...userData,
                                email: e.target.value
                        })

                        setErros({
                                ...error,
                                email: e.target.value.length == 0 ? "This Field is required" : validEmailRegex.test(e.target.value)

                                        ? ''
                                        : 'Email is not valid!'
                        })
                }
                else if (e.target.name == "username") {
                        setUserData({
                                ...userData,
                                username: e.target.value
                        })

                        setErros({
                                ...error,
                                username: e.target.value.length == 0 ? "This Field is required" : e.target.value.length < 3 ? "Min length 3 characters" : ''
                        })
                }

                else if (e.target.name == "password") {
                        setUserData({
                                ...userData,
                                password: e.target.value
                        })

                        setErros({
                                ...error,

                                password: e.target.password !== e.target.confirmPassword ? "must match each other" : validpassword.test(e.target.value)
                                        ? ''
                                        : 'Password must contain at least one uppercase , one lowercase ,a digit or special character'
                        })
                } else {
                        setUserData({
                                ...userData,
                                confirmPassword: e.target.value
                        })
                        setErros({
                                ...error,

                                confirmPassword: e.target.value !== userData.password ? " Passwords must be the same" : null

                        })
                }

        }

        const submitData = (e) => {
                e.preventDefault()
        }
            const togglePassword = (e) => {
                if (userData === "password") {
                    setUserData("text")
                    return;
                }
                setUserData("password")
            }



        return (
                <div className="container">
                        <br />
                        <div className="row" id="logg">
                                <h1 id="log"> Login Form </h1>
                                <form onSubmit={(e) => submitData(e)}>
                                        <div className="mb-3">
                                                <label htmlFor="email" className="form-label"><b>Email</b></label>
                                                <input name="useremail"placeholder="Enter your Email" type="email" className={`form-control ${error.email && "border-danger"}`} value={userData.email} onChange={(e) => changeUserData(e)} />
                                                <p className="text-danger"> {error.email} </p>
                                        </div>
                                        <div className="mb-3">
                                                <label htmlFor="password" className="form-label">Password</label>
                                                <input name="password" placeholder="Enter your Password" className={`form-control ${error.password && "border-danger"}`} value={userData.password} onChange={(e) => changeUserData(e)} />
                                                <p className="text-danger"> {error.password} </p>
                                        </div>
                                        <br />
                                        <button type="submit" className="btn btn-primary btn-lg btn-block" disabled={error.password || error.email }>Login</button>
                                        <br /><br />
                                        <p id="horizontal"> &nbsp;&nbsp; or &nbsp;&nbsp;</p>
                                </form>
                                <div className="new">
                                        Don't have account?
                                        <Link id="forget" className="nav-link" to="/Register">
                                                Sign up
                                        </Link>
                                </div>
                        </div>
                </div>

        )
}

export default Login;