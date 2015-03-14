
$(".nav-item").click(function(e) {
	e.preventDefault();
	var destination = this.hash;

	// var destination = $(e).$target.attr('href')
    $('html, body').animate({
        scrollTop: $(destination).offset().top
    }, 600,'easeInOutCirc',function(){
    	window.location.hash = destination;
    });
});


$(document).scroll(function(){
	var y = $(this).scrollTop();
	var aboutMe = $('#about-me').offset().top;
	if (y+window.innerHeight >= aboutMe && $('.message').length > 0){
		var messages = $(".message");
		showMessage(0,messages);
	} 
})

// function showMessage(n,elements){
// 	if (n < elements.length){
// 		$(elements[n]).fadeIn();
// 		$(elements[n]).css("transform","translateY(0px)");
// 		setTimeout(function(){
// 			showMessage(n+1,elements)
// 		},200)
// 	}
// }

var resume = $('iframe').contents().find("body").height();
