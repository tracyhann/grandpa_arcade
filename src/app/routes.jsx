import Home from "../pages/Home";
import Game from "../pages/Game";

export const routes = [
  { path: "/", element: <Home /> },
  { path: "/game/:id", element: <Game /> },
];
