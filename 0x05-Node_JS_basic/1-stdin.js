const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
console.log('Welcome to Holberton School, what is your name?');
readline.question('Your name is: ', name => {
  console.log('This important software is now closing');
  readline.close();
});
