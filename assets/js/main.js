//main.js v.0.0.3 for KB staging (20.07.18)
$( document ).ready(function() {
//Toggling Sections
	$('.card-header').hover(function(){
		$(this).next('.collapse').collapse('show');
	},function(){
		$(this).next('.collapse').addClass('collapseTriggered');
		$('.collapseTriggered').mouseleave(function(){
			$(this).collapse('hide');
			$(this).removeClass('collapseTriggered');
		})
	});

//Edititng sections
	$('.section-edit-button').click(function(){
		var button = $(this);
		var cardBody = $(this).next();
		$(this).css('display', 'none');
		var text = $(this).next().text();
		var newText;
		$(this).next().html(`<textarea class="input-card-body">${text}</textarea>
		<button class='section-save-button btn btn-success'>Save</button>`);
		//this is just a simple JS function, you shouldnt mind this "this" below
		$('.input-card-body').bind('input propertychange', function() {
			newText = this.value;
		  });
		$('.section-save-button').click(function(){
			cardBody.html(newText || text)
			$(this).css('display', 'none');
			button.css('display', 'block');

		});
	});

//Background trigger
	$('.background-trigger').click(function(){
		if (!timer) {
			$(this).text('X');
			timer = setInterval(changeBackground, 2000, imgsArr, $('.background-holder'));
		} else {
			$(this).text('O');
			clearInterval(timer);
			timer = false;
		}
	})

//Background carousel
var imgsString = $('.background-holder').attr('imgs');
var imgsArr = imgsString.split(',').map(function(img) {
	return `url("${img}")`;
  });
console.log(imgsArr)
$('.background-holder').css('background', imgsArr[0]);
function changeBackground(arr, element){
	var currBg = $(element).css('background-image');
	var currIndex = arr.indexOf(currBg);
	if (currIndex>-1) {
		if (currIndex == arr.length-1) {currIndex = -1;}
		$(element).css('background', imgsArr[currIndex+1])
	}
}
var timer = setInterval(changeBackground, 2000, imgsArr, $('.background-holder'));
console.log

});
