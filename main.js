//main.js v.0.0.1 for KB staging (12.07.18)
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
	$('.background-trigger').hover(function() {
		$(this).css('background-color', '#1E90FF');
	},function() {
		$(this).css('background-color', 'white');
	});
	$('.background-trigger').click(function(){
		if ($(this).text() == 'O') {
			$(this).text('X');
			$('body').css('background-image', 'url(http://kb.vbrqx.com/dev/img/slideshow/light/01.jpg)');
		} else {
			$(this).text('O');
			$('body').css('background-image', '')
		}
	})
});
