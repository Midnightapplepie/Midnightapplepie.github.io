// function create(elementName){
// 	return document.createElement(elementName);
// }

// function createRow(sidelength){
// 	var parent = document.querySelector('#flip-box')
// 	var w = parent.offsetWidth;

// 	var row = create('div');

// 	for (var i=1; i< w/sidelength; i++){
// 		var div = create('div');
// 			div.style.width=sidelength+'px';
// 			div.style.height=sidelength+'px';
// 			div.style.backgroundColor='red';
// 			div.style.display="inline-block";
// 			div.style.lineHeight="none";
// 			row.appendChild(div);
// 	}
// 	return row
// }

// function addRows(sidelength){
// 	var parent = document.querySelector('#flip-box')
// 	var h = parent.offsetHeight;

// 	for (var i=1; i<h/sidelength; i++){
// 		parent.appendChild(createRow(sidelength));
// 	}
// }

// addRows(50);

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



// function showMessage(){
// 	var messages = $('.message');
// 	$('.message').toggle("slide","up",6000);
// 	// for(i in messages){
// 	// 	setTimeout(function(){
// 	// 		$(messages[i]).slideUp(600);
// 	// 	},800)
// 	// }
// }

$(document).scroll(function(){
	var y = $(this).scrollTop();
	var aboutMe = $('#about-me').offset().top;
	if (y+window.innerHeight >= aboutMe && $('.message').length > 0){
		var messages = $(".message");
		showMessage(0,messages);
	} 
})

function showMessage(n,elements){
	if (n < elements.length){
		$(elements[n]).fadeIn(1000);
		setTimeout(function(){
			showMessage(n+1,elements)
		},1000)
	}
}