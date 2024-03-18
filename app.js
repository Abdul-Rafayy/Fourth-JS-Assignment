// Chapter 14 to 16
// Q 01
// var futureStudentsNames = [];

// Q 02
// var futureStudentsNames = new Array();

// Q 03
// var stringsArray = ["apple","banana","grapes","orange"]
// document.write(stringsArray)

// Q 04
// var numbersArray = [1,2,3,4,5]
// document.write(numbersArray)

// Q 05
// var booleanArray = [true,false]
// document.write(booleanArray)

// Q 06
// var mixedArray = [5,"apples",true,12,"bananas",false]
// document.write(mixedArray)

// Q 07
// var qualifications = [`1)SSC<br> 2)HSC<br> 3)BCS<br> 4)BS<br> 5)BCOM<br> 6)MS<br> 7)M. Phil.<br> 8)PhD`]
// document.write(`<h2>Qualification:</h2>${qualifications}`)

// Q 08
// var studentNames = ["Michael","John","Tony"]
// var studentScores = [320,230,480]
// var name1 = studentNames[0]
// var score1 = studentScores[0]
// var perc1 = studentScores[0]*100/500
// document.write(`Score of ${name1} is ${score1}.Percentage:${perc1}%<br>`)

// var name2 = studentNames[1]
// var score2 = studentScores[1]
// var perc2 = studentScores[1]*100/500
// document.write(`Score of ${name2} is ${score2}.Percentage:${perc2}%<br>`)

// var name3 = studentNames[2]
// var score3 = studentScores[2]
// var perc3 = studentScores[2]*100/500
// document.write(`Score of ${name3} is ${score3}.Percentage:${perc3}%`)

// Q 09
// var colors = ["red","green","blue"]
// document.write(`Initial array:${colors}<br>`)
// var colorToAddBeginning = prompt("Enter a color to add on the beginning")
// colors.unshift(colorToAddBeginning)
// document.write(`Array after adding color to the beginning:${colors}<br>`)
// var colorToAddEnd = prompt("Enter a color to add on the end")
// colors.push(colorToAddEnd)
// document.write(`Array after adding color to the end:${colors}<br>`)
// colors.unshift("purple","yellow")
// document.write(`Array after adding two color to the beginning:${colors}<br>`)
// colors.shift()
// document.write(`Array after deleting color from the beginning:${colors}<br>`)
// colors.pop()
// document.write(`Array after deleting color from the end:${colors}<br>`)
// var indexToAdd = prompt("Enter the index where you want to add a color")
// var colorToAdd = prompt("Enter a color name you want to add")
// colors.splice(indexToAdd, 0, colorToAdd)
// document.write(`Array after adding a color at index ${colorToAdd}${colors}<br>`)

// var indexToDelete = prompt("Enter the index where you want to delete a color")
// var numberOfColorsToDelete = prompt("Enter a numbers of colors you want to delete")
// colors.splice(indexToDelete,numberOfColorsToDelete)
// document.write(`Array after deleting colors from index ${indexToDelete}${colors}<br>`)

// Q 10
// var studentScores = [320,230,480,120]
// document.write(`Scores of Students:${studentScores}<br>`)

// studentScores.sort(function(a,b){
//     return a-b;

// })
// document.write(`Ordered Scores of Students:${studentScores}`)

// Q 11
// var cities = ["Karachi","Lahore","Islamabad","Quetta","Peshawar"]
// document.write(`Cities list:<br>${cities}<br><br>`)
// var selectedCities = []
// selectedCities=cities.slice(2,4)
// document.write(`Selected Cities List:<br>${selectedCities}`)

// Q 12
// var arr = ["This","is","my","cat"]
// document.write(`Array:<br>${arr}<br>`)
// var result = arr.join(" ")
// document.write(`String:<br>${result}`)

// Q 13
// var fifoArray = []

// fifoArray.push("Keyboard")
// fifoArray.push("Mouse")
// fifoArray.push("Printer")
// fifoArray.push("Monitor")

// document.write(`Devices:<br>${fifoArray}<br>`)

// document.write(`Out:<br>${fifoArray.shift()}<br>`)
// document.write(`Out:<br>${fifoArray.shift()}<br>`)
// document.write(`Out:<br>${fifoArray.shift()}<br>`)
// document.write(`Out:<br>${fifoArray.shift()}<br>`)

// Q 14
// var lifoArray = []

// lifoArray.push("Keyboard")
// lifoArray.push("Mouse")
// lifoArray.push("Printer")
// lifoArray.push("Monitor")

// document.write(`Devices:<br>${lifoArray}<br>`)

// document.write(`Out:<br>${lifoArray.pop()}<br>`)
// document.write(`Out:<br>${lifoArray.pop()}<br>`)
// document.write(`Out:<br>${lifoArray.pop()}<br>`)
// document.write(`Out:<br>${lifoArray.pop()}<br>`)

// Q 15
// var phoneManufactures = ["Apple","Samsung","Motorola","Nokia","Sony","Haier"]
// document.write(`<select>
// <option>${phoneManufactures[0]}</option>
// <option>${phoneManufactures[1]}</option>
// <option>${phoneManufactures[2]}</option>
// <option>${phoneManufactures[3]}</option>
// <option>${phoneManufactures[4]}</option>
// <option>${phoneManufactures[5]}</option>
// </select>`)







