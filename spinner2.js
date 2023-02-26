
process.stdout.write('hello from spinner1.js... \rhey\n');

function  spin(character, timetout)
{
  setTimeout(() => {
    process.stdout.write('\r'+ character+'   ');
  }, timetout);

}

spin('|',500)
spin('/',800)
spin('-',1200)
spin('\\',1600)
spin('|',2000)

