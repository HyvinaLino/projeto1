import '../Menu/menu.css'
import{ Link } from 'react-router-dom';


export const Menu= () =>{
    return(
    <>
    
     <header>
          
        <nav className="menu">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/serviços">Serviços</Link>
                </li>
                <li>
                    <Link to="/Contatos">Contatos</Link>
                </li>
            </ul>
        </nav>
     </header>
    </>
    );
}