$(document).ready(function () {

	var clientsList = [
	"accenture.8dc20d.svg",
	"audi.777305.png",
	"catchafire.949e5b.png",
	"ge.56b983.png",
	"hbo.3457d6.svg",
	"heineken.7269fa.png",
	"hootsuite.674c6e.png",
	"hubspot.3bbab4.png",
	"ibm.95c7e3.png",
	"microsoft.355b87.png",
	"starbucks.17cf3c.png",
	"symantec.7e4d81.png",
	"techstars.65b766.png",
	"telefonica.8ce3e1.png",
	"tnw.ecc6cf.png",
	"vodafone.6ecbb7.png",
	"volkswage.0f3dea.png",
	"walmart.cd2afc.png",
	"wayra.26a0a8.png"
	];

	// function to shuffle elements in any array

	function shuffle(array) {
	  var currentIndex = array.length, temporaryValue, randomIndex;

	  // While there remain elements to shuffle...
	  while (0 !== currentIndex) {

	    // Pick a remaining element...
	    randomIndex = Math.floor(Math.random() * currentIndex);
	    currentIndex -= 1;

	    // And swap it with the current element.
	    temporaryValue = array[currentIndex];
	    array[currentIndex] = array[randomIndex];
	    array[randomIndex] = temporaryValue;
	  }

	  return array;
	}

	// Use shuffle function on array of clients
	var randomClientsList = shuffle(clientsList);

	function addClientsToSlider(arr){
		for (var i = 0; i < arr.length; i++){
			var newImage = $("<img class='client-img'>");
			newImage.attr("src", "img/clients/" + arr[i]);
			newImage.appendTo(".images");
		}
	}

	

  $(".navbar-toggle").click(function () {
    $(".navigation-container").toggleClass("flex-visible");
  });

  

  addClientsToSlider(randomClientsList);
  $('.images').addClass("owl-carousel");

  $(".owl-carousel").owlCarousel({
  	items: 5,
  	loop:true,
    margin: 0,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:false
  });

});
