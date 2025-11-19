import './CardProduto.css'
import  WearRarin_default from "../../assets/camisa.png"
import {formatosService} from "../../services/formatosService"
import type { CardProdutoProps } from '../../types/CardProdutoProps';

export default function CardProduto({imagens,nome,preco}: CardProdutoProps) {
   
    return (
        <div className="card_produto">
            <img src={(imagens.length > 0) ?`http://localhost:3000/static/${imagens}` : WearRarin_default} alt={'imagens do produto'} />
            <h2> {nome} </h2>
            <span>{formatosService.precoBR(preco)} </span> 
        </div>
    )
}
