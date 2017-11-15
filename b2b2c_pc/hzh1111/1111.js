$(function(){
    var shopName = $('.shop-name');
    var TOP = $('#TOP').height();
    var windowHeight = screen.height;
    var windowWidth = document.body.clientWidth;
    var showWidth = $('#show').width();
    if (windowHeight<=650&&windowWidth>1300) {
        $('#navUl').css('top',30);
    }else if(windowHeight<=780&&windowWidth>1300){
        $('#navUl').css('top',20);
        $('#navUl').css('font-size','12px');
    }else{
        $('#navUl').css('top',TOP+2);
    };
    $('#navUl').css('left',(windowWidth-showWidth)/2+showWidth+15);
    if (windowWidth<1500&&windowWidth>1300) {
        $('#Body').css('margin-left',50);
        $('#navUl').css('left',(windowWidth-showWidth)/2+showWidth-50);
    }else if (windowWidth<=1300) {
        $('#navUl').css('top',45);
        $('#Body').css('margin-left',3);
        $('#navUl').css('left',(windowWidth-showWidth)/2+showWidth-65);   
        $('#navUl').css('font-size','11px');
        $('#navUl').css('list-style-type','none');
    };
    if (navigator.appName === 'Microsoft Internet Explorer') { //判断是否是IE浏览器
　　  if (navigator.userAgent.match(/Trident/i) && navigator.userAgent.match(/MSIE 8.0/i)) { //判断浏览器内核是否为Trident内核IE8.0
        $('#rili1').css('margin-top','-150px')
                  .css('margin-left','66.6%');
        $('#benso1').css('margin-top','-150px')
                  .css('margin-left','83.3%');
        $('.JM div').css('width','221px'); 
        $('.TOK div').css('width','221px');  
         $('.TOK div').css('width','221px'); 
          $('.SHAN div').css('width','221px'); 
           $('.KQX div').css('width','221px'); 
            $('.ZD div').css('width','221px'); 
             $('.ZY div').css('width','221px'); 
              $('.KMS div').css('width','221px'); 
               $('.RILI div').css('width','221px'); 
                $('.YXM div').css('width','221px'); 
                 $('.ANBEN div').css('width','221px');
                 $('.YXM div').css('width','221px');        
　　    }
    }
    if (navigator.appName === 'Microsoft Internet Explorer') { //判断是否是IE浏览器
　　  if (navigator.userAgent.match(/Trident/i) && navigator.userAgent.match(/MSIE 9.0/i)) { //判断浏览器内核是否为Trident内核IE8.0
        $('#rili1').css('margin-top','-150px')
                  .css('margin-left','66.6%');
        $('#benso1').css('margin-top','-150px')
                  .css('margin-left','83.3%');
        $('.JM div').css('width','221px'); 
        $('.TOK div').css('width','221px');  
         $('.TOK div').css('width','221px'); 
          $('.SHAN div').css('width','221px'); 
           $('.KQX div').css('width','221px'); 
            $('.ZD div').css('width','221px'); 
             $('.ZY div').css('width','221px'); 
              $('.KMS div').css('width','221px'); 
               $('.RILI div').css('width','221px'); 
                $('.YXM div').css('width','221px'); 
                 $('.ANBEN div').css('width','221px');
                 $('.YXM div').css('width','221px');        
　　    }
    }

//直播
  // var ctLeft = $('.ct').css('margin-left');
  // var numCtLeft = parseInt(ctLeft);
  // var ifrTop = $('.ifr-div').height();
  // var m0Height = $('.m0').height();
  // // alert(ifrTop);
  // $('.ifr-div').css('left',ctLeft)
  //               .css('top',(TOP - ifrTop)/2);
  // $('.ifr-div').mousemove(function(){
  //     $('.ifr-div').css('left',windowWidth/2-750/2)
  //                   .css('top',TOP+m0Height);

  //    $('.ifr').css('width',750)
  //             .css('height',432);
  //   $('.ifr-span').css('display','inline-block');
  // })
  // $('.ifr-span').click(function(){
  //     $('.ifr-div').css('left',ctLeft)
  //                   .css('top',(TOP - ifrTop)/2);

  //    $('.ifr').css('width',350)
  //             .css('height',250);
  //   $('.ifr-span').css('display','none');    
  // })
  
  //登陆
  $('.login-div').css('left',windowWidth/2-160)
                  .css('top',windowHeight/2-250);
  if($.cookie('login') != 1){
    $('.login-zhe').css('display','inline-block');
     $('.login-div').css('display','inline-block');
    var x = 3;
    var sst;
    var st = function () {
        x--;
        console.log(x);
        $('.login-span').html(x);  
        clearTimeout(sst);
        if(x > 0){
          sst = setTimeout(st,1000);
        }else if(x <= 0){
          clearTimeout(sst);
          window.location.replace("http://www.cnhzh.com/Login.aspx?ReturnUrl=http%3a%2f%2fwww.cnhzh.com%2fMemberCenter.aspx");
        }  
    }
    sst = setTimeout(st,1000);
  }
})
$(document).ready(function() {
    var pid=$('.pid');
    $(pid).each(function(n){
         var spp1=$(pid[n]).find('.spp1').html();
         $(pid[n]).children('img').attr('src','img/'+spp1+'.jpg');
         $(pid[n]).attr('href','http://www.cnhzh.com/ProductChannel.aspx?pid='+spp1);
    })    
});