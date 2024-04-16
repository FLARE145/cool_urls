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
	tagline();
	summonUrlList('tools');
	summonUrlList('games');
	summonUrlList('toybox');
	summonUrlList('awesome');
	summonUrlList('miscellaneous');
	urlCount();
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

//shows total URL count
function urlCount(){
	let p = document.getElementById('urlCount');
	p.innerHTML = 'Current URL Count: ' + uncategorizedList.length;
};

//does the random button at the bottom
function randomLink(){
	window.open(uncategorizedList[Math.floor(Math.random() * uncategorizedList.length)], '_blank');
};

//places a random tagline at the top
function tagline(){
	let taglines = [
		"A website where you can find links to cool stuff online",
		"Links to websites that are helpful, fun, or otherwise cool.",
		"Dedicated to collecting useful or interesting websites into one place.",
		"Do you remember when the internet was cool? Me neither",
		"Surf the web",
		"URL stands for Uniform Resource Locater",
		"Explore the Internet!",
		"Welcome to the collection",
		"A shelter from google search",
		"ctrl+f for quicker navigation",
		"Return to cool",
		"For cool people",
		"Shhhhhh...",
		"Productivity is the enemy of cool",
		"I'm making a list and I'm checking it twice",
		"Apathy's a tradgedy and boredom is a crime",
		"Lose track of time",
		"Here to kill time?",
		"by FLARE145",
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
		"Otherwise known as cool links",
		"Sharing is caring",
		"U R reaL",
		"For when you're feeling real clicky",
		"The internet's stinky living room",
		"Malware's strongest soldier",
		"Like a worse spreadsheet",
		"How you like the selection?",
		"Fighting the dead internet",
		"Cyberspace set free",
		"Feel free to bookmark",
		"Search engines are for losers",
		"Being here since 2023",
		"Launched on 11/9/23 or 9/11/23 we aren't sure",
		"Thanks for visiting",
		"The world wide doorstep",
		"Maintained by a human",
		"and in no particular order",
		"and where to find them",
		"What is this? Some kind of Link to the Past?",
		"real ones remember the underscore",
		"I just got tired of the bookmarks bar okay?",
		"The internet never sleeps",
		"For when you just don't know what to do",
		"The web if it was good",
		"Like a map of the web if maps sucked",
		"Now with more taglines than urls!",
		"Everyone's favorite worst idea",
		"What? I like lists",
		"Ahead of it's time? Too late for it's time?",
		"Send to your friends but only cool people allowed",
		"Includes a toybox of toyboxes",
		"From the creator who watched Shrek",
		"A small url shopping center but everything is free",
		"The (not) hidden wiki",
		"Not quite off the grid but like, not quite on it",
		"You can write them down for a hard copy!",
		"I just kept forgetting them you know?",
		"The place to be if you want to be elsewhere",
		"Has anyone seen my day? I think I lost it around here",
		"No, the taglines are not cringe. You are just lame",
		"Also try Minecraft!",
		"Also try Terraria!",
		"Because I kept forgetting them",
		"Get them while they're hot... I mean cool"
	];
	document.getElementById("tagline").innerHTML = taglines[Math.floor(Math.random() * taglines.length)];
};