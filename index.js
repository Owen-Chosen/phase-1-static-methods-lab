class Formatter {
  //add static methods here
  static capitalize (word) {
    const arr = word.split('')
    arr[0] = arr[0].toUpperCase();
    return arr.join('')
  }

  static sanitize (word) {
    return word.replace (/[^A-Za-z0-9-']+/g, '')
  }

  static titleize (sentence) {
    const arr = sentence.split (' ');
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] != 'a' && arr[i] != 'an' && arr[i] != 'but' && arr[i] != 'of' && arr[i] != 'and' && arr[i] != 'for' && arr[i] != 'at' && arr[i] != 'by' && arr[i] != 'from') {
        const nArr = arr[i].split('')
        nArr[0] = nArr[0].toUpperCase();
        arr[i] = nArr.join('')
      }
      else arr[i] = arr[i];
    }
    return arr.join (' ');
  }

}