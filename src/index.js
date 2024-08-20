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
        let message = '';
        
        for (let i = 0; i < expr.length; i += 6) {
            const binarySegment = expr.slice(i, i + 6);
            if (!binarySegment.includes('*')) {
                message += binaryToChar(binarySegment);
            }
        }
        
        return message;
    
}
const expr = "00101010100000000010001011101000101110100000111111**********00001011110000111111000010111000101110100000111010";
        

console.log(decode(expr))

module.exports = {
    decode
}