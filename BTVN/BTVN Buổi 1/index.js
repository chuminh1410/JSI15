let searchText = document.getElementById('fcountry').value;
let searchBtn = document.getElementById('button1').addEventListener('click', myFunction());

async function myFunction() {
    const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '6d0a49ad1amsha8da871af40ca9fp1e3017jsn1f71a1fca7a4',
		'X-RapidAPI-Host': 'covid-19-coronavirus-statistics.p.rapidapi.com'
	}
};

await fetch(`https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/total?country=${searchText}`, options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
}
