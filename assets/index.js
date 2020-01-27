import MediaPlayer from './MediaPlayer.js';
import AutoPlay from './plugins/AutoPlay.js';
import AutoPause from './plugins/AutoPause.js';

const video = document.querySelector('video');
const buttonPlay = document.querySelector('#playButton');
const buttonMute = document.querySelector('#muteButton');

const player = new MediaPlayer({
	el: video,
	plugins: [
		// plugin list:
		new AutoPlay(),
		new AutoPause()
	]
});

buttonPlay.onclick = () => player.togglePlay();
buttonMute.onclick = () => player.toggleMuted();
