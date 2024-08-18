async function getIP() {
    const request = await fetch("https://ipinfo.io/json?token=0282fbb2286a84")
    const json = await request.json()
    document.getElementById("ipv4").innerHTML = "IPv4: " + json.ip;
    document.getElementById("country").innerHTML = "Country: " + json.country;
    document.getElementById("region").innerHTML = "Region: " + json.region;
    document.getElementById("city").innerHTML = "City: " + json.city;
    document.getElementById("postalCode").innerHTML = "Postal Code: " + json.postal;
    document.getElementById("isp").innerHTML = "ISP/ORG: " + json.org;
    document.getElementById("loc").innerHTML = "Coordinate: " + json.loc;
    document.getElementById("timezone").innerHTML = "Time Zone: " + json.timezone;
}
getIP();