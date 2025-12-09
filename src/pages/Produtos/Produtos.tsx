import './Produtos.css';

import banner_1 from "../../assets/img/123.png";
import drop_lock from "../../assets/img/DropDadoCostasPreta.png";
import mask_off_black from "../../assets/img/DropMaskFrente.png";
import drop_lock_white from "../../assets/img/DropDadoFrente.png";
import skull_drop_white from "../../assets/img/DropCaveira2.png";
import type { WearRarin } from "../../types/WearRarin";
import { useEffect, useState } from 'react';
import { getWearRarin } from '../../services/WearRarinService';
import CardProduto from '../../components/CardProduto/CardProduto';
import Carrosel from '../../components/Carrosel/Carrosel';
import Header from '../../Header/Header';
import { useLocation } from 'react-router-dom';

export default function Produtos() {

    const [WearRarin, setWearRarin] = useState<WearRarin[]>([]);
    const location = useLocation();

    const parametrosPesquisados = new URLSearchParams(location.search);
    const termo_pesquisado = parametrosPesquisados.get('query');



    const fetchWearRarin = async () => {
        try {
            const dados = await getWearRarin();

            if (termo_pesquisado) {
                const dados_filtrados = dados.filter(w =>
                    w.nome.toLowerCase().includes(termo_pesquisado.toLowerCase()) ||
                    w.descricao.toLowerCase().includes(termo_pesquisado.toLowerCase()) ||
                    w.categoria.some(cat => cat.toLowerCase().includes(termo_pesquisado.toLowerCase()))
                );
                setWearRarin(dados_filtrados);
            } else
         setWearRarin(dados);
        } catch (error) {
            console.error("Erro ao executar getWearRarin", error);
        }

        
    }

    useEffect(() => {
        fetchWearRarin();
        console.log("Termo pesquisado", termo_pesquisado);
    }, [termo_pesquisado])

    return (
        <>
            <Header />
            <main>

                <Carrosel />

                <section className="container_produtos">
                    <h1 className="acessivel">Camisas</h1>
                    <div className="titulo">
                    <span>
                    
                       {

                         termo_pesquisado ? `Resultados para: ${termo_pesquisado}`: "Nome da categoria"

                       }

                    </span>
                    </div>
                   
                    <section className="cards">

                        {
                            WearRarin.map((w: WearRarin) => (
                                <CardProduto
                                    imagens={w.imagens[0] ?? ""}
                                    nome={w.nome}
                                    preco={w.preco}
                                />
                            ))
                        }

                    </section>

                </section>

            </main>
        </>

    )

}
