$( document ).ready(function() {
	$('.status').hover(function(){
		$(this).dropdown('toggle');
	}, function(){
		$(this).dropdown('toggle');
	});

	$('.trigger1').hover(function(){
		$('#collapseOne').collapse('toggle');
	},function(){
		$('#collapseOne').collapse('toggle');
	})
	$('.trigger2').hover(function(){
		$('#collapseTwo').collapse('toggle');
	},function(){
		$('#collapseTwo').collapse('toggle');
	})
	$('.trigger3').hover(function(){
		$('#collapseThree').collapse('toggle');
	},function(){
		$('#collapseThree').collapse('toggle');
	})
});
