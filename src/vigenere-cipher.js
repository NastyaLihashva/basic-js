const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }
    const encryptedMessage = this.changeMessage(message, key, true);
    if (this.isDirect){
      return encryptedMessage.join('')
    } else{
      return encryptedMessage.reverse().join('');
    }
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) {
      throw new Error('Incorrect arguments!');
    }

    const decryptedMessage = this.changeMessage(encryptedMessage, key, false);
    if (this.isDirect) {
      return decryptedMessage.join('');
    } else {
      return decryptedMessage.reverse().join('');
    }
  }

  changeMessage(message, key, isEncrypt) {
    const res = [];
    let keyInd = 0;

    for (const char of message.toUpperCase()) {
      if (/^[A-Z]$/.test(char)) {
        const messageCharCode = char.charCodeAt(0) - 'A'.charCodeAt(0);
        const keyCharCode = key[keyInd % key.length].toUpperCase().charCodeAt(0) - 'A'.charCodeAt(0);
        const modifiedCharCode = isEncrypt ? (messageCharCode + keyCharCode) % 26 : (messageCharCode - keyCharCode + 26) % 26;
        const modifiedChar = String.fromCharCode(modifiedCharCode + 'A'.charCodeAt(0));
        res.push(modifiedChar);
        keyInd++;
      } else {
        res.push(char);
      }
    }

    return res;
  }
}

module.exports = {
  VigenereCipheringMachine
};
