 var names =  ["Nick","Keegan", "Marike"];
//
// names.forEach(function(name){
//   console.log('forEach', name);
// });
//
//
// names.forEach((name) => {
//   console.log('arrowFunc', name);
// });
//
//
// names.forEach((name) => console.log('shortened',name));


//var returnMe = (name) => name+"!";

//console.log(returnMe('Isaac'));
//
// var person = {
//   name: 'Zacck',
//   greet: function(){
//     names.forEach((name) => {
//       console.log(this.name + ' says hi to ' + name);
//     });
//   }
// };
//
// person.greet();


//Challenge Arear


function add(a, b) {
  return a + b;
}


//addStatement
var addStatement = (a,b) => {
  return a+b
}
console.log(addStatement(4,7))

//addExpression
var addExpression = (a,b) => a+b;

console.log(addExpression(4,90));

console.log(add(1,3));
console.log(add(9,0));
