import cinema from "./download (1).jfif"
function home(){

return(
    <>
    <br/><br/>
 <marquee><h1 style={{textShadow:"3px 5px 5px slateblue",color:"black", fontWeight: "bold",fonFamily: "Georgia, 'Times New Roman', Times, serif"}}>Welcome from home page</h1></marquee>
   <br/><br/>
    <img src={cinema} style={{width:"200px"}}/>
    </>
)

}
export default home;