import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const STORAGE_KEY = 'videoplayer-current-time';

const iframe = document.querySelector('iframe');
const player =  new Player(iframe);
  
 player.on('play', function() {
    const lastPosition =  localStorage.getItem(STORAGE_KEY);
    player.setCurrentTime(lastPosition)
    .then(function(seconds) { 
       
    }).catch(function(error) {
     switch (error.name) {
        case 'RangeError':
           break;    
        default:
           break;
       }
    });
 player.on('timeupdate', throttle(ontimeUpdate, 1000));
});

function ontimeUpdate({ seconds }) {
  try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(seconds));
     // console.log(localStorage.getItem(STORAGE_KEY));
    } catch (error) {
       console.log(error.name);
    }
  }

