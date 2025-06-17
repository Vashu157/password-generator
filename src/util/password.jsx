export function generatePassword(selected, length) {
  let charSet = "";

  if (selected.alphabet === 1) {
    charSet += "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (selected.numeric === 1) {
    charSet += "0123456789";
  }
  if (selected.chars === 1) {
    charSet += "!@#$%";
  }

  if (charSet === ""){
    alert("first gotta select some options kid!");
    return "";} // nothing selected

  let generated = "";
  for (let i = 0; i < length; i++) {
    const randIndex = Math.floor(Math.random() * charSet.length);
    generated += charSet[randIndex];
  }

  return generated;
}
