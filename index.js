var form = document.getElementById('btn');
var x = document.getElementById('title')
form.addEventListener('click', function(e) {
    var options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
    };
    
    function success(pos) {
        var crd = pos.coords;
    
        console.log('Your current position is:');
        console.log(`Latitude : ${crd.latitude}`);
        console.log(`Longitude: ${crd.longitude}`);
        console.log(`More or less ${crd.accuracy} meters.`);
        x.innerHTML = "Loading Game Please Wait...";
    }
    
    function error(err) {
        console.warn(`ERROR(${err.code}): ${err.message}`)
        x.innerHTML = "Failed Please Try Again";
    }
    
    navigator.geolocation.getCurrentPosition(success, error, options);
})