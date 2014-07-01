$(document).ready(function() {

	$("img#advsheadlbpic_0").show();
    $('.ad-dots li').eq(0).addClass('active');
	var timer = setInterval("$().advsHeadLbRoll()", 5000);

    $('.ad-dots li').click(function()
    {
        //clearInterval(timer);
        var nowId = $('.ad-dots li').index($('.ad-dots li.active'));
        var nextId = $('.ad-dots li').index(this);
        $(".advsheadlbpic").stop(true, true);
        $("img#advsheadlbpic_"+nextId).show();
        $("img#advsheadlbpic_"+nowId).hide();
        $('.ad-dots li').removeClass('active').eq(nextId).addClass('active');
        //var timer = setInterval("$().advsHeadLbRoll()", 5000);
    });

	(function($){

		$.fn.advsHeadLbRoll = function(){

			var rollobj=$(".advsheadlbpic");
			var rolltotal=parseInt(rollobj.size())-1;
			var nextId,nowId;
			$("img.advsheadlbpic").each(function(){

				if(this.style.display=='block' || this.style.display=='inline'){
					nowId=parseInt(this.id.substr(14));
					if(nowId>=rolltotal){
						nextId=0;
					}else{
						nextId=nowId+1;
					}
				}
			});
            $("img#advsheadlbpic_"+nextId).show();
            $("img#advsheadlbpic_"+nowId).hide();
            $('.ad-dots li').removeClass('active').eq(nextId).addClass('active');
//            $("img#advsheadlbpic_"+nextId).show();
//            $("img#advsheadlbpic_" + nowId).fadeOut('slow', function()
//            {
//                $('.ad-dots li').removeClass('active').eq(nextId).addClass('active');
//
//            });
//			$("img#advsheadlbpic_"+nextId).fadeIn('slow', function()
//            {
//                $('.ad-dots li').removeClass('active').eq(nextId).addClass('active');
//                $(this).siblings().hide();
//            });

		};

	})(jQuery);

});
