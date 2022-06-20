$(function () {
	$("#dropshipping-form").submit(function () {
		$.ajax({
			type: "POST",
			url: "mail_drop.php",
			data: $(this).serialize()
		}).done(function () {
			$(this)
				.find("input")
				.val("");
			alert("Дякуємо за заявку!");
			// window.location.replace("/thank-you-drop.html");
			$("#dropshipping-form").trigger("reset");
		});
		return false;
	});
	$("#opt-form").submit(function () {
		$.ajax({
			type: "POST",
			url: "mail_opt.php",
			data: $(this).serialize()
		}).done(function () {
			$(this)
				.find("input")
				.val("");
			alert("Дякуємо за заявку!");
			// window.location.replace("/thank-you-opt.html");
			$("#opt-form").trigger("reset");
		});
		return false;
	});
	$("#sewing-form").submit(function () {
		$.ajax({
			type: "POST",
			url: "mail_sewing.php",
			data: $(this).serialize()
		}).done(function () {
			$(this)
				.find("input")
				.val("");
			alert("Дякуємо за заявку!");
			// window.location.replace("/thank-you-sewing.html");
			$("#sewing-form").trigger("reset");
		});
		return false;
	});
	$("#contact-form").submit(function () {
		$.ajax({
			type: "POST",
			url: "mail_callback.php",
			data: $(this).serialize()
		}).done(function () {
			$(this)
				.find("input")
				.val("");
			alert("Дякуємо за заявку!");
			// window.location.replace("/thank-you-contact.html");
			$("#contact-form").trigger("reset");
		});
		return false;
	});
	$("#modal-form").submit(function () {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function () {
			$(this)
				.find("input")
				.val("");
			alert("Дякуємо за заявку!");
			// window.location.replace("/thank-you-contact.html");
			$("#modal-form").trigger("reset");
		});
		return false;
	});
});
