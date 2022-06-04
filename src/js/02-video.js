import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const STORAGE_KEY = 'videoplayer-current-time';

const iframe = document.querySelector('iframe');
const player =  new Player(iframe);
  
localStorage.getItem(STORAGE_KEY)
player
  .setCurrentTime(localStorage.getItem(STORAGE_KEY))
  .then(function (seconds) {
    // seconds = the actual time that the player seeked to
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });

 player.on('timeupdate', throttle(ontimeUpdate, 1000));

function ontimeUpdate({ seconds }) {
  try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(seconds));
     // console.log(localStorage.getItem(STORAGE_KEY));
    } catch (error) {
       console.log(error.name);
    }
  }
