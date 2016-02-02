$(document).ready(function() {
    $('#myModal .list-group-item').click(function () {
		$(this).toggleClass( "active" );
		// $(this).append("<i class='glyphicon glyphicon-ok'></i>");
	})

	$('#myModal').on('hidden.bs.modal', function () {
	  $( "#myModal .list-group-item").removeClass("active");
	})

	$('.remove-day').click(function	() {
		$(this).parents('.panel').remove()
	})

	// $( 'input' ).on('keyup',function( event ) {
	// 	if ( event.which == 13 ) {
	// 	    $(createDays);

	// 	}
	// });	
});


// function createDays(){
// 	var days = $('#days').val();
// 	for (var i = 1; i <= days; i++) {
// 		$('#calendar').append("<div class='panel panel-default'><div class='panel-heading'>Day <button type='button' class='remove-day btn btn-danger btn-md btn-circle pull-right'><i class='glyphicon glyphicon-fire'></i></button></div>
// 				  		<ul class='list-group'>
// 						  <li class='list-group-item'>Act 1</li>
// 						  <li class='list-group-item'>Act 2</li>
// 						  <li class='list-group-item'>Act 3</li>
// 						</ul>
// 					</div>");
// 	};

// }