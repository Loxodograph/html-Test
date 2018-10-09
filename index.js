const dodger = document.getElementById('dodger')
var start = false
function startFunction() {
	$("#startText").remove();
	start = true;
    ;
}

function positionToInteger(p) {
  return parseInt(p.split('px')[0]) || 0
}
function moveDodger(e){
	
		if(e.which === 37){
			e.preventDefault();
    	e.stopPropagation();
			moveDodgerLeft();
		}else if(e.which === 39){
			e.preventDefault();
    	e.stopPropagation();
			moveDodgerRight();
		
}
}
function moveDodgerLeft(){
	
	var tug = positionToInteger(dodger.style.left);
	function step(){
	dodger.style.left = `${tug + 4}px`;
}
if (tug> 0){
window.requestAnimationFrame(step)
}
}

function moveDodgerRight(){
	var bug = 0;
	var tug = positionToInteger(dodger.style.left);
	function step(){
	tug = `${bug + 4}px`;
}
window.requestAnimationFrame(step)
}

	$(document).ready(function(){

	document.getElementById("startText").addEventListener("click", startFunction);
	window.addEventListener("keydown", moveDodger)
		
		 
			
    
})


