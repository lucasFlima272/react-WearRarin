import axios from "axios";
import type { WearRarin } from "../types/WearRarin";

export const getWearRarin = async (): Promise<WearRarin[]> => {
    try{
        const resposta = await axios.get("http://localhost:3000/produtos")
    return resposta.data
    }catch (error) {
        console.error("Erro ao buscar os dados:", error);
        throw error;
    }

}