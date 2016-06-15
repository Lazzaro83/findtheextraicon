debugger;
var theLeftSide = document.getElementById("leftSide");
	var numberOfFaces = 5;
		
	//a function to generate simling faces
	function generateFaces(){
		
		//generate the face
		for (var i = 0; i < numberOfFaces; i++){
			//create the imag object
			var imgFace = document.createElement("img");
			imgFace.src = "http://home.cse.ust.hk/~rossiter/mooc/matching_game/smile.png";
			//set the location of the image
			var imgXPosition = Math.floor(Math.random()* 400) + 1;
			var imgYPosition = Math.floor(Math.random()*400) + 1;
		
			imgFace.style.left = imgXPosition + "px";
			imgFace.style.top = imgYPosition + "px";
			//add the imag to div
			theLeftSide.appendChild(imgFace);
		}
			//clone the images and delete the last image
		var theRightSide = document.getElementById("rightSide");
		var leftSideImages = theLeftSide.cloneNode(true);
		var lastFace = leftSideImages.lastElementChild;
			leftSideImages.removeChild(lastFace);
		theRightSide.appendChild(leftSideImages);
		
		var theBody = document.getElementsByTagName("body")[0];
		
		theLeftSide.lastChild.onclick = 
			function nextLevel(event) {
				event.stopPropagation();
				
				while(theLeftSide.lastChild){
					theLeftSide.removeChild(theLeftSide.lastChild);
				}
				
				while(theRightSide.lastChild){
					theRightSide.removeChild(theRightSide.lastChild);
				}
				numberOfFaces += 5;
				generateFaces();
			}
		
		
		theBody.onclick = function gameOver(){
			alert("Game Over!");
			theBody.onclick = null;
			theLeftSide.lastChild.onclick = null;
		}
		
		}