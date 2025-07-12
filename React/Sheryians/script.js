// var root = document.querySelector("#root")

// var h1 =  document.createElement('h1')

var h1 = React.createElement('h1', null , "Hello From React")
                         // selector , properties , message
console.log(h1);


var parent = document.querySelector("#parent")



var root = ReactDOM.createRoot(parent)
root.render(h1)


// console.log(parent);


// ReactDOM.createRoot()
// console.log(ReactDOM);



// h1.innerHTML = "Hello";

// console.log(h1);

// root.appendChild(h1)


// console.log(React);




