var sliderImages = document.querySelectorAll('.slide');
var arrowLeft = document.querySelector('#arrow-left');
var arrowRight = document.querySelector('#arrow-right');
current = 0 ;

// clear all images
function reset(){
    for(var i=0; i<sliderImages.length;i++){
         sliderImages[i].style.display= 'none';
    }
}

function startSlide() {
    reset();
    sliderImages[0].style.display='block';
}


// show prev
function slideLeft(){
    reset();
    sliderImages[current - 1].style.display = 'block';
    current--;
}

// show next
function slideRight(){
    reset();
    sliderImages[current + 1].style.display = 'block';
    current++;
}


arrowRight.addEventListener('click',function(){
    if(current == sliderImages.length - 1){
        current = -1
       }
       slideRight();
})

// left arrow click
arrowLeft.addEventListener('click',function(){
   if(current == 0){
    current = sliderImages.length;
   }
   slideLeft();
})
startSlide();

// form validation starts here
var emailField = document.querySelector("#email"),
  inputFields = document.querySelectorAll("input"),
  submitButton = document.querySelector(".submit"),
  emptyFieldMessage = document.querySelectorAll(".empty-error");

  // regex patterns
var patterns = {  email : /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ }

  inputFields.forEach(function(inputField) {
	inputField.addEventListener("keyup",function(e) {
		validate(e.target,patterns[e.target.attributes.name.value])
    validate_password();
	}); 
})

// emptyFieldMessage errors
function activeError(n) {
	for(var i=0; i<emptyFieldMessage.length; i++) {
		emptyFieldMessage[i].classList.remove("visible");
	}
	n.nextElementSibling.classList.add("visible");
}

// check if fields are empty or not
submitButton.addEventListener("click",checkEmptyFields);


function checkEmptyFields(e) {
	if(emailField.value === ""){
		activeError(emailField);
		e.preventDefault();
		return false;
	}
	return true;
}


function validate(field,regex) {
	if(regex.test(field.value)) {
		field.parentElement.classList.add("valid");
		field.parentElement.classList.remove("invalid");
	}
	else if(field.value.length === 0) {
		field.parentElement.classList.remove("invalid");
		field.parentElement.classList.remove("valid");
	}
	else {
		field.parentElement.classList.remove("valid");
		field.parentElement.classList.add("invalid");
	}
}



// Menu script
var menuBtn = document.querySelector('.hamburger');
var mobile_menu = document.querySelector('nav .list-one ');
menuBtn.addEventListener('click', function(){
menuBtn.classList.toggle('active')
mobile_menu.classList.toggle('isactive')
});