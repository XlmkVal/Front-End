var collection = { name: 'Val', age: 12 }

var first = `
    <h1>{{age}}</h1>
    <h1>{{name}}</h1>
`

var second = `
    <h1>{{name}}</h1>
    <h1>{{age}}</h1>
`

// var used = document.getElementById('templates');

// var hbTemplate = Handlebars.compile(first);

// var data = document.getElementById('templates2');

// var domNode = document.getElementsByTagName('body');

// domNode[0].innerHTML = hbTemplate(data.collection);

var used = Handlebars.compile(first);
document.getElementById('main').innerHTML = used(collection)