const { template } = require('@babel/core')

function fillStartWord(startWord, word) {
  //code here
  let result
  if (word === null || word === undefined){  result = undefined}
    else if (startWord.length == word.length){
        if (startWord == word){

            return String(word) 
        }
    }

    else {
        let str = ""
       
        for (let index = 0; index < startWord.length; index++) {
            if (startWord[index] != word[index]){
            str += startWord[index]
            }
        }
        for (let index = 0; index < word.length; index++) {
            str += word[index]
        }    

        return String(str)  
    }
  return result

}

module.exports = fillStartWord
