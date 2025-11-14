function findTopLeft(data) {
    let maxLat = -Infinity;
    let minLon = Infinity;
    let selected = null;

    data.forEach(p => {
        const lat = p.lat;
        const lon = p.lon;

        if (lat > maxLat || (lat === maxLat && lon < minLon)) {
            maxLat = lat;
            minLon = lon;
            selected = p;
        }
    });

    return selected;
}

function findTopRight(data) {
    let maxLat = -Infinity;
    let maxLon = -Infinity;
    let selected = null;

    data.forEach(p => {
        const lat = p.lat;
        const lon = p.lon;

        if (lat > maxLat || (lat === maxLat && lon > maxLon)) {
            maxLat = lat;
            maxLon = lon;
            selected = p;
        }
    });

    return selected;
}

function findBottomLeft(data) {
    let minLat = Infinity;
    let minLon = Infinity;
    let selected = null;

    data.forEach(p => {
        const lat = p.lat;
        const lon = p.lon;

        if (lat < minLat || (lat === minLat && lon < minLon)) {
            minLat = lat;
            minLon = lon;
            selected = p;
        }
    });

    return selected;
}

function findBottomRight(data) {
    let minLat = Infinity;
    let maxLon = -Infinity;
    let selected = null;

    data.forEach(p => {
        const lat = p.lat;
        const lon = p.lon;

        if (lat < minLat || (lat === minLat && lon > maxLon)) {
            minLat = lat;
            maxLon = lon;
            selected = p;
        }
    });

    return selected;
}

// --------------------------
// Main Run() function
// --------------------------
function Run() {
    console.clear();

    const email = "daspanda@tamu.edu";

    console.log("Bounding box computed for: " + email);

    // use the data array from data.js
    const data = theJSON.data;

    const topLeftPoint = findTopLeft(data);
    const topRightPoint = findTopRight(data);
    const bottomLeftPoint = findBottomLeft(data);
    const bottomRightPoint = findBottomRight(data);

    const boundingBox = {
        topLeft: topLeftPoint,
        topRight: topRightPoint,
        bottomLeft: bottomLeftPoint,
        bottomRight: bottomRightPoint
    };

    console.log(boundingBox);
}
