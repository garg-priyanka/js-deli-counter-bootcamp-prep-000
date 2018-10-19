var totCust = 0;

function takeANumber(line) {
  totCust++;
  //var index = line.length -1;
  line.push((totCust));
  return `Welcome. You are number ${line.length} in line.`
};

katzDeliLine = []

takeANumber(katzDeliLine)  // [1]
takeANumber(katzDeliLine) // [1,2]

nowServing(katzDeliLine) // [2]

takeANumber(katzDeliLine)// [2,3]
nowServing(katzDeliLine) // [3]
nowServing(katzDeliLine) // []
takeANumber(katzDeliLine) // [4]


function nowServing(line) {
  if (!line.length) {
    return "There is nobody waiting to be served!"
  }

  return `Currently serving ${line.shift()}.`
};



function currentLine(line) {
  if (!line.length) {
    return "The line is currently empty."
  }

  const numbersAndNames = []

  for (let i = 0, l = line.length; i < l; i++) {
    numbersAndNames.push(`${i + 1}. ${line[i]}`)
  }

  return `The line is currently: ${numbersAndNames.join(', ')}`
};




var katzDeli = ["jack","mimi"];
console.log(currentLine(katzDeli));
console.log(nowServing(katzDeli));