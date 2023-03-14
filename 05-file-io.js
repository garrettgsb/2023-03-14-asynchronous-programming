const fs = require('fs');

// fs.writeFile('some-file.txt', 'hello', (err, result) => {
//   console.log('d...done?', result);
// })

fs.readFile('./counter', { encoding: 'utf-8' }, (err, data) => {
  console.log('Read error', err);
  console.log('Old count', data);
  fs.writeFile('./counter', String(++data), (err) => {
    console.log('Write error:', err);
    fs.readFile('./counter', { encoding: 'utf-8' }, (err, data) => {
      console.log('New count', data);
    });
  });
});
