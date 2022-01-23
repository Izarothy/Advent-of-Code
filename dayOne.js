const fs = require('fs');
let depthMeasurements = [];
let allFileContents = fs.readFileSync('Files/dayOneInput.txt', 'utf-8');
allFileContents.split(/\r?\n/).forEach((line) => {
  depthMeasurements.push(parseInt(line));
});

function countDepthIncreases(depthMeasurements) {
  let numberOfDepthIncreases = 0;

  for (let i = 1; i < depthMeasurements.length; i++) {
    let previousDepthMeasurement = depthMeasurements[i - 1];
    let currentDepthMeasurement = depthMeasurements[i];

    if (currentDepthMeasurement > previousDepthMeasurement) {
      numberOfDepthIncreases += 1;
    }
  }
  return numberOfDepthIncreases;
}

// console.log(countDepthIncreases(depthMeasurements));

// part 2

function threeSegmentIncreases(depthMeasurements) {
  let incOfThree = 0;
  let prev = 0;
  for (let i = 0; i < depthMeasurements.length - 3; i++) {
    let curr = depthMeasurements.slice(i, i + 3).reduce((a, b) => a + b);
    if (curr > prev) {
      incOfThree += 1;
    }
    prev = curr;
  }
  return incOfThree;
}

console.log(threeSegmentIncreases(depthMeasurements));
