let bolt = [2, 11, 3, 1, 0, 43, 22, 59, 64, 89];
for (i = 0; i < bolt.length; i++) {
  for (j = 0; j < bolt.length; j++) {
    if (bolt[i] < bolt[j]) {         // якщо знак " < " змінити на протилежний - то можна масив сортувати по спаданню значень
      let shal = bolt[i];
      bolt[i] = bolt[j];
      bolt[j] = shal;
    }
  }
}
document.write(bolt);