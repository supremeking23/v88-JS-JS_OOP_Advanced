function displayNameCountry(lists) {
	for (let i = 0; i < lists.length; i++) {
		console.log(`Name${lists[i].name},Country:${lists[i].country}`);
	}

	console.log(`<div class="preloader"><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>`);
}

let students = [
	{ name: "Remy", country: "Korea" },
	{ name: "Chuck", country: "China" },
	{ name: "Osmund", country: "U.S.A." },
	{ name: "Nicole", country: "South Africa" },
	{ name: "Boris", country: "France" },
	{ name: "John", country: "Philippines" },
	{ name: "Michael", country: "Ukraine" },
];

displayNameCountry(students);
