
import { useEffect, useState } from "react";
import { getGames, searchGames } from "../services/gamesService";
import type { Game } from "../types/Game";

export function useGames() {
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(false);
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

  const handleSearch = async (query: string) => {
    if (!query) {
      fetchGames();
      return;
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