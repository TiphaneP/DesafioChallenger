const ALPHABET_LOWER_A = 97;
const ALPHABET_LOWER_Z = 122;
const ALPHABET_SIZE = 26;
const ROTATION_OFFSET = 13;

function checkFalsyValues(value) {
  return !value;
}

function criptografar() {
  let textToEncrypt = document.getElementById("input-text").value.toLowerCase();
  let encryptedText = "";

  if (checkFalsyValues(textToEncrypt)) {
    alert("Digite um texto válido para encriptar!");
    return;
  }

  for (let i = 0; i < textToEncrypt.length; i++) {
    let charCode = textToEncrypt.charCodeAt(i);
    if (charCode >= ALPHABET_LOWER_A && charCode <= ALPHABET_LOWER_Z) {
      charCode =
        ((charCode - ALPHABET_LOWER_A + ROTATION_OFFSET) % ALPHABET_SIZE) +
        ALPHABET_LOWER_A;
    }
    encryptedText += String.fromCharCode(charCode);
  }

  document.getElementById("output-text").textContent = encryptedText;
  document.getElementById("input-text").value = "";
}

function descriptografar() {
  let textToDecrypt = document.getElementById("input-text").value.toLowerCase();
  let decryptedText = "";

  if (checkFalsyValues(textToDecrypt)) {
    alert("Digite um texto válido para descriptografar!");
    return;
  }

  for (let i = 0; i < textToDecrypt.length; i++) {
    let charCode = textToDecrypt.charCodeAt(i);
    if (charCode >= ALPHABET_LOWER_A && charCode <= ALPHABET_LOWER_Z) {
      charCode =
        ((charCode - ALPHABET_LOWER_A - ROTATION_OFFSET + ALPHABET_SIZE) %
          ALPHABET_SIZE) +
        ALPHABET_LOWER_A;
    }
    decryptedText += String.fromCharCode(charCode);
  }

  document.getElementById("output-text").textContent = decryptedText;
  document.getElementById("input-text").value = "";
}

function copiarTexto() {
  let outputText = document.getElementById("output-text");
  let texto = outputText.textContent;

  navigator.clipboard
    .writeText(texto)
    .then(() => {
      alert("Texto copiado com sucesso!");
    })
    .catch((err) => {
      console.error("Erro ao copiar texto: ", err);
    });
}
