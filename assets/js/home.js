async function getIP() {
    const request = await fetch("https://ipinfo.io/json?token=0282fbb2286a84")
    const json = await request.json()
    document.getElementById("ipv4").innerHTML = "IPv4: " + json.ip;
    document.getElementById("country").innerHTML = "Country: " + json.country;
    document.getElementById("region").innerHTML = "Region: " + json.region;
    document.getElementById("timezone").innerHTML = "Timezone: " + json.timezone;
    document.getElementById("location").innerHTML = "Coordinate: " + json.loc;
}
getIP();