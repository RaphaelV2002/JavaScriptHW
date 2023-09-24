function manyChecks() {
  let a = Math.floor(Math.random() * 20) + 1;
  console.log(`a = ${a}`);

  let result1 = (a > 10 ? 'a is bigger than 10 ' : 'a is less than or equal to 10 ' + (a === 5 ? 'an example of a special case' : '')) + (a === 15 ? 'but a is not 15' : '') + (a > 5 ? 'and a is greater than 5' : 'and a is less than or equal to 5 ') + (a % 2 ? ' and a is odd' : ' and a is even ')

  let result2
  if (a > 10) {
      result2 = 'a is bigger than 10 '
  } else {
      result2 = 'a is less than or equal to 10 '
  }

  if (a === 5) {
      result2 += 'an example of a special case'
  } else {
      result2 += ''
  }

  if (a === 15) {
      result2 += 'but a is not 15'
  } else {
      result2 += ''
  }

  if (a > 5) {
      result2 += 'and a is greater than 5'
  } else {
      result2 += 'and a is less than or equal to 5 '
  }

  if (a % 2) {
      result2 += ' and a is odd'
  } else {
      result2 += ' and a is even '
  }




  let result3
  switch (true) {
      case (a > 10):
          result3 = 'a is bigger than 10 '
          break
      default:
          result3 = 'a is less than or equal to 10 '
          break
  }

  switch (true) {
      case (a === 5):
          result3 += 'an example of a special case'
          break
      
      default:
          result3 += ''
          break
  }

  switch (true) {
      case (a === 15):
          result3 += 'but a is not 15'
          break
      default:
          result3 += ''
          break
  }

  switch (true) {
      case (a > 5):
          result3 += 'and a is greater than 5'
          break
      default:
          result3 += 'and a is less than or equal to 5 '
          break
  }

  switch (true) {
      case ((a % 2)!==0):
          result3 += ' and a is odd'
          break
      default:
          result3 += ' and a is even '
          break
  }

  return([result1,result2,result3])
}

result=manyChecks()


console.log(result[0]);
console.log(result[1]);
console.log(result[2]);
