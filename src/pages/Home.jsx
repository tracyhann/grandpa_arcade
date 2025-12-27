import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Heart, Sparkles } from "lucide-react";
import { GAMES_LIST, GameIcon } from "../data/games";
import JellyStyles from "../components/JellyStyles";

export default function Home() {
  const nav = useNavigate();
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) =>
    date.toLocaleTimeString("zh-CN", { hour: "2-digit", minute: "2-digit" });

  return (
    <div className="min-h-screen bg-[#fffafa] font-sans text-slate-800 pb-16 select-none">
      <JellyStyles />

      <header className="pt-20 pb-12 px-6 text-center">
        <h1 className="text-8xl md:text-[120px] font-black jelly-font mb-10 flex items-center justify-center gap-6">
          <Sparkles className="w-16 h-16 md:w-24 md:h-24 text-pink-300 fill-pink-200" />
          爷爷的游戏厅
        </h1>

        <div className="inline-block bg-white px-12 py-5 rounded-full border-4 border-pink-100 shadow-sm">
          <span className="text-4xl md:text-6xl font-black text-pink-400">
            {formatTime(currentTime)} · 选一个玩吧
          </span>
        </div>
      </header>

      <main className="max-w-7xl mx-auto p-6 md:p-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 md:gap-20">
          {GAMES_LIST.map((game) => (
            <button
              key={game.id}
              onClick={() => nav(`/game/${game.id}`)}
              className={`flex flex-col items-center justify-center p-14 rounded-[100px] border-[16px] ${game.borderColor} bg-white 
                          transition-all btn-bounce shadow-2xl ${game.shadowColor} hover:shadow-pink-100`}
              aria-label={`打开游戏：${game.title}`}
            >
              <div className={`p-10 rounded-full ${game.color} mb-10 shadow-inner`}>
                <GameIcon
                  iconKey={game.iconKey}
                  className={`w-28 h-28 md:w-32 md:h-32 ${game.iconClass}`}
                />
              </div>

              <h2 className="text-7xl md:text-9xl font-black text-slate-700">
                {game.title}
              </h2>

              <div className="mt-4 bg-slate-50 px-8 py-2 rounded-full">
                <span className="text-3xl font-bold text-slate-400">{game.hint}</span>
              </div>
            </button>
          ))}
        </div>
      </main>

      <footer className="text-center mt-12 mb-10">
        <Heart className="w-20 h-20 text-pink-100 mx-auto fill-pink-50 animate-pulse" />
        <p className="text-3xl font-bold text-pink-200 mt-4 italic tracking-widest opacity-60">
          —— 您的乖孙儿用心制作 ——
        </p>
      </footer>
    </div>
  );
}
