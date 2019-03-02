var chocolateBars = ["snickers", "hundred grand", "kitkate", "skittles"]

function addElementToBeginningOfArray (array, element) {
return [element, ...array]
 
}

 function destructivelyAddElementToBeginningOfArray (array, element) {
  array.unshift(element)
  return array 
 }

 function addElementToEndOfArray (array, element) {
 return  [...array, element]
 }

// function destructivelyAddElementToBeginningOfArray () {
//   chocolateBars.push("handler")
// }

// function accessElementInArray () {
  
// }