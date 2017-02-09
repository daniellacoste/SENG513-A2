
function getStats(txt) {

  function txtEmpty(txt) {
    if (txt == "") {
      return emptyStats(txt);
    }
    else {
      return false;
    }
  }

  function emptyStats(txt) {
    return {
      nChars: 0,
      nWords: 0,
      nLines: 0,
      nNonEmptyLines: 0,
      averageWordLength: 0,
      maxLineLength: 0,
      palindromes: ["none"],
      longestWords: ["none"],
      mostFrequentWords: ["none"]
    };
  }

  function get_nChars(txt) {
    let nChars = txt.length;
    return nChars;
  }

  function get_nWords(txt) {
    let nWords = txt.split(/\s+/);
    nWords = nWords.length;
    return nWords;
  }
  
  function get_nLines(txt) {
    let nLines = txt.split("\n");
    nLines = nLines.length;
    return nLines;
  }

  function get_nNonEmptyLines(txt) {
    let nLines = txt.split("\n");
    var nNonEmptyLines = 0;

    for (i = 0; i < nLines.length; i++) {
      let lineArray = nLines[i].replace(/\s+/,"");
      if (lineArray.length != 0) {
        nNonEmptyLines++;
      }
    }

    return nNonEmptyLines;
  }

  function get_averageWordLength(txt) {
    var wordArray = txt.replace(/[^A-Za-z0-9 ]/g, '');
    console.log(wordArray);
    wordArray = wordArray.split(/\s+/);
    console.log(wordArray);
    //wordArray = txt.replace(/^\W/, '');
    let arrayLength = wordArray.length;
    let wordLength = wordArray[0].length;
    let averageWordLength = 0;

    for (i = 0; i < wordArray.length; i++) {
      console.log(wordArray[i]);
      averageWordLength += wordArray[i].length;
    }
    averageWordLength /= arrayLength;
    return averageWordLength;
  }

  function get_maxLineLength(txt) {
    let lineArray = txt.split("\n");
    var maxLineLength = lineArray[0].length;
    
    for (i = 0; i < lineArray.length; i++) {
      if (lineArray[i].length > maxLineLength) {
        maxLineLength = lineArray[i].length;
      }
    }
    return maxLineLength;
  }

  if (txtEmpty(txt)) {
    console.log(txtEmpty(txt));
    console.log(emptyStats(txt));
    return emptyStats(txt);
  }

  else {
    return {
      nChars: get_nChars(txt),
      nWords: get_nWords(txt),
      nLines: get_nLines(txt),
      nNonEmptyLines: get_nNonEmptyLines(txt),
      averageWordLength: get_averageWordLength(txt),
      maxLineLength: get_maxLineLength(txt),
      palindromes: ["12321", "kayak", "mom"],
      longestWords: ["xxxxxxxxx", "123444444"],
      mostFrequentWords: [ "hello(7)", "world(1)" ]
    };
  }
}

