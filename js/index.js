function select(elementName){
    var elements = document.querySelectorAll(elementName);
    if (elements.length === 1){
        return elements[0];
    }
    return elements
}
select('#resume').onclick=function(e){
        e.preventDefault();
        render("./templates/resume.html");
    }

select('#aboutMe').onclick=function(e){
        e.preventDefault();
        render("./templates/about_me.html");
    }

var render=function(templateName){
    var view = $('#view');
    view.empty();
    view.load(templateName);
}


//animation JS
var colorSet=[
["black","white","white","black","white","black"],
["#54AFE8","white","#695646","#BA5242","white","#45E894"],
["black","white","white","black","white","black"],
["#54AFE8","white","#695646","#BA5242","#white","#45E894"],
["black","white","white","black","white","black"],
["#54AFE8","white","#695646","#BA5242","#white","#45E894"],
];

var messageSet=[

]

function colorMessage(){
	var messageBox = select('.shadow');
	for (var i=0; i < messageBox.length; i++){
		messageBox[i].style.backgroundColor = colorSet[0][i];
        $(messageBox[i]).hide();
	}
}

colorMessage();

function rand(array){
    var index = Math.floor(Math.random()*array.length)
    console.log(index)
    return index
}

function showMessage(index){
    var messageBoxes = $('.shadow');
    var i = index;
    $(messageBoxes[i]).fadeIn(3000);
    setTimeout(function(){
        i++;
        if (i < messageBoxes.length){showMessage(i)};
        if (i === messageBoxes.length){
            setTimeout(function(){animateSlide(0,colorSet[rand(colorSet)])},8000);
        }
    },600);
}

showMessage(0);

function changeColor(element, action, color){
    var original = $(element);
    var copy = original.clone();
    copy.hide();
    var width = copy.width();
    copy.css({"background-color":color});
    original.after(copy);
    original.remove();
    copy.toggle("slide",{direction: action},500);
}

function animateSlide(index, array){
    var i = index;
    var messageBoxes = $('.shadow');
    var actions = ["left","right","up","down"];
    changeColor(messageBoxes[i],actions[rand(actions)], array[i])
    setTimeout(function(){
        i++;
        if (i < messageBoxes.length){animateSlide(i,array)};
        if (i === messageBoxes.length){
            setTimeout(function(){animateSlide(0, colorSet[rand(colorSet)])},8000);
        }
    },600)
}

