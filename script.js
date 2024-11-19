
// Exercice 1

// const colors = ["red", "yellow", "green", "orange", "purple"];
// const boxes = document.querySelectorAll('.box');

// boxes.forEach(function(box){
//     box.addEventListener('click', function(){
// let CouleursActuelle = box.style.backgroundColor;
// let CouleurIndex = colors.indexOf(CouleursActuelle);
// let Newcouleurs = colors[(CouleurIndex + 1) % colors.length];
//  box.style.backgroundColor = Newcouleurs;

//     });
// });


// EXERCICE 2

// const box = document.querySelector('#box');
//     const button = document.querySelector('#button');
    
//     document.body.addEventListener('click', Handletexte);
    

//     function Handletexte() {
//       if (getComputedStyle(box).display !== "none") {
//         box.style.display = "none"; 
//         document.body.style.background = "white";
//       } else {
//         box.style.display = "block"; 
//         document.body.style.background = "grey";
//       }
      
//     }

    
// Exercice 3

// const result = document.querySelector('#result');

    
//     document.addEventListener('keydown', function (event){
     
//       if(event.ctrlKey && event.key === 'v'){
//         result.textContent = "Vous avez presser Ctrl + v";
//       }
//     })

// Exercice 3
// var boxes = document.querySelectorAll('.box');

// boxes.forEach(function (box) {
//     box.addEventListener('mouseenter', handleMouseEvent);
//     box.addEventListener('mouseleave', handleMouseEvent);
//     box.addEventListener('mousedown', handleMouseEvent); 
//     box.addEventListener('mouseup', handleMouseEvent);
//   });
    
//     function handleMouseEvent(event) {
//       var box = event.target;
//       if (event.type === 'mouseenter') {
//         box.style.filter = 'blur(0)';
//         box.style.borderColor = 'red';

//       } else if (event.type === 'mouseleave') {
//         box.style.filter = 'blur(10px)';
//         box.style.borderColor = 'black';
//       }

//       else if (event.type === 'mousedown') {
//         box.style.width = '400px';
//         box.style.height = '200px';
//       }
//       else if (event.type === 'mouseup') {
//         box.style.width = '200px';
//         box.style.height = '200px';
//       }
      
//     }

    
// BONUS

const boutton = document.querySelector('#button');
button = addEventListener('click', Handleimage);

function Handleimage(){
    
}