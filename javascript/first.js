	//Use YOUR Firebase URL (not the one below)
	var ref = new Firebase("https://torid-fire-430.firebaseio.com/");

	/* Remember to include firebase JS Library
	<script src="https://cdn.firebase.com/js/client/1.1.2/firebase.js"></script>
	*/

	ref.set({ name: "Alex Wolfe" });

	fb.on("value", function(data) {
		var name = data.val() ? data.val().name : "";
		alert("My name is " + name);
	});

