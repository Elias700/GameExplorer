
import type { Game } from "../../types/Game";

interface GameCardProps {
    game: Game;
    onClick: () => void;
}

export function GameCard({ game, onClick }: GameCardProps) {
    return (
        <div
            onClick={onClick}
            className="bg-gray-800 rounded-xl overflow-hidden cursor-pointer 
                 transform transition duration-300 hover:scale-105 
                 hover:shadow-lg hover:shadow-black/50"
        >
            <img
                src={game.background_image}
                alt={game.name}
                className="w-full h-48 object-cover"
            />

            <div className="p-4">
                <h2 className="text-lg font-semibold text-white truncate">
                    {game.name}
                </h2>

                <p className="text-yellow-400 text-sm mt-1">
                    ⭐ {game.rating}
                </p>

                <p className="text-gray-400 text-xs mt-1">
                    {game.released}
                </p>
            </div>
        </div>
    );
}