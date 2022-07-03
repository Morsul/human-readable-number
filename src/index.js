module.exports = function toReadable (number) {
  var wordrarray = [['','one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'],
  ['','','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'],
  ['hundred','thousand','million','billion']];
  let temp = number.toString().split('').reverse().join('').match(/.{1,3}/g)
  let NumberInWords = '';

  for (let i = 0; i < temp.length; i++){
    NumberInWords = toLetter(i, temp[i]) +''+ NumberInWords;
  }

  function toLetter(pos, str){
    let NumberAsStr = str.split('');
    let Words = '';
    for (let i=0 ; i < NumberAsStr.length; i++){
      if (NumberAsStr.length==1 && pos == 0 && NumberAsStr[i]=='0'){
        Words = 'zero';
      }
      if ((i==2 && NumberAsStr[i] != '0' ) ){ //get hundred
        Words = wordrarray[2][0]+ (Words == ''? '':' ' + Words)
      }
      if (pos>0 && NumberAsStr.join('') != '000' && i==0){ //get above hundred
        Words = wordrarray[2][pos]+ (Words == ''? '':' ' + Words)
      }
      if (NumberAsStr[1]=="1" && i !=2){ //get decimal
        Words = wordrarray[i][parseInt(NumberAsStr[1]+NumberAsStr[0])]+ (Words == ''? '':' ' + Words)
        i++;
        continue; //breake because we have 2 numbers here
      }
      if (NumberAsStr[i] !="0"){// get regular number
        Words = wordrarray[i!=2?i:0][parseInt(NumberAsStr[i])]+ (Words == ''? '':' ' + Words)
      }
    }
    return Words
  }
  return NumberInWords;
}