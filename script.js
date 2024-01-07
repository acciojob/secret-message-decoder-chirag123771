//your JS code here. If required.
// Simulating encrypted message and other information stored in heap memory
const heapMemory = {};

// Encrypt the secret message
function encryptMessage(message) {
    // Simulating encryption logic (e.g., Caesar Cipher)
    const encryptedMessage = message.split('').map(char => String.fromCharCode(char.charCodeAt(0) + 1)).join('');
    return encryptedMessage;
}

// Store encrypted message and other information in heap memory
heapMemory.encryptedMessage = encryptMessage('Top Secret: The mission is a go!');
heapMemory.sender = 'Agent X';
heapMemory.dateSent = new Date().toLocaleString();

// Access heap memory to reveal the secret message
function revealSecretMessage() {
    // Decrypt the message
    const decryptedMessage = heapMemory.encryptedMessage.split('').map(char => String.fromCharCode(char.charCodeAt(0) - 1)).join('');

    // Display information
    console.log('Sender:', heapMemory.sender);
    console.log('Date Sent:', heapMemory.dateSent);
    console.log('Decrypted Message:', decryptedMessage);
}

// Reveal the secret message
revealSecretMessage();

