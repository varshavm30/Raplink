
"use strict";
var cl=console.log;
// alert("hello");

let wraplink = document.getElementById('resultinfo');
console.log(wraplink);



let result = `<p>I daily visit and read blogs on <a href="https://javascript.info/" target="_blank">1.  https://javascript.info/</a>, <a href="https://medium.com" target="_blank">2.  https://medium.com</a>, <a href="https://www.freecodecamp.org/learn" target="_blank">3.  https://www.freecodecamp.org/learn</a>
and <a href="https://css-tricks.com" target="_blank">4.  https://css-tricks.com</a> to improve my skills.</p>`;



console.log(result);


wraplink.innerHTML= result;


let wraplink1 = document.getElementById('resultinfo1')
console.log(wraplink1);

let result1 = `<p> I daily visit and read blogs on <a href="https://javascript.info/" target="_blank" >1. javaScript</a>, <a href="https://medium.com" target="_blank">2. medium</a> <a href="https://www.freecodecamp.org/learn" target="_blank">3. freecodecamp</a> and <a href="https://css-tricks.com" target="_blank">4. css-tricks</a> to improve my skills.</p>`

console.log(result1);


wraplink1.innerHTML= result1;

let skill = document.getElementById('weblink');
console.log(skill);

let result2 = `<p><ul><li type='square'><strong>visit the websites below:</strong></li></ul>
<div class="text-capitalize">
<ul><li><a href="https://www.w3schools.com/" target="_blank">w3schools</a></li>
<li><a href="https://www.geeksforgeeks.org/?newui" target="_blank">geeksforgeeks</a></li>
<li><a href="https://www.programiz.com/" target="_blank">programiz</a></li></ul>
</div> </p>`



console.log(result2);

skill.innerHTML= result2;