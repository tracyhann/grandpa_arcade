### Convert .ogg to .mp3 local audio assets
<pre>
ffmpeg -i grandpa-arcade/public/games/math/assets/jingles_NES12.ogg \
  -ac 1 -ar 44100 -b:a 128k \
  grandpa-arcade/public/games/math/assets/win.mp3
<pre\>
<pre>
npm install
npm run build
npm run preview
<pre\>
