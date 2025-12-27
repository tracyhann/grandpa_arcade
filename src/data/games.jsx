import React from "react";
import { BookOpen, Calculator, Shapes, Box, Pickaxe, Brush } from "lucide-react";

const ICONS = {
  idiom: BookOpen,
  math: Calculator,
  geometry: Shapes,
  sokoban: Box,
  miner: Pickaxe,
  "monkey-doodle": Brush,
};

export const GAMES_LIST = [
  {
    id: "idiom",
    title: "成语填词",
    hint: "动动脑筋",
    iconKey: "idiom",
    iconClass: "text-blue-500",
    url: "/games/idiom/",
    color: "bg-blue-50",
    borderColor: "border-blue-200",
    shadowColor: "shadow-blue-100",
  },
  {
    id: "math",
    title: "每日算数",
    hint: "口算练习",
    iconKey: "math",
    iconClass: "text-green-500",
    url: "/games/math/",
    color: "bg-green-50",
    borderColor: "border-green-200",
    shadowColor: "shadow-green-100",
  },
  {
    id: "geometry",
    title: "每日几何",
    hint: "认认图形",
    iconKey: "geometry",
    iconClass: "text-purple-500",
    url: "/games/geometry/",
    color: "bg-purple-50",
    borderColor: "border-purple-200",
    shadowColor: "shadow-purple-100",
  },
  {
    id: "sokoban",
    title: "推箱子",
    hint: "力气活儿",
    iconKey: "sokoban",
    iconClass: "text-orange-500",
    url: "/games/sokoban/",
    color: "bg-orange-50",
    borderColor: "border-orange-200",
    shadowColor: "shadow-orange-100",
  },
  {
    id: "miner",
    title: "快乐矿工",
    hint: "挖大金子",
    iconKey: "miner",
    iconClass: "text-amber-500",
    url: "/games/miner/",
    color: "bg-amber-50",
    borderColor: "border-amber-200",
    shadowColor: "shadow-amber-100",
  },
  {
    id: "monkey-doodle",
    title: "爷爷战猴子",
    hint: "快乐涂鸦",
    iconKey: "monkey-doodle",
    iconClass: "text-pink-500",
    url: "/games/monkey-doodle/",
    color: "bg-red-50",
    borderColor: "border-red-200",
    shadowColor: "shadow-red-100",
  },
];

export function getGameById(id) {
  return GAMES_LIST.find((g) => g.id === id) || null;
}

export function GameIcon({ iconKey, className = "" }) {
  const Icon = ICONS[iconKey] || BookOpen;
  return <Icon className={className} />;
}
