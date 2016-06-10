var famousPeople =[
	{
	  title: "Samurai",
	  name: "Tomoe Gozen",
	  bio: "Serving under Minamoto Yoshinaka, Tomoe was one of his finest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
	  image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg",
	  lifespan: {
	    birth: 1747,
	    death: 1797
	  }
	},
  {
	  title: "Samurai",
	  name: "Tomoe Gozen",
	  bio: "Serving under Minamoto Yoshinaka, Tomoe was one of his finest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
	  image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg",
	  lifespan: {
	    birth: 1747,
	    death: 1797
	  }
  },
  {
	  title: "Samurai",
	  name: "Tomoe Gozen",
	  bio: "Serving under Minamoto Yoshinaka, Tomoe was one of his finest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
	  image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg",
	  lifespan: {
	    birth: 1747,
	    death: 1797
	  }
  },
  {
	  title: "Samurai",
	  name: "Tomoe Gozen",
	  bio: "Serving under Minamoto Yoshinaka, Tomoe was one of his finest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
	  image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg",
	  lifespan: {
	    birth: 1747,
	    death: 1797
	  }
  },
  {
	  title: "Samurai",
	  name: "Tomoe Gozen",
	  bio: "Serving under Minamoto Yoshinaka, Tomoe was one of his finest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
	  image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg",
	  lifespan: {
	    birth: 1747,
	    death: 1797
	  }
  }
];



var outputEl = document.getElementById("outputEl");

var textInput = document.getElementById('userInput');
textInput.addEventListener('keypress', function (e) {
    var key = e.keyCode;
    if (key === 13) { // 13 is enter
    	finishTextChange();// code for enter
    }
});



function finishTextChange() {
	// body...
}


function changeText() {
	// 8. When you click on one of the person elements, a dotted border should appear around it.
	var selectedEl = event.target
	selectedEl.classList.toggle("selectedBorder");

// 9. When you click on one of the person elements, the text input should immediately gain focus so that you can start typing.
	textInput.focus();
// 10. When there is a highlighted person element, and you begin typing in the input box, the person's biography should be immediately bound to what you are typing, letter by letter.
	liveUpdate(selectedEl);
}


function liveUpdate(element) {
	textInput.addEventListener('keyup', function(){
			element.innerHTML = textInput.value;
	});

}

// create the person cards from array

for (i = 0; i < famousPeople.length; i++) {
	var newDiv = `
		<div id="personContainer-${i}" class="personContainer">
			<h1 id="personName-${i}" class="personName">${famousPeople[i].name}</h1>
			<h3 id="personTitle-${i}" class="personTitle">${famousPeople[i].title}</h3>


			<div id="photo-${i}"><img src="${famousPeople[i].image}" class="photo"></div>
			<p id="bio-${i}" class="bio">${famousPeople[i].bio}</p>

			<span class="notEditable">born:  </span><p id="yearBorn-${i}" class="year">${famousPeople[i].lifespan.birth}</p>
			<span class="notEditable">died:  </span><p id="yearBorn-${i}" class="year">${famousPeople[i].lifespan.death}</p>
			</div>`

	outputEl.innerHTML += newDiv;
};


// add event listeners to person containers (encompassing div)
for (i = 0; i < famousPeople.length; i++) {
	var cards = document.getElementsByClassName("personContainer");
	cards[i].addEventListener("click", changeText);
};













// 11. When you press the enter/return key when typing in the input field, then the content of the input field should immediately be blank.


























