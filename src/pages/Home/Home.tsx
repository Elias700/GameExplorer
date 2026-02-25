
import { useGames } from '../../hooks/useGames';

function Home() {
  const { games, loading, error, handleSearch } = useGames();

  return (
    <div className="p-6 text-white">
      <h1 className="text-3xl font-bold mb-6">GameExplorer 🎮</h1>

      {/* Input de busca */}
      <input
        type="text"
        placeholder="Buscar jogos..."
        className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 mb-6 outline-none focus:border-blue-500"
        onChange={(e) => handleSearch(e.target.value)}
      />

      {/* Estados */}
      {loading && <p>Carregando jogos...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {/* Grid simples */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {games.map((game) => (
          <div
            key={game.id}
            className="bg-gray-800 p-3 rounded-lg hover:scale-105 transition"
          >
            <img
              src={game.background_image}
              alt={game.name}
              className="rounded-md"
            />
            <h2 className="mt-2 font-semibold">{game.name}</h2>
            <p className="text-yellow-400 text-sm">⭐ {game.rating}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;