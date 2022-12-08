const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '6d0a49ad1amsha8da871af40ca9fp1e3017jsn1f71a1fca7a4',
		'X-RapidAPI-Host': 'youtube-music1.p.rapidapi.com'
	}
};

fetch('https://youtube-music1.p.rapidapi.com/v2/search?query=eminem', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));