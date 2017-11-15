$(function(){
    var windowWidth = document.body.clientWidth;  
    if (navigator.appName === 'Microsoft Internet Explorer'&&windowWidth>1000) { //判断是否是IE浏览器
　　  if (navigator.userAgent.match(/Trident/i) && navigator.userAgent.match(/MSIE 8.0/i)) { //判断浏览器内核是否为Trident内核IE8.0
        $('.YUTE div').css('width','221px'); 
        $('.OEM div').css('width','250px');  
         $('.OMU div').css('width','221px');       
　　    }
    }
    // if (windowWidth<1000) {
    //    $('.colimg').css('margin-left','2%');
    //   $('.colimg1').css('margin-left','10%');
    //   $('.colimg1').css('margin-right','10%');
    //   $('.colimg3').css('margin-bottom','3%');
    //   $('.colimg3').css('margin-left','35%');
    //   $('.colimg4').css('margin-left','35%');
    //   $('.colimg3').css('margin-top','2%');
    //   $('.colimg4').css('margin-top','2%');
    //   $('#OMU img').css('margin-left','5%');
    //   $('#OMU').css('border','none');
    //   
    // };
    var pid=$('.pid');
    $(pid).each(function(n){
         var spp1=$(pid[n]).find('.spp1').html();
         $(pid[n]).children('img').attr('src','img/'+spp1+'.jpg');
         $(pid[n]).attr('href','http://www.cnhzh.com/ProductChannel.aspx?pid='+spp1);
    })
})
