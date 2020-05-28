//fixme something is wrong with the returns, its returning undefined, but the console.logs have the correct result...
/**
 * Gets lat and long of current user through Geolocation API.
 * If user does not give location access, uses IP instead.
 * base of this fcn was coped from https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON
 * @return Array of lat/long.
 */
function geoFindMe() {

    function success(position) {
        const latitude  = position.coords.latitude;
        const longitude = position.coords.longitude;
        const coords = [latitude,longitude];
        console.log("Coords (Geo API): " + coords);
        return coords; //coords found using Geo API //todo
    }

    function error() {
        console.log("Unable to retrieve your location, resorting to IP API");
        getCoordsIPAPI(); //todo do i need to return the result of the fcn in JS?
    }

    if(!navigator.geolocation) {
        console.log("Geolocation is not supported by your browser, resorting to IP API");
        getCoordsIPAPI(); //todo same as above
    } else {
        navigator.geolocation.getCurrentPosition(success, error);
    }

}

function getCoordsIPAPI() {
    let requestURL = 'http://ip-api.com/json/?fields=lat,lon'; //returns lat and long from current IP
    let request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();

    request.onload = function () {
        const forecast = request.response;
        const coords = [forecast['lat'],forecast['lon']];
        console.log("IP API result: " + coords);
        return coords;
    }
}

/**
 * Uses geoFindMe to get weather for current location
 * @return JSON with current location information.
 */
function foo() {
    //todo
}