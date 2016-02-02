$(document).ready(function() {
    $( ".list-group-item").click(function () {
		$(this).toggleClass( "active" );
		// $(this).append("<i class='glyphicon glyphicon-ok'></i>");
	})

	$('#myModal').on('hidden.bs.modal', function () {
	  $( ".list-group-item").removeClass("active");
	})
});