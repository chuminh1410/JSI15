let searchBtn = document.getElementById('button1').addEventListener('click', myFunction());

async function myFunction() {
    const searchText = document.getElementById('country').value;
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
    document.getElementById("country").value = "";
}

function displayCountry(data) {
    const comfirmed = data.confirmed;
    const deaths = data.deaths;
    const last_checked = data.lastChecked;
    const last_report = data.lastReported;
    const location = data.location;
    const recovered = data.recovered;
    const div1 = document.getElementById("return_1");

    const return_comfirmed = comfirmed.strconfirmed;
    const return_deaths = comfirmed.strdeaths;
    const return_lastchecked = comfirmed.strlast_checked;
    const return_lastreport = comfirmed.strlast_report;
    const return_location = comfirmed.strlocation;
    const return_recovered = comfirmed.strrecovered;

    const heading = document.createElement("h1");
    heading.innerHTML = information;
    div1.appendChild(heading);

}   
