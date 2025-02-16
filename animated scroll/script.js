let indicator = document.querySelector(".scroll-indicator .progress");
let scrollHeight =
  document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener("scroll", scroll);

function scroll() {
  let scrollTop = document.documentElement.scrollTop;
  let scrolled = (scrollTop / scrollHeight) * 100;
  indicator.style.width = `${scrolled}%`;
}

function reverseString(str){
   let reversed=  str.split("").reverse().join("")
   return str=== reversed
}
console.log(reverseString("nayan"))


function FindAarry(str){
    return Math.max(...str)
}

console.log(FindAarry([1,2,3,4,5,6,7,90]))

function FindSum(str){
  return str.reduce((Sum,num)=> Sum+ num + 0)
}

console.log(FindSum([1,2,3,4,5,6]))
