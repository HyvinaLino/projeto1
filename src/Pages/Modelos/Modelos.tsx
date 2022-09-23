import {Menu} from "../../Components/Menu/Menu"
import './Modelos.css'
import img1 from "./Img/img1.jpg";
import img2 from "./Img/img2.jpg";
import img3 from "./Img/img3.jpg";
import img4 from "./Img/img4.jpg";
import img5 from "./Img/img5.jpg";
import img6 from "./Img/img6.jpg";
import img7 from "./Img/img7.jpg";
import img8 from "./Img/img8.jpg";
import img9 from "./Img/img9.jpg";
import img10 from "./Img/img10.jpg";

export const Modelos = () =>{
    return(
        <>
        <header>
            <nav className="Modelos"></nav>
            <h1>MODELOS</h1>
            <Menu />
        </header>
        <h1>Conheça alguma de nossas modelos!</h1>
        <img className="a" src={img1} width="300"/> <img className="b" src={img2} width="300" /> <img className="c" src={img3} width="300" /> 

        <div>
        <img className="d" src={img4} width="300"/> <img className="e" src={img5} width="300" /> <img className="f" src={img6} width="300" /> 
        </div>

        <div>
        <img className="g" src={img7} width="300"/> <img className=" h" src={img8} width="300" /> <img className="i" src={img9} width="300" /> 
        </div>

        <div>
        <img className="j" src={img10} width="300"/>  
        </div>
        </>
    )
}