// Daniel LaCoste
// ASSIGNMENT 2
// SENG 513 W2017
// Professor: P. Federl

function getStats(txt) {

  // parameters: text input
  // returns: 
  // • if there is no text, return emptyStats
  // • otherwise return false
  function txtEmpty(txt) {
    if (txt === "") {
      return emptyStats(txt);
    }
    else {
      return false;
    }
  }

  // parameters: (empty) text input
  // returns: 0 and empty arrays
  function emptyStats(txt) {
    return {
      nChars: 0,
      nWords: 0,
      nLines: 0,
      nNonEmptyLines: 0,
      averageWordLength: 0,
      maxLineLength: 0,
      palindromes: [],
      longestWords: [],
      mostFrequentWords: []
    };
  }

  // parameters: text input
  // returns: integer
  // • counts the number of characters, whitespace inclusive 
  function get_nChars(txt) {
    let nChars = txt.length;
    return nChars;
  }

  // parameters: text input
  // returns: integer
  // • counts the number of words (alphanumerics only)
  function get_nWords(txt) {
      var nWords = txt.replace(/[^A-Za-z0-9 ]/g,' ').trim().split(/\s+/).length;
      return nWords;
  }
 
  // parameters: text input
  // returns: integer
  // • counts the number of lines
  // • 0 if text is empty
  function get_nLines(txt) {
    let nLines = txt.split("\n").length;
    return nLines;
  }

  // parameters: text input
  // returns: integer
  // • counts the number of lines containing at least 1 non-whitespace character
  function get_nNonEmptyLines(txt) {
    var nLines = txt.split("\n");
    var nNonEmptyLines = 0;

    for (i = 0; i < nLines.length; i++) {
      let lineArray = nLines[i].replace(/\s+/, '');
      if (lineArray.length != 0) {
        nNonEmptyLines++;
      }
    }
    return nNonEmptyLines;
  }

  // parameters: text input
  // returns: integer
  // counts the length of the longest line in the text input
  function get_maxLineLength(txt) {
    var lineArray = txt.split("\n");
    var maxLineLength = lineArray[0].length;
    
    for (i = 0; i < lineArray.length; i++) {
      if (lineArray[i].length > maxLineLength) {
        maxLineLength = lineArray[i].length;
      }
    }
    return maxLineLength;
  }

  // parameters: text input
  // returns: float 
  // calculates the average word length (alphanumeric only)
  function get_averageWordLength(txt) {
    var wordArray = txt.replace(/[^A-Za-z0-9 ]/g,' ').trim().split(/\s+/);
    let arrayLength = wordArray.length;
    var averageWordLength = 0;

    for (i = 0; i < wordArray.length; i++) {
      averageWordLength += wordArray[i].length;
    }
    averageWordLength /= arrayLength;
    return averageWordLength;
  }

  // parameters: text input
  // returns: array of strings
  // • finds all palindromes within the text input
  // • palindromes are of length > 2
  function get_palindromes(txt) {
    var palindromes= [];
    var revWordArray = [];
    var wordArray = txt.replace(/[^A-Za-z0-9 ]/g,' ').trim().split(/\s+/);
    
    for (i = 0; i < wordArray.length; i++) {
      wordArray[i] = wordArray[i].toLowerCase();
      // create reversed, lowercase array
      revWordArray[i] = wordArray[i].split("").reverse().join("");
      // compare array word with reversed word
      if ((wordArray[i] === revWordArray[i]) && wordArray[i].length > 2) {
        palindromes.push(wordArray[i]);
      }
    }
    return palindromes;
  }

  // parameters: text input
  // returns: an array of strings
  // • finds the 10 longest words, and sorts in descending order
  // • note that words of equal length are sorted alphabetically
  function get_longestWords(txt) {
    var uniqueWordArray = [];
    var wordArray = txt.replace(/[^A-Za-z0-9 ]/g,' ').trim().split(/\s+/);

    for (i = 0; i < wordArray.length; i++) {
      wordArray[i] = wordArray[i].toLowerCase();
      // if uniqueWordArray does not have the wordArray[i] element, push onto unique array 
      if (uniqueWordArray.indexOf(wordArray[i]) === -1) {
        uniqueWordArray.push(wordArray[i]);
      }
    }

    // tip: see javascript sort/compare methods documentation
    uniqueWordArray.sort(function(x, y) {
      // alphabetize words of equal length
      if (y.length == x.length) {
        return x.localeCompare(y);
      }
      // otherwise, sort accordingly based on length (DESC)
      else {
        return y.length - x.length;
      }
    }); 
    return uniqueWordArray.slice(0,10);
  }

  // parameters: text input
  // returns: a multidimensional array
  // • finds the top 10 most frequently used words
  // • sorted lexicographically 
  function get_mostFrequentWords(txt) {
    var count = {}; 
    var wordArray = txt.replace(/[^A-Za-z0-9 ]/g,' ').trim().split(/\s+/);
    var mostFrequentWordsArray= [];

    // convert the elements of the array to lowercase
    for (i = 0; i < wordArray.length; i++) {
      wordArray[i] = wordArray[i].toLowerCase();
    }

    // increment a value for each key
    // store key/values in the 'count' Object
    // the value is incremented if the key already exists in the Object
    wordArray.forEach(function(key) { 
      count[key] = (count[key] || 0) + 1;
    });

    // convert the 'count' Object into an array for future sorting
    for (let word in count) {
      mostFrequentWordsArray.push([word, count[word]]);
    }

    // alphabetically sort the most frequent words
    mostFrequentWordsArray.sort(function(x, y) {
      // if the values are equivalent, sort them lexicographically
      if (x[1] == y[1]) {
        return x.toString().localeCompare(y);
      }
      // sort keys by DESC values
      else {
        return y[1] - x[1];
      }
    });

    mostFrequentWordsArray = mostFrequentWordsArray.map(function(val) {
      return val[0] + '(' + val[1] + ')';
    });

    return mostFrequentWordsArray.slice(0,10);
  }

  // "main" javascript begins here
  // check if text field is completely empty 
  if (txtEmpty(txt)) {
    return emptyStats(txt);
  }

  // if non-empty text field, get & return statistics
  else {
    return {
      nChars: get_nChars(txt),
      nWords: get_nWords(txt),
      nLines: get_nLines(txt),
      nNonEmptyLines: get_nNonEmptyLines(txt),
      maxLineLength: get_maxLineLength(txt),
      averageWordLength: get_averageWordLength(txt),
      palindromes: get_palindromes(txt),
      longestWords: get_longestWords(txt),
      mostFrequentWords: get_mostFrequentWords(txt)
    };
  }
}

