brand= document.querySelector(".navbar-brand");

$(window).on("scroll", function() {
    // var s = 200 - Math.min(100, $(document).scrollTop());
    console.log($(document).scrollTop());
    if ($(document).scrollTop()>100) {
    		$(".navbar-brand").width(126).height(90);
    		brand.style.top="0px";
    }
    else{
    	$(".navbar-brand").width(126).height(126);
    	brand.style.top="50px";
    }
    // while($(document).scrollTop()){

    // 	if ($(document).scrollTop()>100) {
    // 		$(".navbar-brand").width(126).height(50);
    // 	}
    	
    // 	else{
    // 		$(".navbar-brand").width(126).height(126);
    // 	}
    // }
    
})
