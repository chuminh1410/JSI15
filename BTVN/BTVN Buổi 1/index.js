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
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error("NETWORK RESPONSE ERROR");
            }
        })
        .then(data => {
            console.log(data);
            displayinformation(data.data)
        })
        .catch((error) => console.error("FETCH ERROR:", error));
    document.getElementById("country").value = "";

}


function displayinformation(data) {
    
    const comfirmed1 = data.confirmed;
    const deaths1 = data.deaths;
    const last_checked1 = data.lastChecked;
    const last_report1 = data.lastReported;
    const location1 = data.location;
    const recovered1 = data.recovered;
    

    const div0 = document.getElementById("return_0")
    const div1 = document.getElementById("return_1");
    const div2 = document.getElementById("return_2");
    const div3 = document.getElementById("return_3");
    const div4 = document.getElementById("return_4");
    const div5 = document.getElementById("return_5");
    const div6 = document.getElementById("return_6");

    const top = document.createElement("h1");
    top.innerHTML = "Information returned below: ";
    div0.appendChild(top);

    const heading = document.createElement("h1");
    const heading_1 = document.createElement("h1");
    heading.innerHTML = comfirmed1;
    heading_1.innerHTML = "Case comfirmed: ";
    div1.appendChild(heading_1);
    div1.appendChild(heading);

    const heading1 = document.createElement("h1");
    const heading_2 = document.createElement("h1");
    heading1.innerHTML = deaths1;
    heading_2.innerHTML = "Deaths comfirmed: ";
    div2.appendChild(heading_2);
    div2.appendChild(heading1);

    const heading2 = document.createElement("h1");
    const heading_3 = document.createElement("h1");
    heading2.innerHTML = last_checked1;
    heading_3.innerHTML = "Last checked: ";
    div3.appendChild(heading_3);
    div3.appendChild(heading2);

    const heading3 = document.createElement("h1");
    const heading_4 = document.createElement("h1");
    heading3.innerHTML = last_report1;
    heading_4.innerHTML = "Last reported: ";
    div4.appendChild(heading_4);
    div4.appendChild(heading3);

    const heading4 = document.createElement("h1");
    const heading_5 = document.createElement("h1");
    heading4.innerHTML = location1;
    heading_5.innerHTML = "Location: ";
    div5.appendChild(heading_5);
    div5.appendChild(heading4);

    const heading5 = document.createElement("h1");
    const heading_6 = document.createElement("h1");
    heading5.innerHTML = recovered1;
    heading_6.innerHTML = "Case recovered: (If leave blank then no returned information) ";
    div6.appendChild(heading_6);
    div6.appendChild(heading5);

}


