import { Link } from 'react-router-dom';
import './CardCategoria.css'
import type { CardCategoriaProps } from '../../types/CardProdutoProps';



export default function CardCategoria({rota, titulo, classeCss, ImgIconeCategoria }: CardCategoriaProps) {
    return (

        <Link to={rota} className={`card_categoriacamisa ${classeCss}`}>
            <div>
                <p>{titulo}</p>
            </div>

        {ImgIconeCategoria} alt={titulo} 
        </Link>


    )
}