function countDepthIncreases (depthMeasurements) {
    // Vars
    let numberOfDepthIncreases = 0;
    let previousDepthMeasurement;

    for (let i = 0; i < depthMeasurements.length; i++) {
        if (i > 0) {
            previousDepthMeasurement = depthMeasurements[i - 1];
        }
        if (depthMeasurements[i] > previousDepthMeasurement) {
            numberOfDepthIncreases++;
        }
    }
    return numberOfDepthIncreases;
}

console.log(countDepthIncreases([199, 200, 208, 210, 200, 207, 240, 269, 260, 263]));