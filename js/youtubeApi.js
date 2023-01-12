var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
function onYouTubeIframeAPIReady() {
  new YT.Player('player', { // id='player' 인 요소를 youtube 라이브러리의 player 메소드가 알아서 찾아준다 
    videoId: 'An6LvWQuj_8', // 최초 재생할 유튜브 영상 ID
    playerVars: {
      autoplay: true, //자동 재생 유무
      loop: true, // 반복 재생 유무
      playlist: 'An6LvWQuj_8' // 반복 재생시 필수, 반복 재생할 유뷰트 영상 ID 목록
    },
    events: {
      onReady:(event) => {//onReady는 영상이 플레이 할 준비가 되면(시작 되면)
        event.target.mute();// 음소거
      }
    }
  });
}