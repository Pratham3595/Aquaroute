const map = L.map('map').setView([20.593684, 78.96288], 5);
const tileurl='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const attribution= '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
const tiles= L.tileLayer(tileurl,{attribution});
 tiles.addTo(map);


 //user input
const from=document.getElementById("from");
const to=document.getElementById('to');

const form=document.querySelector('form');
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    console.log(from.value);
    console.log(to.value);
})


 //polyline...
 var route1=[
    [18.939255, 72.844581],
    [18.882276, 72.850817],
    [12.867593, 49.107595],
    [11.948895, 44.247407],
    [17.206874, 40.171121],
    [24.287386, 36.094835],
    [27.715476, 33.899911],
    [29.015530, 32.859326],
    [29.924176, 32.529737],
    [29.947910, 32.580149],
    [29.975369, 32.587021],
    [30.000634, 32.582813],
    [30.047381, 32.573978],
    [30.095077, 32.570332],
    [30.167852, 32.569070],
    [30.215490, 32.565283],
    [30.247478, 32.531205],
    [30.264073, 32.500072],
    [30.272673, 32.426726],
    [30.413085, 32.359221],
    [30.448470, 32.356862],
    [30.486874, 32.352105],
    [30.593622, 32.331232],
    [30.620316, 32.335831],
    [30.683519, 32.351515],
    [30.701874, 32.352576],
    [30.714954, 32.350100],
    [30.740905, 32.337010],
    [30.799471, 32.320382],
    [30.817703, 32.317670],
    [31.019311, 32.310849],
    [31.108900, 32.308054],
    [31.227114, 32.302117],
    [31.249739, 32.306972],
    [31.273396, 32.322752],
    [32.248713, 31.494271],
    [35.810328, 14.473622],
    [36.750739, 11.985576],
    [37.075982, 11.054539],
    [39.102210, 8.348238],
    [36.639541, -2.122627],
    [36.119261, -5.348573],
    [35.805204, -5.921351],
    [35.445399, -9.404057],
    [36.165905, -18.810870],
    [37.851967, -25.138244],
    [38.682884, -27.063421],
    [38.717617, -32.879290],
    [38.559850, -40.088637],
    [38.731503, -56.937065],
    [38.990473, -63.662595],
    [39.448533, -68.429590],
    [40.183954, -72.470624],
    [40.542331, -73.942589],
    [40.542331, -73.942589],
    [40.595387, -74.044036],
    [40.651152, -74.052962]
];
const polyline1=L.polyline(route1);
polyline1.addTo(map);

 const pacificocean=[
    [18.9430,72.8400],
[15.682893,71.811984],
[12.204634,70.592520],
[8.058594,68.633987],
[6.776073,67.155849],
[2.652190,67.229756],
[-2.371855,65.308176],
[-7.853886,63.275736],
[-13.012657,62.462760],
[-20.853398,57.843578],
[-23.709148,47.883279],
[-30.130142,38.259257],
[-34.183840,24.064921],
[-33.783008,13.957500],
[-26.521383,4.145298],
[-10.500425,-5.562124],
[2.629842,-20.139421],
[23.678306,-40.088948],
[30.585567,-58.298329],
[39.275460,-74.565581]
];
const pacificline=L.polyline(pacificocean,{color:"black",dashArray: '2,10'});//broken line and colour.
pacificline.addTo(map);
pacificline.bindTooltip("India to usa",{permanent: true, direction:'top'});

// //animation of moving line
 let dashOffset = 0;
 setInterval(() => {
     dashOffset = (dashOffset + 2) % 20;  // Moves the dashes along the line
     pacificline.setStyle({ dashOffset: dashOffset.toString() });
}, 100);  // Adjust speed by changing interval time


// // Pulsing animation
// let opacity = 1;
// let fadingOut = true;

// setInterval(() => {
//     if (fadingOut) {
//         opacity -= 0.1;
//         if (opacity <= 0.3) fadingOut = false;
//     } else {
//         opacity += 0.1;
//         if (opacity >= 1) fadingOut = true;
//     }
//     pacificline.setStyle({ opacity: opacity });
// }, 100);  // Adjust speed of pulsing


// Apply glow effect using CSS
L.DomUtil.addClass(pacificline._path, 'glowing-line');

// Add CSS styles
var style = document.createElement('style');
style.innerHTML = `
    .glowing-line {
        filter: drop-shadow(0px 0px 5px red) drop-shadow(0px 0px 10px red);
    }
`;
document.head.appendChild(style);



//changing marker icon
const icon=L.icon({
    iconUrl:"port-sign.png",
    iconSize: [50,30]
})

 // adding markers
 const marker=L.marker([9.102187, 111.727772],{icon});
 marker.bindPopup("can give normal text or any link or any html file");//popup on marker
 marker.addTo(map);

//Live location
navigator.geolocation.getCurrentPosition(succes,error);
let liveloc,loccircle;
function succes(pos){
    const lat=pos.coords.latitude;
    const lng=pos.coords.longitude;
    const accuracy=pos.coords.accuracy;

    if(liveloc){
        map.remove(liveloc);
        map.remove(loccircle);
    }

    liveloc=L.marker([lat,lng]).addTo(map);
    loccircle=L.circle([lat,lng],{radius: accuracy}).addTo(map);
    map.fitBounds(loccircle.getBounds());
}

function error(err){
    if(err.code===1){
        alert("Please allow geolocation access.");
    }
    else{
        alert("Cannot get current location.");
    }
}



