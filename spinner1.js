process.stdout.write('hello from spinner1.js... \rhey\n');

setTimeout(() => {
  process.stdout.write('\r|   ');
}, 500);

setTimeout(() => {
  process.stdout.write('\r/   ');
}, 800);

setTimeout(() => {
  process.stdout.write('\r-   ');
}, 1200);

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write('\r\\   '); 
}, 1600);

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write('\r|   '); 
}, 2000);

