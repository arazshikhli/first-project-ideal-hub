document.querySelector('.play').onclick=function(){
    console.log('play');
    document.querySelector('.video-media').play();
    document.querySelector('.play').style.display="none";
    document.querySelector('.intro-title').style.display="none";
    document.querySelector('.try-now').style.display="none";
}
document.querySelector('.close-btn').onclick=function(){
    console.log('stop');
    document.querySelector('.video-media').pause();
    document.querySelector('.video-media').currentTime=0;
    document.querySelector('.play').style.display="inline";
    document.querySelector('.intro-title').style.display="inline-block";
    document.querySelector('.try-now').style.display="inline-block";
}