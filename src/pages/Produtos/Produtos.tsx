import './Produtos.css';

import banner_1 from "../../assets/img/123.png";
import drop_lock from "../../assets/img/DropDadoCostasPreta.png";
import mask_off_black from "../../assets/img/DropMaskFrente.png";
import drop_lock_white from "../../assets/img/DropDadoFrente.png";
import skull_drop_white from "../../assets/img/DropCaveira2.png";
import type { WearRarin } from "../../types/WearRarin";
import { useEffect, useState } from 'react';
import { getWearRarin } from '../../services/WearRarinService';

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
            <main>

                <section className="banner">
                    <img src={banner_1} />
                </section>

                <section className="container">

                    <div className="titulo">
                        <span>OVERSIZED</span>
                    </div>

                    <section className="cards">

                        {
                            WearRarin.map((b: WearRarin) => (
                                <div className="card_produto">
                                    <img src={`http://localhost:3000/static/${b.imagens[0]}`} alt="" />
                                    <h2> {b.nome} </h2>
                                  
                                </div>
                            ))
                        }

                    </section>

                </section>

            </main>
        </>

    )

}
