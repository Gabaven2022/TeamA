$(window).scroll(function () {
    var scrollAnimationElm = document.querySelectorAll('.scroll_up');
    var scrollAnimationFunc = function () {
      for (var i = 0; i < scrollAnimationElm.length; i++) {
        var triggerMargin = 10;
        if (window.innerHeight > scrollAnimationElm[i].getBoundingClientRect().top + triggerMargin) {
          scrollAnimationElm[i].classList.add('show');
        }
      }
    }
    window.addEventListener('load', scrollAnimationFunc);
    window.addEventListener('scroll', scrollAnimationFunc);
  });

  $(window).scroll(function () {
    var scrollAnimationElm = document.querySelectorAll('.scroll_up2');
    var scrollAnimationFunc = function () {
      for (var i = 0; i < scrollAnimationElm.length; i++) {
        var triggerMargin = 15;
//5pxだけ遅く表示
        if (window.innerHeight > scrollAnimationElm[i].getBoundingClientRect().top + triggerMargin) {
          scrollAnimationElm[i].classList.add('show');
        }
      }
    }
    window.addEventListener('load', scrollAnimationFunc);
    window.addEventListener('scroll', scrollAnimationFunc);
  });


  // 背景色が伸びて出現（右から左）
  function BgFadeAnime(){

  $('.bgRLextendTrigger').each(function(){ 
    var elemPos = $(this).offset().top-50;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight){
      $(this).addClass('bgRLextend');
    }else{
      $(this).removeClass('bgRLextend');
    }
  });
   // 文字列を囲う子要素
  $('.bgappearTrigger').each(function(){ 
    var elemPos = $(this).offset().top-50;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight){
      $(this).addClass('bgappear');
    }else{
      $(this).removeClass('bgappear');
    }
  });   
}

// 画面をスクロールをしたら動かしたい場合に発動（簡易版）
  $(window).scroll(function (){
    BgFadeAnime();/* アニメーション用の関数を呼ぶ*/
  });

// 画面が読み込まれたらすぐに動かしたい場合に発動（簡易版）
  $(window).on('load', function(){
    BgFadeAnime();/* アニメーション用の関数を呼ぶ*/
  });