/**
 * Task:
 *  Write a program that solves the most suitable (with highest non-zero speed) network station for a device at a given point (x, y).
 */

// Points to tests
var points = [
    [0, 0],
    [100, 100],
    [15, 10],
    [18, 18],
    [13, 13],
    [25, 19],
];

//Find the best station (if any) for each point and printout the results
points.map(findBestStation).map(function (value) {
    if (!value.station) {
        console.log("Point [", value.point[0], ',', value.point[1], "]: No network station within reach")
    } else {
        console.log(
            "Point [", value.point[0], ',', value.point[1], "]: Best network station at [",
            value.station.coordinates[0], ',', value.station.coordinates[1], "] speed: ", value.station.speed.toFixed(2)
        );
    }
});

/**
 * Finds best link station for given coordinate point [x,y] from predefined stations
 * @param point
 */
function findBestStation(point) {
    var stations = [
        {coordinates: [0, 0], reach: 9, speed: 0},
        {coordinates: [20, 20], reach: 6, speed: 0},
        {coordinates: [10, 0], reach: 12, speed: 0},
        {coordinates: [5, 5], reach: 13, speed: 0},
        {coordinates: [99, 25], reach: 2, speed: 0},
    ];

    var bestStation = stations.map(function (station) {
        station.speed = getSpeed(
            getDistanceBetween(point, station.coordinates),
            station.reach
        );
        return station;
    }).filter(function (station) {
        return station.speed > 0;
    }).sort(function (stationA, stationB) {
        return stationA.speed > stationB.speed;
    }).pop();

    return {
        point: point,
        station: bestStation
    };
}

/**
 * Calculate the distance between two-dimensional coordinates
 * @param array coordinateA [x,y]
 * @param array coordinateB [x,y]
 * @returns {number}
 */
function getDistanceBetween(coordinateA, coordinateB) {
    return Math.sqrt(
        Math.pow(Math.abs(coordinateA[0] - coordinateB[0]), 2)
        + Math.pow(Math.abs(coordinateA[1] - coordinateB[1]), 2)
    );
}   

/**
 * Calculate the speed of link station to given distance
 * @param distance to the link tower
 * @param reach of the link tower
 * @returns {number}
 */
function getSpeed(distance, reach) {
    return (distance > reach)
        ? 0
        : Math.pow((reach - distance), 2);
}
