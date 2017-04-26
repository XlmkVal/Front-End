// let newdiv = document.createElement('div');
// document.body.appendChild(newdiv);

// let newLi = document.createElement('li');
// let location2 = document.getElementById("second");
// let parenteDiv = document.getElementById("second").parentNode;
// parenteDiv.insertBefore(newLi, location2);

// //changing position of element
// parenteDiv.appendChild(location2);
// // Every element is unique by itself, appending it would actualy move it

// let img = document.getElementsByTagName('img')[0];
// img.onclick = function alerting() {
//     alert('Its working');
// }

// let elem = document.getElementById('second').addEventListener("keypress", function(event) {
//     prompt('Hello, how are you?');
// })

// let textbox = document.getElementsByName('home')[0].addEventListener('keypress', function(event) {
//     console.log(event.which);
// })

// document.getElementsByTagName('p')[0].addEventListener('click', function() {
//     document.getElementsByTagName('p')[0].innerText = "Never";
// })

// let helloJQ = $("li").first();
// console.log(helloJQ);

// let l = document.getElementById('second');
// console.log(l.textContent);
// console.log(l.childNodes);
// let l1 = l.childNodes;
// let l2 = l.children;

// for (let i = 0, len = l1.length; i < len; i += 1) {
//     console.log(l1[i].nodeName);
// }

// console.log(l.children);



// let first = $('ol');
// console.log(first.parent());
// console.log(first.children())

let l = document.getElementById('second');
// console.log(l.classList);
// l.classList.add('que');
// l.classList.add('damn');
// console.log(l.classList);
l.className = 'Hello';
l.className += ' SecondHello';
console.log(l.className);

let n = $('#one');
console.log(n.attr("class"));
n.addClass('red');
n.append('<strong>dododo</strong>')
console.log(n.attr("class"));
console.log(n.html());
console.log(n.text());

// $('<h3 id="strange"></h3>').text('How do you do?').appendTo($('body'));
// console.log($('.strange').val())

$('<div>Hello</div>').appendTo(document.body)

let buttonEvent = [].slice.call(document.getElementsByTagName('button'));
buttonEvent.forEach((x) => x.addEventListener('mouseover', function() {
    alert('It\'s working')
}))

$('body').append($('<h3></h3>'));
$('input').on('input', function() {
    $('h3').text($(this).val())
})