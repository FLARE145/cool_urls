//runs on page load
window.onload = function(){
  theFirstDay();
};

let mainList = {}; //this object shall contain the list of all urls
let uncategorizedList = []; //shall become a list of urls uncategorized
function theFirstDay(){
	//fetching urls.json for url info
	fetch("./urls.json")
		.then(response => response.json())
		.then(json => mainList = json)
		.then(bruh => {theSecondDay()});
};

function theSecondDay(){
	//categorys maybe shouldnt be hardcoded but here we are
	summonUrlList('tools');
	summonUrlList('games');
	summonUrlList('awesome');
	tagline();
};

//poplates a list with the stuffs
function summonUrlList(category){
	let list = mainList[category];
	let count = list.length;
	let categoryTupper = document.getElementById(category);
	for (let i = 0; i <= count -1; i++){
		//quickly adding this to uncategorizedList
		uncategorizedList.push(mainList[category][i].url)
		let entryTupper = document.createElement("div");
		entryTupper.classList.add("entryTupper");
		//birthing elements
		let url = document.createElement("div");
		url.classList.add("urlTupper");
		let title = document.createElement("div");
		title.classList.add("titleTupper");
		let description = document.createElement("div");
		description.classList.add("descriptionTupper");
		//builds the smaller parts
		url.innerHTML = '<a href="' + list[i].url + '" rel="noopener" target="_blank">' + list[i].url + '</a>';
		title.innerHTML = '<p>' + list[i].title + '</p>';
		description.innerHTML = '<p>' + list[i].description + '</p>';
		//appendagery
		entryTupper.appendChild(url);
		entryTupper.appendChild(title);
		entryTupper.appendChild(description);
		categoryTupper.appendChild(entryTupper);
	};
};

//does the random button at the bottom
function randomLink(){
	window.open(uncategorizedList[Math.floor(Math.random() * uncategorizedList.length)], '_blank');
};

//places a random tagline at the top
function tagline(){
	let taglines = [
		"A website where you can find links to cool stuff online",
		"Do you remember when the internet was cool? Me neither",
		"Surf the web",
		"URL stands for Uniform Resource Locater",
		"Explore the Internet!",
		"Welcome to the collection",
		"A shelter from google search",
		"crtl+f for quicker navigation",
		"Return to cool",
		"For cool people",
		"Shhhhhh...",
		"Productivity is the enemy of cool",
		"I'm making a list and I'm checking it twice",
		"Apathy's a tradgedy and boredom is a crime",
		"Lose track of time",
		"Here to kill time?",
		"by FLARE145:",
		"Rediscover the web",
		"The coconut knows when to grow",
		"Knowledge is power",
		"You wouldn't download a car",
		"Click a link. Any link",
		"They keep making websites",
		"website site webpage page...",
		"Believe everything you read online!",
		"Certified cool",
		"Cool as a cucumber",
		"I wish that I could be like the cool kids",
		"Otherwise known as cool links"
	];
	document.getElementById("tagline").innerHTML = taglines[Math.floor(Math.random() * taglines.length)];
};