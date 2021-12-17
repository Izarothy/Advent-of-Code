const fs = require('fs');
let depthMeasurements = [];
const allFileContents = fs.readFileSync('Files/dayOneInput.txt', 'utf-8');
allFileContents.split(/\r?\n/).forEach(line =>  {
  depthMeasurements.push(line);
});

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

console.log(countDepthIncreases(depthMeasurements));