// Initialize the map
var map = L.map('map').setView([30.0, 32.0], 3);

// Add OpenStreetMap tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Define the circle
var circleCenter = L.latLng(10.293704, 89.280013); // Example center
var circleRadius = 500000; // 500 km
var circle = L.circle(circleCenter, { radius: circleRadius, color: 'red' }).addTo(map);

// Define the polyline
var polylineCoords = [
    [12.962135, 80.293197],
    [12.404789, 80.754623],
    [12.211581, 81.677474],
    [11.717190, 83.347396],
    [11.200359, 85.149154],
    [10.704195, 86.709212],
    [10.531423, 87.851790],
    [10.293704, 89.280013],
    [9.969254, 91.455306],
    [9.861032, 92.334212],
    [9.687803, 93.037337],
    [9.319395, 93.938216],
    [8.603153, 95.322493],
    [8.037879, 96.135481],
    [7.362873, 96.926497],
    [6.730483, 97.717512],
    [6.097268, 98.288801],
    [5.550789, 98.684309],
    [5.003803, 99.079817],
    [4.522075, 99.409407],
    [4.413837, 99.502392],
    [4.082544, 99.765388],
    [3.806362, 100.000700],
    [3.391925, 100.360590],
    [2.977310, 100.762005],
    [2.604022, 101.094211],
    [2.424251, 101.509468],
    [2.202961, 101.786306],
    [2.036972, 101.952409],
    [1.857131, 102.256931],
    [1.677272, 102.616820],
    [1.497396, 102.962868],
    [1.096085, 103.156655],
    [0.902327, 103.253548],
    [0.902327, 103.239706],
    [0.667037, 103.364284],
    [0.500943, 103.599596],
    [0.293319, 103.821067],
    [0.030325, 103.904118],
    [-0.288038, 103.931802],
    [-0.592551, 104.028695],
    [-1.076964, 104.457794],
    [-1.312226, 104.610055],
    [-1.630484, 104.790000],
    [-1.879521, 104.942261],
    [-2.114691, 105.108364],
    [-2.197683, 105.302150],
    [-2.225346, 105.537463],
    [-2.349824, 105.703566],
    [-2.501949, 105.814301],
    [-2.723189, 105.869668],
    [-3.083407, 106.119750],
    [-3.209559, 106.125243],
    [-3.346664, 106.064818],
    [-3.467300, 105.982421],
    [-3.615332, 105.921996],
    [-3.730451, 105.943969],
    [-3.851036, 105.993407],
    [-4.004484, 105.949462],
    [-4.212687, 105.905517],
    [-4.382497, 105.927489],
    [-4.530364, 105.965941],
    [-4.716523, 105.971435],
    [-5.061333, 105.949462],
    [-5.318453, 105.921996],
    [-5.477048, 105.916503],
    [-5.630135, 105.976928],
    [-5.755855, 106.125243],
    [-5.865153, 106.257079],
    [-5.808745, 106.411188],
    [-5.819675, 106.806696],
    [-5.830604, 107.059381],
    [-5.863392, 107.301081],
    [-6.038226, 107.619684],
    [-6.114698, 107.993219],
    [-6.158392, 108.256891],
    [-6.387723, 108.597467],
    [-6.627865, 108.938044],
    [-6.682426, 109.212702],
    [-6.693338, 109.575251],
    [-6.747892, 109.937799],
    [-6.758802, 110.289362],
    [-6.464144, 110.531061],
    [-6.322210, 110.816705],
    [-6.365886, 111.157282],
    [-6.475060, 111.453912],
    [-6.573297, 111.761530],
    [-6.671514, 112.069147],
    [-6.715160, 112.365778],
    [-6.758802, 112.662409],
    [-6.791531, 113.266657],
    [-6.780621, 113.695124],
    [-6.780621, 114.068659],
    [-6.911517, 114.354303],
    [-7.064183, 114.617975],
    [-7.293088, 115.002497],
    [-7.772313, 115.837457],
    [-8.011723, 116.254938],
    [-8.142251, 116.485651],
    [-8.229246, 116.892145],
    [-8.207499, 117.243707],
    [-8.076992, 117.518366],
    [-8.022602, 117.847955],
    [-8.022602, 118.188532],
    [-8.098746, 118.518121],
    [-8.115061, 118.847711],
    [-8.248274, 119.199274],
    [-8.443933, 119.320124],
    [-8.748094, 119.320124],
    [-8.986905, 119.561823],
    [-9.138793, 119.803522],
    [-9.301459, 120.100153],
    [-9.464049, 120.286920],
    [-9.583233, 120.539606],
    [-9.767344, 120.726373],
    [-10.005454, 120.913141],
    [-10.081179, 120.924128],
    [-10.394710, 120.979059],
    [-10.718720, 121.209772],
    [-11.010034, 121.978815],
    [-11.398003, 123.055475],
    [-11.699393, 124.582575],
    [-11.989707, 125.944879],
    [-12.226029, 127.526910],
    [-12.333379, 129.163873],
    [-12.279710, 129.987848],
    [-12.236766, 130.526178],
    [-12.344112, 130.723932],
    [-12.574375, 130.863609]
];

var polyline = L.polyline(polylineCoords, { color: 'blue' }).addTo(map);

// Function to check if a point is inside the circle
function isInsideCircle(point, circleCenter, radius) {
    return map.distance(point, circleCenter) < radius;
}

// Function to find the intersection point of a line segment and the circle
function findIntersection(p1, p2, circleCenter, radius) {
    let latlng1 = L.latLng(p1);
    let latlng2 = L.latLng(p2);
    let dist1 = map.distance(latlng1, circleCenter);
    let dist2 = map.distance(latlng2, circleCenter);

    let ratio = (radius - dist1) / (dist2 - dist1);
    let lat = latlng1.lat + ratio * (latlng2.lat - latlng1.lat);
    let lng = latlng1.lng + ratio * (latlng2.lng - latlng1.lng);

    return [lat, lng];
}

// Function to split the polyline at the circle boundary
function splitPolyline(circle, polylineCoords) {
    var outsideSegments = [];
    var currentSegment = [];
    var firstIntersection = null;
    var secondIntersection = null;

    for (var i = 0; i < polylineCoords.length - 1; i++) {
        let p1 = polylineCoords[i];
        let p2 = polylineCoords[i + 1];

        let inside1 = isInsideCircle(p1, circle.getLatLng(), circle.getRadius());
        let inside2 = isInsideCircle(p2, circle.getLatLng(), circle.getRadius());

        if (!inside1) {
            currentSegment.push(p1);
        }

        if (inside1 !== inside2) {
            let intersection = findIntersection(p1, p2, circle.getLatLng(), circle.getRadius());

            if (!firstIntersection) {
                firstIntersection = intersection;
                currentSegment.push(intersection);
                outsideSegments.push(currentSegment);
                currentSegment = [];
            } else {
                secondIntersection = intersection;
                currentSegment.push(intersection);
            }
        }
    }

    if (currentSegment.length > 0) {
        currentSegment.push(polylineCoords[polylineCoords.length - 1]);
        outsideSegments.push(currentSegment);
    }

    return outsideSegments;
}

// Perform the splitting
var newPolylineSegments = splitPolyline(circle, polylineCoords);

// Remove the original polyline
map.removeLayer(polyline);

// Add the new polylines
newPolylineSegments.forEach(segment => {
    L.polyline(segment, { color: 'blue' }).addTo(map);
});
