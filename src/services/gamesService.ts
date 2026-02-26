
import { api } from "./api";
import type { Game } from "../types/Game";

// Lista jogos
export const getGames = async (): Promise<Game[]> => {
  const response = await api.get("/games");
  return response.data.results;
};

// Buscar por nome
export const searchGames = async (query: string): Promise<Game[]> => {
  const response = await api.get(`/games?search=${encodeURIComponent(query)}`);
  return response.data.results;
};

/*
  O ? indica:

  Início dos parâmetros de consulta (query params)

  Tudo depois do ? vira filtros da URL.
*/

// Detalhes do jogo
export const getGameDetails = async (id: string) => {
  const response = await api.get(`/games/${id}`);
  return response.data;
};

