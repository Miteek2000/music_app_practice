import * as elements from "./HTML_elements";
import player from "./player";

export default function (){
window.addEventListener('DOMContentLoaded', () => {
    player.inizializerPlayer();
    const playingNow = songs[player.song];
})}



elements.lastest.addEventListener('click', function(){
    if(!last.length == 0){
        playlist.push(playingNow);
        playingNow = last.pop();
        loadSong(playingNow)
    }
});

elements.forward.addEventListener('click', function(){
    if(!playlist.length == 0){
        last.push(playingNow);
        playingNow = playlist.pop();
        loadSong(playingNow)
    }
});

elements.play_btn.addEventListener("click", playPause);

