const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let string='';
    for (let i=0; i<expr.length/10; i++) {
      let stringTenSymbol = expr.substr(i*10, 10);
      if (stringTenSymbol === '**********') {
        string += ' ';
        continue;
      }
      
      let stringMorse = '';
  
      for (let j=0; j<stringTenSymbol.length/2; j++) {
        let stringTwoSymbol = stringTenSymbol.substr(j*2, 2);
        const VALUES = {'00':'', '10':'.', '11':'-'};
        stringMorse += VALUES[stringTwoSymbol];       
      }
      
      string += MORSE_TABLE[stringMorse];
    }
  
    return string;
  }

module.exports = {
    decode
}