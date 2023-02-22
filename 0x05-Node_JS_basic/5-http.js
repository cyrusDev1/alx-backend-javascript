const http = require('http');
const hostname = 'localhost';
const port = 1245;
const countStudents = require('./3-read_file_async');

const app = http.createServer(async (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    let pre = 'This is the list of our students\n';
    await countStudents(process.argv[2]).then((msg) => {
      pre += msg;
      res.end(pre);
    });
  }
});

app.listen(port, hostname, () => {
  console.log('...');
});
