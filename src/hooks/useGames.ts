
import { useEffect, useState } from "react";
import { getGames, searchGames } from "../services/gamesService";
import type { Game } from "../types/Game";

export function useGames() {
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchGames = async () => {
    try {
      setLoading(true);
      const data = await getGames();
      setGames(data);
    } catch (err) {
      setError("Erro ao buscar jogos");
    } finally {
      setLoading(false);
    }
  };
  /*
    getGames retorna um array de jogos tipados como Game[].
    data recebe esse array, e setGames(data) salva esses jogos no estado games.
    Como o estado é Game[], cada jogo precisa seguir a interface Game. 
  */

  /*
    setGames(data) salva o array de jogos (tipado como Game[]) no estado games.
    Quando esse estado é atualizado, o React re-renderiza o componente Home,
    e o games.map() renderiza os dados na tela.
  */

  /*
    API → getGames → data → setGames → games atualiza → React re-renderiza → games.map() mostra na tela
  */

  const handleSearch = async (query: string) => {
    if (!query) {
      fetchGames();
      return;
      //Se o usuário apagou tudo do input retorne fetchGames() (lista original);
    }

    try {
      setLoading(true);
      const data = await searchGames(query);
      setGames(data);
    } catch (err) {
      setError("Erro na busca");
    } finally {
      setLoading(false);
    }
  };

  /*
    Quando o usuário digita no input, o onChange envia o valor para a função handleSearch.
    Se o input estiver vazio, a função chama fetchGames para carregar a lista original.
    Caso tenha texto, a função chama searchGames(query), que faz uma requisição para a API usando Axios.
    Os resultados retornados são salvos no estado com setGames, fazendo o React re-renderizar a lista na tela. 
  */

  /*
    INPUT
      ↓
    onChange
      ↓
    handleSearch(query)
      ↓
    ┌─────────────────────────────┐
    │ query vazio?                │
    ├──────────────┬──────────────┤
    │ SIM          │ NÃO          │
    │              │              │
    │ fetchGames   │ searchGames  │
    │              │              │
    │ lista padrão │ API chamada  │
    └───────┬──────┴───────┬──────┘
            ↓              ↓
    setGames(data)  setGames(data)
        ↓              ↓
    React renderiza jogos
  */

  useEffect(() => {
    fetchGames();
  }, []);

  return {
    games,
    loading,
    error,
    handleSearch,
  };
}