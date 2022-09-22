import { Menu } from "../../Components/Menu/Menu"
import '../Home/Home.css';
import oi from "./img/oi.mp4";
export const Home = ()=> {
    return(
        <>
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
       
       <h1>Se inscreva</h1>

       <form action="">
    <div>
        <label form="name">Nome: </label>
        <input type="text" id="name" />

        <label form="sobrenome">Sobrenome: </label>
        <input type="text" id="sobrenome" />
    </div>
    
    <div>
        <label form="endereço">Estado: </label>
        <input type="text" id="endereço" />

        <label form="endereço">Cidade: </label>
        <input type="text" id="endereço" />
   </div>

   <div>
        <label form="endereço">Rua: </label>
        <input type="text" id="endereço" />

        <label form="endereço">Data de nascimento: </label>
        <input type="text" id="endereço" />
    </div>

   <div>
        <label form="nomeRes">Nome do responsável(se for menor que 18 anos): </label>
        <input type="text" id="nomeRes" />
    </div>
    <div className="button">
        <button type="submit">Se inscreva</button>
    </div>
</form>
        </>
    )
}