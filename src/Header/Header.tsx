import { Nav, Navbar } from 'react-bootstrap';
import './Header.css';

export default function Header() {
    return (
        <header>

            <Navbar expand="md" className="icons">
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className='me-auto conteudo-nav'>
                        <Nav.Item>
                            <svg xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 448 512">
                                <path fill="currentColor"
                                    d="M0 72c0-4.4 3.6-8 8-8l432 0c4.4 0 8 3.6 8 8s-3.6 8-8 8L8 80c-4.4 0-8-3.6-8-8zM0 256c0-4.4 3.6-8 8-8l432 0c4.4 0 8 3.6 8 8s-3.6 8-8 8L8 264c-4.4 0-8-3.6-8-8zM448 440c0 4.4-3.6 8-8 8L8 448c-4.4 0-8-3.6-8-8s3.6-8 8-8l432 0c4.4 0 8 3.6 8 8z" />
                            </svg>
                        </Nav.Item>
                        <svg xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 640 640">
                            <path fill="currentColor"
                                d="M464 272C464 166 378 80 272 80C166 80 80 166 80 272C80 378 166 464 272 464C378 464 464 378 464 272zM413.3 424.6C376.2 459 326.6 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272C480 326.6 459 376.2 424.6 413.3L573.6 562.3C576.7 565.4 576.7 570.5 573.6 573.6C570.5 576.7 565.4 576.7 562.3 573.6L413.3 424.6z" />
                        </svg>

                        <h1>wear rarin</h1>

                        <Nav.Item className="icons_fim">
                            <svg xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 640 640">
                                <path fill="currentColor"
                                    d="M240 128L240 192L400 192L400 128C400 83.8 364.2 48 320 48C275.8 48 240 83.8 240 128zM224 208L144 208C126.3 208 112 222.3 112 240L112 448C112 492.2 147.8 528 192 528L448 528C492.2 528 528 492.2 528 448L528 240C528 222.3 513.7 208 496 208L416 208L416 280C416 284.4 412.4 288 408 288C403.6 288 400 284.4 400 280L400 208L240 208L240 280C240 284.4 236.4 288 232 288C227.6 288 224 284.4 224 280L224 208zM224 192L224 128C224 75 267 32 320 32C373 32 416 75 416 128L416 192L496 192C522.5 192 544 213.5 544 240L544 448C544 501 501 544 448 544L192 544C139 544 96 501 96 448L96 240C96 213.5 117.5 192 144 192L224 192z" />
                            </svg>
                        </Nav.Item>

                        <Nav.Item>
                            <svg xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 448 512">
                                <path fill="currentColor"
                                    d="M112 128a112 112 0 1 1 224 0 112 112 0 1 1 -224 0zm240 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0zM16 480c0-88.4 71.6-160 160-160l96 0c88.4 0 160 71.6 160 160l0 24c0 4.4 3.6 8 8 8s8-3.6 8-8l0-24c0-97.2-78.8-176-176-176l-96 0C78.8 304 0 382.8 0 480l0 24c0 4.4 3.6 8 8 8s8-3.6 8-8l0-24z" />
                            </svg>
                        </Nav.Item>
                        </Nav>
                        </Navbar.Collapse>
                         <Navbar.Toggle aria-controls="basic-navbar-nav" className='ms-auto' />
                    </Navbar>

                </header>
                )
}