var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Q16
var guests = ["Kiran", "Mahrang", "Laiba", "benish"];
// console.log("Great news! I found a bigger dinner table")
// adding more guest
// guests.unshift("maham");
// guests.splice(guests.length/2,0,"ayesha")
// guests.push("muskan")
// guests.forEach(guest=> {
// console.log('Dear',guest,"would you like to join me for dinner?")
// })
// Q17
// console.log("Unfortunately, I can only invite two people for dinner!")
// while(guests.length>2){
// let removedGuest = guests.pop();
// }
// guests.forEach(guest=>{
// console.log("Dear",guest,"you're still invited to dinner.")
// })
// guests.splice(0,guests.length)
// console.log(guests)
// Q18
var places = ["London", "America", "Turkey", "Dubai"];
console.log("original order:", places);
console.log("Alphabettical order:", __spreadArray([], places, true).sort());
console.log("Original order:", places);
console.log("Reverse alphabetical order:", __spreadArray([], places, true).sort().reverse());
console.log("Original order:", places);
places.reverse();
console.log("Reversed order:", places);
places.reverse();
console.log("Original order:", places);
places.sort();
console.log("Alphabetical order:", places);
places.reverse();
console.log("Reverse alphabetical order", places);
