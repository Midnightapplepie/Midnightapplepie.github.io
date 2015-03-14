var skill = document.querySelector(".skill-box");
var skills = document.querySelectorAll(".ctn")

function transform(ele,xyz){
    var xyz = xyz.split('|');
    var location = "translate3d(x,y,z)".replace("x",xyz[0] + "px").replace("y",xyz[1] + "px").replace("z",xyz[2] + "px")
    console.log(location)
    ele.style.transform = location
}

function scatter(){
    for (var i = 0; i < skills.length; i++) {
        transform(skills[i],skills[i].dataset.xyz)

    };
};


scatter();

function toOrigin(){
        for (var i = 0; i < skills.length; i++) {
            transform(skills[i],"0|0|0");

        }
}

skill.onmouseover = function(){
    toOrigin();
}

select('#scatter').onclick=function(){
	scatter();
}