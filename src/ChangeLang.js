import { useDispatch, useSelector } from "react-redux";
import { changeLang } from "./Store/Action";


function ChangeLang() {
    const myLang = useSelector((state) => state.lang)
    const dispatch = useDispatch()
    const handleLang = () => {
        dispatch(changeLang(myLang==="EN"?"AR":"EN"))
    }
    return (
        <>
            <h1>change {myLang}</h1>
            <button className="btn btn-info" onClick={() => handleLang()}>change</button>
        </>
    )
}

export default ChangeLang;