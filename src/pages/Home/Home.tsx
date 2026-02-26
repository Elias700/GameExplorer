
import { useGames } from '../../hooks/useGames';

function Home() {
  const { games, loading, error, handleSearch } = useGames();

  return (
    <div className="p-6 text-white">
      <h1 className="text-3xl font-bold mb-6">GameExplorer 🎮</h1>

      <input
        type="text"
        placeholder="Buscar jogos..."
        className=" 
          p-3 
          mb-6
          w-full
          rounded-lg 
          bg-gray-800 border 
          border-gray-700 
          outline-none 
          focus:border-blue-500
        "
        onChange={(e) => handleSearch(e.target.value)}
        // Quando o usuário digita no input o onChange pega o valor digitado e envia para query
      />

      {loading && <p>Carregando jogos...</p>}
      {error && <p className="text-red-500">{error}</p>}

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {games.map((game) => (
          <div
            key={game.id}
            className="
              bg-gray-800 
              p-3 
              rounded-lg 
              hover:scale-105 
              transition 
              cursor-pointer
            "
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