function select(name){
		var elements = document.querySelectorAll(name);
		if (elements.length > 1){
			return elements;
		}else{
			return elements[0];
		}
	}

	function make(name,className){
		return document.createElement(name);
	}

	function makeSquare(className,val){
		var div = make('div');
			content = make('div');
			content.innerHTML = val;
			content.className = "content "+className.substr(3,className.length-1);
			div.className = className
			div.appendChild(content);
		return div
	}



	function createCube(letter){
		var front = makeSquare("op-front",letter);
		var top = makeSquare("op-bottom",letter);
		var cube = make('div');
			cube.className = "cube";

		cube.appendChild(top);
		cube.appendChild(front);
		return cube;
	}

	var message = select('.container');
	for(var i=0; i < message.length; i++){
		var container = message[i];
		var word = container.id.toUpperCase();
		container.appendChild(createCube(word));
	}

	$('.cube').on('touchstart hover focus',function(e){
		if(e.type == 'touchstart'){
			console.log(e.target);
			$(e.target).trigger('hover');
		}
	})