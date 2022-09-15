import "./style.css"
import{ Link } from 'react-router-dom';


export const Menu= () =>{
    return(
    <>
     <header>
            <h1 className="logo">Página inicial</h1>
        <nav className="menu">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/serviços">Serviços</Link>
                </li>
                <li>
                    <Link to="/contatos">Contatos</Link>
                </li>
            </ul>
        </nav>
     </header>
    </>
    );
}