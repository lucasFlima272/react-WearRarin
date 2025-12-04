import { Nav, Navbar } from 'react-bootstrap';
import './Header.css';
import react, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Header() {
    const [pesquisa, setPesquisa] = useState<string>("")
    const Navigate = useNavigate();

    const handleSearch = () => {
        if (!pesquisa.trim()) return;

        Navigate(`/produtos/pesquisa?query=${encodeURIComponent(pesquisa)}`);
        setPesquisa("");

    }

    const handleKeyDown = (evento: React.KeyboardEvent<HTMLInputElement>) => {
        if (evento.key === 'Enter') {
            handleSearch();
            
        }
    }




    return (
        <header>
            <Navbar expand="md" className="container_cabecalho">
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className='me-auto conteudo-nav'>



                        <Nav.Item className="box_busca" id="box_busca">
                            <svg className="icone_lupa" xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512">
                                <path fill="currentColor"
                                    d="M368 208a160 160 0 1 0 -320 0 160 160 0 1 0 320 0zM337.1 371.1C301.7 399.2 256.8 416 208 416 93.1 416 0 322.9 0 208S93.1 0 208 0 416 93.1 416 208c0 48.8-16.8 93.7-44.9 129.1L505 471c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L337.1 371.1z" />
                            </svg>
                            <input className="campo_busca"
                             type="text" 
                              value={pesquisa} 
                              onChange={p => setPesquisa(p.target.value)}
                              onKeyDown={handleKeyDown}
                              placeholder='pesquisar'
                              />
                        </Nav.Item>




                        <h1>WEAR RARIN</h1>


                    </Nav>
                </Navbar.Collapse>
                <Navbar.Toggle aria-controls="basic-navbar" className="ms-auto" />
            </Navbar>
        </header>

    )


}