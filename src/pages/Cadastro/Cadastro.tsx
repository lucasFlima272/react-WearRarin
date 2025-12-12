import { useEffect, useState } from 'react';
import {getRoupas} from '../../services/roupasService';
import './Cadastro.css'
import type { Roupas } from '../../types/WearRarin';

export default function Cadastro() {

    const [roupas, setRoupas] = useState<Roupas[]>([]);

    const fetchRoupas = async () => {
        try {
            const dados = await getRoupas();
            setRoupas(dados); 
    } catch (error) {
            console.error("Erro ao executar getRoupas: ", Error);
        }
    }

    useEffect(() => {
        fetchRoupas();
    }, [])




    return (
        <>
            <main>

                <section className="container_cadastro">
                    <h2>Cadastro</h2>


                    <div className="box_cadastro">
                        <div className="Cadastro_coluna1">
                            <div className="oversized">
                                <label htmlFor="over">oversized</label>
                                <input type="text" name="" id="over" />
                            </div>

                            <div className="categoria_cadastro">
                                <div className="categoria">
                                    <label htmlFor="categoria">Categoria</label>
                                    <input type="text" name="" id="categoria" />
                                </div>
                            </div>
                        </div>


                        <div className="Cadastro_coluna2">
                            <label htmlFor="desc">Descrição</label>
                            <textarea name="" id="desc"></textarea>
                        </div>
                    </div>
                    <input className="confirmar" type="button" value="Confirmar" />
                </section>

            </main>
        </>
}
  )  