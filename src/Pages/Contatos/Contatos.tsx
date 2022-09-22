import { Menu } from "../../Components/Menu/Menu"
import '../Contatos/Contatos.css'
export const Contatos = ()=> {
    return(
        <>
        <header>  
        <nav className="contatos"></nav>
        <h1>Contatos</h1>
<Menu />
      
       </header>
        <form action="#">
    <div>
        <label form="name">Nome do(a) Modelo:</label>
        <input type="text" id="name" />

        <label form="name"> Sobrenome: </label>
        <input type="text" id="sobrenome" />
    </div>
    <div>
        <label form="mail">E-mail:</label>
        <input type="email" id="mail" />
        
        <label form="numero"> Número:</label>
        <input type="text" id="numero" />
    </div>
    <div>
    <label form="estado">Estado: </label>
        <input type="estado" id="estado" />
    </div>
    <div>
    <label form="nomeResp"> Cidade:</label>
        <input type="cidade" id="cidade" />
    </div>
    <div>
    <label form="nascimento"> Data de nascimento:</label>
        <input type="text" id="nascimento" />

    <label form="nomeresp">Nome do responsável(caso tenha menos de 18 anos):</label>
        <input type="text" id="nomeResp" />
    </div>
    <div>
        <label form="msg">Mensagem(caso tenha algum hobbie como dançar, cantar etc):</label><br></br>
        <textarea id="msg"></textarea>
    </div>
    <div className="button">
        <button type="submit">Enviar seu cadastro</button>
    </div>
</form>
    
        </>
    )
}