const fs = require('fs');

// Run this five times... Notice any difference?
fs.readFile('./female-first-names-en-dataset.json', { encoding: 'utf8' }, (err, data) => loadData('fNames', JSON.parse(data), main));
fs.readFile('./male-first-names-en-dataset.json', { encoding: 'utf8' }, (err, data) => loadData('mNames', JSON.parse(data), main));
fs.readFile('./1000-most-common-surnames.txt', { encoding: 'utf8' }, (err, data) => loadData('surnames', data.split(',\n'), main));

const datasets = {
  fNames: undefined,
  mNames: undefined,
  surnames: undefined,
};

function loadData(key, data, callback) {
  datasets[key] = data;
  if (Object.values(datasets).every(dataset => Array.isArray(dataset))) {
    callback();
  }
}

function main() {
  console.log(generateNames());
}

function generateNames() {
  return [generateName('f'), generateName('m')];
}

function generateName(gender) {
  const genderKey = gender === 'm' ? 'mNames' : 'fNames'; // This is a ternary expression
  return `${getRandomItem(datasets[genderKey])} ${getRandomItem(datasets.surnames)}`;
}

function getRandomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}


// This is how ternaries work
function emptySpotsMessage(spots) {
  return `There are ${spots === 0 ? 'no' : spots} ${spots === 1 ? 'spot' : 'spots'} remaining`;
}
