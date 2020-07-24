import { Component, OnInit, AfterViewInit, Input } from '@angular/core';
import { LoadingService } from '../loading/loading.service';
import { fromEvent, Observable } from 'rxjs';
import { take } from 'rxjs/internal/operators/take';
import { delay, map, tap, finalize, concatMap } from 'rxjs/operators';

@Component({
  selector: 'app-yt-video',
  templateUrl: './yt-video.component.html',
  styleUrls: ['./yt-video.component.css'],
  providers: [LoadingService],
})
export class YtVideoComponent implements OnInit, AfterViewInit {
  constructor(private loadingService: LoadingService) {}
  @Input() videoUrl: string;
  loading$ = this.loadingService.loading$;

  /* 2. Initialize method for YT IFrame API */
  // initPlayer() {
  //   // Return if Player is already created
  //   if (window['YT']) {
  //     this.startVideo();
  //     return;
  //   }

  //   var tag = document.createElement('script');
  //   tag.src = 'https://www.youtube.com/iframe_api';
  //   var firstScriptTag = document.getElementsByTagName('script')[0];
  //   firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  //   /* 3. startVideo() will create an <iframe> (and YouTube player) after the API code downloads. */
  // }

  ngOnInit() {
    this.loadingService.loadingOn();
    // this.video = 'nRiOw3qGYq4';
    // this.initPlayer();
  }

  ngAfterViewInit() {
    this.addIframe();
    // window['onYouTubeIframeAPIReady'] = () => {
    //   this.startVideo();
    // };
  }

  addIframe() {
    var target = document.getElementById(this.videoUrl);
    target.style.display = 'none';
    var newFrame = document.createElement('iframe');

    newFrame.onload = () => {
      this.loadingService.loadingOff();
      console.log('LOADED');
      target.style.display = 'block';
    };
    newFrame.setAttribute(
      'src',
      'https://www.youtube.com/embed/' + this.videoUrl
    );
    newFrame.setAttribute('frameborder', '0');
    newFrame.height = '180px';
    newFrame.width = '320px';

    target.appendChild(newFrame);
  }
  // startVideo() {
  //   this.reframed = false;
  //   this.player = new window['YT'].Player('player', {
  //     videoId: this.video,
  //     width: 360,
  //     height: 180,
  //     playerVars: {
  //       autoplay: 0,
  //       modestbranding: 1,
  //       controls: 0,
  //       disablekb: 1,
  //       rel: 0,
  //       showinfo: 0,
  //       fs: 0,
  //       playsinline: 1,
  //     },
  //     events: {
  //       onStateChange: this.onPlayerStateChange.bind(this),
  //       onError: this.onPlayerError.bind(this),
  //       onReady: this.onPlayerReady.bind(this),
  //     },
  //   });

  //   this.obs$ = fromEvent(document.getElementById('player'), 'load').pipe(
  //     delay(0)
  //   );
  //   this.obs$.subscribe((v) => {
  //     console.log(v);
  //     this.loadingService.loadingOff();
  //   });
  // }

  // /* 4. It will be called when the Video Player is ready */
  // onPlayerReady(event) {
  //   if (this.isRestricted) {
  //     event.target.mute();
  //     event.target.pauseVideo();
  //   } else {
  //     event.target.pauseVideo();
  //   }
  // }

  // /* 5. API will call this function when Player State changes like PLAYING, PAUSED, ENDED */
  // onPlayerStateChange(event) {
  //   switch (event.data) {
  //     case window['YT'].PlayerState.PLAYING:
  //       if (this.cleanTime() == 0) {
  //         console.log('started ' + this.cleanTime());
  //       } else {
  //         console.log('playing ' + this.cleanTime());
  //       }
  //       break;
  //     case window['YT'].PlayerState.PAUSED:
  //       if (this.player.getDuration() - this.player.getCurrentTime() != 0) {
  //         console.log('paused' + ' @ ' + this.cleanTime());
  //       }
  //       break;
  //     case window['YT'].PlayerState.ENDED:
  //       console.log('ended ');
  //       break;
  //   }
  // }

  // cleanTime() {
  //   return Math.round(this.player.getCurrentTime());
  // }

  // onPlayerError(event) {
  //   switch (event.data) {
  //     case 2:
  //       console.log('' + this.video);
  //       break;
  //     case 100:
  //       break;
  //     case 101 || 150:
  //       break;
  //   }
  // }
}
