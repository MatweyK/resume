$(document).ready(function() {

	$("#form").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			alert("Thanks you for your message. I will contact you soon");
			$("#form").trigger("reset");
		});
		return false;
	});
	
});