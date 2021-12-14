
function welcome () {
let welcome = document.getElementById('welcome');

let typewriter = new Typewriter(welcome, {
    loop: false
});

typewriter.typeString('<strong>Welcome!<strong>')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Alex Bishop')
    
    .start();
    

}

function getInTouch () {
    let getInTouch = document.getElementById('pageMsg');
   
    let typewriter = new Typewriter(getInTouch, {
        loop: false
    });
    
    typewriter.typeString('<strong>Get In Touch!<strong>')
    .start();
   
  
}

function portfolio () {
    let portfolio = document.getElementById('portfolio');
   
    let typewriter = new Typewriter(portfolio, {
        loop: false
    });
    
    typewriter.typeString('<strong>Portfolio<strong>')
    .start();
   
}

function aboutMe () {
    let getInTouch = document.getElementById('aboutMe');
   
    let typewriter = new Typewriter(getInTouch, {
        loop: false
    });
    
    typewriter.typeString('<strong>About Me<strong>')
    .start();
   
}



