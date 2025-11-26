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

export default function Produtos() {

    const [WearRarin, setWearRarin] = useState<WearRarin[]>([]);

    const fetchWearRarin = async () => {
        try {
            const dados = await getWearRarin();
            console.log("Lista de camisas vinda da api", dados);
            setWearRarin(dados);
        } catch (error) {
            console.error("Erro ao executar getWearrarin:", error);
        }
    }

    useEffect(() => {
        fetchWearRarin();
    }, [])

    return (
        <>
           <header/>
            <main>

                <Carrosel />

                <section className="container">

                    <div className="titulo">
                        <span>OVERSIZED</span>
                    </div>

                    <section className="cards">

                        {
                            WearRarin.map((b: WearRarin) => (
                                <CardProduto
                                imagens={b.imagens [0] ?? ""}
                                nome={b.nome}
                                preco={b.preco}
                                />
                            ))
                        }

                    </section>

                </section>

            </main>
        </>

    )

}
