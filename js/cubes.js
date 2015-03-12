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

	function makeSquare(color,className,val){
		var div = make('div');
			content = make('div');
			content.innerHTML = val;
			content.className = "content";
			div.className = className
			div.style.backgroundColor = color;
			// div.style.height = sideLength;
			// div.style.width = sideLength;
			div.appendChild(content);
		return div
	}



	function createCube(letter){
		var front = makeSquare("red","front",letter);
		var top = makeSquare("green","bottom",letter);
		var cube = make('div');
			cube.className = "cube";

		cube.appendChild(top);
		cube.appendChild(front);
		console.log(cube);
		return cube;
	}

	var message = select('.container');

	for(i in message){
		var container = message[i];
		var letter = container.id;
		container.appendChild(createCube(letter));
	}