import { useSelector,useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { LANGUAGECONTEXT } from './Context/Context';
import { useContext } from "react";
import './Navbar.css';


function Navbar() {
    const { Context, setContext } = useContext(LANGUAGECONTEXT)
    const data = useSelector((state) => state.CartReducer.counter)
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark " dir={Context === "Ar" ? "rtl" : "ltr"}>
                <div className="container-fluid">
                    &nbsp; &nbsp; <i className="bi bi-film Fa-5x" style={{ color: "slateblue" }}></i>&nbsp;
                    <Link className="navbar-brand" to="#" style={{ color: "slateblue", fontWeight: "bold" }}>Movies</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0" id="nav" style={{ fontWeight: "bold" }}>
                            {/* <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/Home"> Home </Link>
                        </li> */}
                            <li className="nav-item">
                                <Link className="nav-link" to="/Movies" style={{ color: "white" }}>Movies List</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Login">Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Register">Register</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Favourites">Favourites {data.length} <i className="bi bi-heart" style={{ color: "slateblue" }}></i>&nbsp;&nbsp;</Link>
                            </li>
                            <Link  onClick={() => setContext(Context == "Ar" ? "En" : "Ar")} className="navbar-brand">{Context}</Link>

                            {/* <li className="nav-item" style={{color:"whitesmoke",listStyleType:"none"}}>
                           {Lang}
                        </li>&nbsp;&nbsp;&nbsp; */}
                        </ul>
                        <form className="d-flex">
                        
                            <input className="form-control me-2" type="search" placeholder="Search here .." aria-label="Search" style={{ height: "2.5rem" }} />
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;