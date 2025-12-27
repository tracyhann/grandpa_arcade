import React, { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, RefreshCw, Maximize2 } from "lucide-react";
import { getGameById } from "../data/games";

export default function Game() {
  const nav = useNavigate();
  const { id } = useParams();
  const game = useMemo(() => getGameById(id), [id]);

  const [currentTime, setCurrentTime] = useState(new Date());
  const containerRef = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (game) localStorage.setItem("grandpa_last_game", game.id);
  }, [game]);

  const formatTime = (date) =>
    date.toLocaleTimeString("zh-CN", { hour: "2-digit", minute: "2-digit" });

  const reloadIframe = () => {
    // 比 window.location.reload() 更温柔：只刷新 iframe
    const iframe = containerRef.current?.querySelector("iframe");
    if (iframe) iframe.src = iframe.src;
  };

  const goFullscreen = async () => {
    const el = containerRef.current;
    if (!el) return;
    if (document.fullscreenElement) {
      await document.exitFullscreen();
    } else {
      await el.requestFullscreen?.();
    }
  };

  if (!game) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center p-10 text-slate-800">
        <div className="text-6xl font-black mb-6">找不到这个游戏</div>
        <button
          onClick={() => nav("/")}
          className="text-4xl font-black bg-pink-500 text-white px-10 py-6 rounded-[40px]"
        >
          返回首页
        </button>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-white flex flex-col select-none overflow-hidden">
      <div className="bg-pink-500 h-32 md:h-40 px-8 md:px-14 flex items-center justify-between shadow-xl z-50">
        <button
          onClick={() => nav("/")}
          className="flex items-center gap-6 bg-red-500 active:bg-red-700 text-white font-black py-5 md:py-8 px-10 md:px-16 rounded-[60px] text-4xl md:text-6xl border-b-[10px] border-red-800 shadow-lg"
          aria-label="返回首页"
        >
          <ArrowLeft strokeWidth={8} className="w-12 h-12 md:w-20 md:h-20" />
          返回
        </button>

        <h2 className="text-white text-5xl md:text-7xl font-black hidden lg:block drop-shadow-md">
          正在玩：{game.title}
        </h2>

        <div className="flex items-center gap-6 md:gap-8">
          <span className="text-pink-100 text-4xl font-bold hidden md:block">
            {formatTime(currentTime)}
          </span>

          <button
            onClick={goFullscreen}
            className="p-6 md:p-8 bg-pink-400 rounded-full text-white active:bg-pink-300 border-4 border-pink-200 shadow-lg"
            aria-label="全屏/退出全屏"
            title="全屏"
          >
            <Maximize2 className="w-12 h-12 md:w-16 md:h-16" strokeWidth={6} />
          </button>

          <button
            onClick={reloadIframe}
            className="p-6 md:p-8 bg-pink-400 rounded-full text-white active:bg-pink-300 border-4 border-pink-200 shadow-lg"
            aria-label="刷新游戏"
            title="刷新"
          >
            <RefreshCw className="w-12 h-12 md:w-16 md:h-16" strokeWidth={6} />
          </button>
        </div>
      </div>

      <div ref={containerRef} className="flex-1 relative bg-slate-100">
        <iframe
          src={game.url}
          className="w-full h-full border-none"
          title={game.title}
          allow="fullscreen; autoplay; gamepad"
        />

        <div className="absolute top-10 left-10 animate-bounce pointer-events-none opacity-90">
          <div className="bg-yellow-400 text-slate-900 py-6 px-12 rounded-[50px] text-2xl md:text-4xl font-black shadow-2xl border-[8px] border-white flex items-center gap-4">
            ⬅️ 累了点这里返回
          </div>
        </div>
      </div>
    </div>
  );
}
