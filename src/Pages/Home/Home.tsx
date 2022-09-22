import { Menu } from "../../Components/Menu/Menu"
import '../Home/Home.css';
import oi from "./img/oi.mp4";
export const Home = ()=> {
    return(
        <div className="home">
        <header>
            
        <nav className="home"></nav>
        <h1>ELLE</h1>
        <Menu />
       </header>
       <h1>Sejam bem-vindos</h1>
       <h1>Essa é a sua chance!</h1>

       <div className="oi">
        <video src={oi} width="2000" height={400} autoPlay loop muted></video>
       </div>
        </div>
    )
}