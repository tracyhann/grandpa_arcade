export default function JellyStyles() {
  return (
    <style>{`
      .jelly-font {
        color: #ff85a1;
        text-shadow: 4px 4px 0px #fff, 8px 8px 0px rgba(255, 133, 161, 0.1);
        filter: drop-shadow(0px 4px 4px rgba(0,0,0,0.05));
        letter-spacing: -2px;
      }
      .btn-bounce:active { transform: scale(0.95); }
    `}</style>
  );
}
