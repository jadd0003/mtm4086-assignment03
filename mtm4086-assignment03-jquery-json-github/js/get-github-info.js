$('#button').click(function () {
   		 // Connecting to github with ajax to retrieve information
		$.ajax({
			type: "GET",
			dataType: "json",
			url: "https://api.github.com/users/jadd0003",
			success: function (data) {
			console.log(data);
			setTimeout(function () {
					//Get the user profile information.... the avatar, the name, the link to the profile,
					// the number of public repositories and the date the account was created.
					$('#Avatar').html('<img src="' + data.avatar_url + '">');
					$('.myname').html(data.name);
					$('.profile').html(data.html_url);
					$('.repositories').html(data.public_repos);
					$('.date').html(data.created_at);
				}, 2000);
			}
    });
});
