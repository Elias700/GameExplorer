
import { useEffect, useState } from "react";
import { getGameDetails } from "../../services/gamesService";
import type { GameModalProps } from "../../types/GameModalProps";

export function GameModal({ gameId, onClose }: GameModalProps) {
    const [game, setGame] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    //  Buscar detalhes do jogo
    useEffect(() => {
        const fetchGame = async () => {
            try {
                const data = await getGameDetails(gameId);
                setGame(data);
            } catch (error) {
                console.error("Erro ao buscar detalhes do jogo");
            } finally {
                setLoading(false);
            }
        };

        fetchGame();
    }, [gameId]);

    // 🔥 Fechar com ESC
    useEffect(() => {
        const handleEsc = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                onClose();
            }
        };

        window.addEventListener("keydown", handleEsc);

        return () => {
            window.removeEventListener("keydown", handleEsc);
        };
    }, [onClose]);

    // 🔥 Travar scroll do body
    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);

    return (
        <div
            onClick={onClose}
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className="bg-gray-900 text-white rounded-2xl 
                   w-full max-w-3xl max-h-[90vh] 
                   overflow-y-auto relative shadow-2xl"
            >
                {/* Botão fechar */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-white text-xl"
                >
                    ✖
                </button>

                {loading && (
                    <div className="p-6">
                        <p className="text-gray-300">Carregando detalhes...</p>
                    </div>
                )}

                {!loading && game && (
                    <>
                        <img
                            src={game.background_image}
                            alt={game.name}
                            className="w-full h-64 object-cover rounded-t-2xl"
                        />

                        <div className="p-6">
                            <h2 className="text-3xl font-bold mb-2">{game.name}</h2>

                            <p className="text-yellow-400 mb-2">
                                ⭐ {game.rating}
                            </p>

                            <p className="text-gray-400 text-sm mb-4">
                                Lançamento: {game.released}
                            </p>

                            <p className="text-gray-300 text-sm leading-relaxed">
                                {game.description_raw}
                            </p>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}