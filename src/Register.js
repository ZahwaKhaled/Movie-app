import { useState } from "react"
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Login";

const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
const validpassword = RegExp(/^((?=.*[A-Z])(?=.*@).{8,99})$/i)

function Register() {
    const [userData, setUserData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        username: ""
    })

    const [error, setErros] = useState({
        name: null,
        email: null,
        password: null,
        confirmPassword: null,
        username: null
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
                    : 'Not valid Email!'
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
        < >
            <div class="container">
                <br />
                <div className="row" id="logg">
                    <h2 id="log">Registeration Form </h2>
                    <form onSubmit={(e) => submitData(e)}>
                        <label for="name" className="form-label"><b>Name</b></label>
                        <input name="name" type="text" placeholder="Enter your name"
                            className={`form-control ${error.name && "border-danger"}`}
                            value={userData.name} onChange={(e) => changeUserData(e)} />

                        <p className="text-danger">  {error.name}  </p>

                        <label for="email" className="form-label"><b>Email</b></label>
                        <input name="useremail" placeholder="Enter your Email" type="email" className={`form-control ${error.email && "border-danger"}`} value={userData.email} onChange={(e) => changeUserData(e)} />

                        <p className="text-danger"> {error.email} </p>
                        <label for="username" className="form-label"><b>Username</b></label>
                        <input name="username" type="text" placeholder="Enter your UserName" className={`form-control ${error.username && "border-danger"}`} value={userData.username} onChange={(e) => changeUserData(e)} />

                        <p className="text-danger"> {error.username} </p>


                        <label for="cp" className="form-label"><b>Password</b></label>
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="input-group">
                                    <input name="password" placeholder="Enter your Password" type={userData} onChange={(e) => changeUserData(e)} value={userData.password} class="form-control" />
                                    <div className="input-group-btn ">
                                        <span class="input-group-text" style={{backgroundColor:"white"}}  >
                                            <Link className="outline-info" style={{ color: "black" ,height:"2.1rem" }} onClick={togglePassword}>
                                                {userData === "password" ? <i class="bi bi-eye-slash-fill"></i> : <i class="bi bi-eye-fill"></i>}
                                            </Link>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <p className="text-danger"> {error.password} </p>
                        </div>

                        <label for="confirmPassword" className="form-label" style={{ marginRight: "300px" }}><b>Confirm Password</b></label>
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="input-group">
                                    <input name="confirmPassword" placeholder="Re-enter your Password" type={userData} onChange={(e) => changeUserData(e)} value={userData.confirmPassword} class="form-control" />
                                    <div className="input-group-btn ">
                                    </div>
                                </div>

                            </div>
                            <p className="text-danger"> {error.confirmPassword} </p>
                        </div>
                        <button type="submit" className="btn btn-success btn-lg btn-block" disabled={error.password || error.email || error.username} >Sign up</button>

                    </form>
                    <div className="new">
                        Already member ?
                        <Link id="forget" className="nav-link" to="/Login">
                            Log in
                        </Link>
                    </div>
                </div>
            </div>
        </>

    )

}
export default Register;