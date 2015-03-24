(function(){

var model = {
	data:{
			"1":{name:"Cat1",count:0,img:"http://placekitten.com/700/500"},
			"2":{name:"Cat2",count:0,img:"http://placekitten.com/650/500"},
			"3":{name:"Cat3",count:0,img:"http://placekitten.com/600/700"},
			"4":{name:"Cat4",count:0,img:"http://placekitten.com/600/500"},
			"5":{name:"Cat5",count:0,img:"http://placekitten.com/600/650"}
			}
}

var controller={
	init: function(){
		var data = model.data;
		var keys = Object.keys(data);
		view.init(keys, data,this.activeCat);
	},

	activeCatId: "1",
	
	activeCat: {name:"Cat1",count:0,img:"http://placekitten.com/700/500"},

	updateActiveCat: function(id){
		model.data[id].count += 1;
		this.activeCatId = id;
		this.activeCat = model.data[id];
		this.renderCat();
	},

	updateCatInfo: function(name, count){
		model.data[this.activeCatId].name = name;
		model.data[this.activeCatId].count = count*1;
		this.renderCat();
	},

	renderCat: function(){
		view.render(this.activeCat);
		view.prepareForm();
	}
}

var view = {
	select: function(name){
		var elements = document.querySelectorAll(name);
		if (elements.length > 1){
			return elements;
		}else{
			return elements[0];
		}
	},

	init: function(keys,data,activeCat){
		this.createList(keys,data);
		this.render(activeCat);
		this.adminFormClickEvent();
	},

	adminFormClickEvent: function(){
		var adminBtn = this.select('#admin-btn');
		var adminCancel = this.select("#admin-cancel");
		var adminSave = this.select("#admin-save");
		var container = this.select("#admin-form-container");

		adminBtn.addEventListener("click",function(){
			container.classList.toggle('hide');
			view.prepareForm();
		})

		adminCancel.addEventListener("click", function(){
			container.classList.toggle('hide');
		})

		adminSave.addEventListener("click", function(){
			view.updateCatInfo()
		})
	},

	prepareForm:function(){
		var form = this.select("#admin-form");
			form.name.value = controller.activeCat.name;
			form.count.value = controller.activeCat.count;
	},

	updateCatInfo:function(){
		var form = this.select("#admin-form");
		var newName = form.name.value;
		var newCount = form.count.value;

		controller.updateCatInfo(newName,newCount); 
	},

	createList: function(keys, data){
		var list = this.select("#catList");

		for (var i = 0; i<keys.length; i++){
			var link = document.createElement('a');
				link.textContent = data[keys[i]].name;
				link.className+=" list-group-item";

				this.addClickEvent(link, keys[i]);
		
		list.appendChild(link);
		
		}
	},

	addClickEvent: function(ele, id){
		ele.addEventListener("click",function(){
				controller.updateActiveCat(id);
		});
	},

	render: function(cat){
			var image = view.select("#image");
			var name = view.select("#name");
			var count = view.select("#count");
		
				image.src = cat.img;
				name.textContent = cat.name;
				count.textContent = "Clicked " + cat.count;
	}
}

controller.init();

})();


	//***This is the original closure code// 

	// var list = select("#catList");

	// for(var i=0; i<keys.length; i++){
	// 	var link = document.createElement('a');
	// 		console.log(cats[keys[i]]);
	// 		link.textContent = cats[keys[i]].name;
	// 		link.className+=" list-group-item";

	// 		link.addEventListener("click",(function(id){
	// 			return function(){
	// 				var image = select("#image");
	// 				var name = select("#name");
	// 				var count = select("#count");
	// 					cats[id].count += 1;
	// 					image.src = cats[id].img;
	// 					name.textContent = cats[id].name;
	// 					count.textContent = "Clicked "+cats[id].count; 
	// 			}
	// 		})(keys[i]))
	// 	list.appendChild(link)
	// }