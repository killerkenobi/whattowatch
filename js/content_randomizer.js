function readLinesFromFile(fileUrl) {
    return fetch(fileUrl)
      .then(response => response.text())
      .then(text => text.split('\n'))
      .then(lines => lines.filter(line => line.trim() !== ''));
  }

  const fileUrl = 'https://cdn.statically.io/gh/killerkenobi/whattowatch/v1.1.2/content.txt';
  readLinesFromFile(fileUrl)
    .then(linesArray => {
      //uncomment to debug --> console.log(linesArray);
      document.getElementById("select").onclick = function() {
        document.getElementById("result").innerHTML = linesArray[Math.floor(Math.random() * linesArray.length)];
      }
  })
    .catch(error => {
      console.error('Error:', error);
});
