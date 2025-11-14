// --------------------------
// Helper functions
// --------------------------

function findTopLeft(data) {
    let maxLat = -Infinity;
    let minLon = Infinity;
    let selected = null;

    data.forEach(p => {
        if (p.Lat > maxLat || (p.Lat === maxLat && p.Lon < minLon)) {
            maxLat = p.Lat;
            minLon = p.Lon;
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
        if (p.Lat > maxLat || (p.Lat === maxLat && p.Lon > maxLon)) {
            maxLat = p.Lat;
            maxLon = p.Lon;
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
        if (p.Lat < minLat || (p.Lat === minLat && p.Lon < minLon)) {
            minLat = p.Lat;
            minLon = p.Lon;
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
        if (p.Lat < minLat || (p.Lat === minLat && p.Lon > maxLon)) {
            minLat = p.Lat;
            maxLon = p.Lon;
            selected = p;
        }
    });

    return selected;
}


// --------------------------
// Main Run() function (Task 3–7)
// --------------------------

function Run() {
    console.clear();
    
    const email = "daspanda@tamu.edu";  //

    console.log("Bounding box computed for: " + email);

    // Pull the data array out of the JSON object (from data.js)
    let data = theJSON.data;

    // Task 5: Call the corner functions
    let topLeftPoint = findTopLeft(data);
    let topRightPoint = findTopRight(data);
    let bottomLeftPoint = findBottomLeft(data);
    let bottomRightPoint = findBottomRight(data);

    // Task 6: Build the final output object
    let boundingBox = {
        topLeft: topLeftPoint,
        topRight: topRightPoint,
        bottomLeft: bottomLeftPoint,
        bottomRight: bottomRightPoint
    };

    // Task 7: Print email + bounding box
    console.log(boundingBox);
}
