const caesarCipher = (text, shift = 1) => {
  const textArray = text.split("");
  const charcodes = textArray.map((item) =>
    item !== " " ? item.charCodeAt(0) + shift : item.charCodeAt(0)
  );
  const codesToString = charcodes.map((item) => String.fromCharCode(item));

  return codesToString.join("");
};

export default caesarCipher;
