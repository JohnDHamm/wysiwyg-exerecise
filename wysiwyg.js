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




function changeText() {
	// 8. When you click on one of the person elements, a dotted border should appear around it.
	var selectedElIdNum = event.target.id.split("-")[1];
	var selectedEl = document.getElementById(`personContainer-${selectedElIdNum}`);
	selectedEl.classList.toggle("selectedBorder");

// 9. When you click on one of the person elements, the text input should immediately gain focus so that you can start typing.
	textInput.focus();
	textInput.value = "";
// 10. When there is a highlighted person element, and you begin typing in the input box, the person's biography should be immediately bound to what you are typing, letter by letter.
	liveUpdate(selectedElIdNum, selectedEl);
}


function liveUpdate(selectedElIdNum, selectedEl) {
	var selectedBio = document.getElementById(`bio-${selectedElIdNum}`)
	textInput.addEventListener('keyup', function(){
			selectedBio.innerHTML = textInput.value;
	});
// 11. When you press the enter/return key when typing in the input field, then the content of the input field should immediately be blank.
	textInput.addEventListener('keypress', function (e) {
    var key = e.keyCode;
    if (key === 13) { // 13 is enter
    		selectedEl.classList.toggle("selectedBorder");
    		selectedBio = null;
    		textInput.value = "";
    };
	});
}




// create the person cards from array

for (i = 0; i < famousPeople.length; i++) {
	var newDiv = `
		<person id="personContainer-${i}" class="personContainer">
			<header id="personHeader-${i}">
				<h1 id="personName-${i}" class="personName">${famousPeople[i].name}</h1>
				<h3 id="personTitle-${i}" class="personTitle">${famousPeople[i].title}</h3>
			</header

			<section id="section-${i}">
				<div id="photo-${i}" class="photoEl"><img src="${famousPeople[i].image}" class="photo"></div>
				<p id="bio-${i}" class="bio">${famousPeople[i].bio}</p>
			</section>

			<footer id="footer-${i}">
				<span class="notEditable">born:  </span><p id="yearBorn-${i}" class="year">${famousPeople[i].lifespan.birth}</p>
				<span class="notEditable">died:  </span><p id="yearBorn-${i}" class="year">${famousPeople[i].lifespan.death}</p>
			</footer>
		</person>`

	outputEl.innerHTML += newDiv;
};

// add event listeners to person containers (encompassing div)
for (i = 0; i < famousPeople.length; i++) {
	var cards = document.getElementsByClassName("personContainer");
	cards[i].addEventListener("click", changeText);
};







































