// function getTempCallback(location, callback) {
//   //this will take the location and return the temprature
//   //once it gets the weather it will pass weather into callback
//
//   //all well lets pass back undefined as our error and the temp
//   callback(undefined, 14);
//
//   //if an error occurs
//   callback('City Not Found');
// }
//
// getTempCallback('Capetown', function(err, temp){
//   if(err) {
//     console.log('error', err);
//   } else {
//     console.log('success', temp);
//   }
// });
//
//
//
// //using promises to replace callbacks
// function getTempPromise(location) {
//   //to create a promise return a new promise take takes in an anon function
//   return new Promise(function(resolve, reject) {
//     //this is a promise
//     //if all goes well
//     setTimeout(function() {
//       resolve(17);
//       //if stuff didnt go well
//       reject('city not found');
//     }, 3000);
//   });
// }
//
// //call the promise using the then function passing a success and an erro case
// getTempPromise('Capetown').then(function (temp) {
//   console.log('promise success ', temp);
// }, function(err){
//   console.log('promise error', err);
// });


//Challenge Area

function addPromise(a,b) {
  return new Promise(function(resolve,reject) {
    if(typeof a === 'number' && typeof  b == 'number'){
      var sum = a +b
      resolve(sum);
    } else  {
      reject('Please Make sure you entered numbers');
    }

  });
}


addPromise(1,2).then(function(sum){
  console.log('Thee sum of the numbers is = ', sum )
}, function(error) {
  console.log(error);
});

addPromise('a',2).then(function(sum){
  console.log('Thee sum of the numbers is = ', sum )
}, function(error) {
  console.log(error);
});
