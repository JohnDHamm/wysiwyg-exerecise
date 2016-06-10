// 1. Create an array of objects that represents famous people (see structure below).

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
    	replaceText();// code for enter
    }
});


function replaceText() {
	// body...
}





// loop through array
	// 1. create div
	// 	a. header - name div + title div
	// 	b. section - bio div

for (i = 0; i < famousPeople.length; i++) {
	var newDiv = `
		<div id="personContainer-${i}" class="personContainer">
			<header id="-${i}">
				<div id="personName-${i}" class="personName">${famousPeople[i].name}</div>
				<div id="personTitle-${i}" class="personTitle">${famousPeople[i].title}</div>
			</header>
			<section id="-${i}">
				<div id="photo-${i}"><img src="${famousPeople[i].image}" class="photo"></div>
				<div id="bio-${i}" class="bio">${famousPeople[i].bio}</div>
			</section>
			<footer id="lifespan-${i}" class="lifespan">born: ${famousPeople[i].lifespan.birth}   died: ${famousPeople[i].lifespan.death}</footer>`

	outputEl.innerHTML += newDiv;

};



// 4. Create a DOM element for each of the objects inside the container. Style your person elements however you like.

// 7. Each element's DOM structure should be as shown below.
// 	<person>
// 	  <header>Name and title go here</header>
// 	  <section>Bio and image go here</section>
// 	  <footer>Lifespan info goes here</footer>
// 	</person>

// 8. When you click on one of the person elements, a dotted border should appear around it.

// 9. When you click on one of the person elements, the text input should immediately gain focus so that you can start typing.

// 10. When there is a highlighted person element, and you begin typing in the input box, the person's biography should be immediately bound to what you are typing, letter by letter.

// 11. When you press the enter/return key when typing in the input field, then the content of the input field should immediately be blank.


























