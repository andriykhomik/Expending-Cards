

let panels = document.getElementsByClassName('panel');
console.log (panels);

for (const panelDivCard of panels) {
    console.log (panelDivCard);
    panelDivCard.onclick = () =>{
        removeActiveClasses();
        panelDivCard.classList.add('active');
        // console.log (toggle);
    }
}

function removeActiveClasses(){
    for (const panelDivCard of panels) {
        panelDivCard.classList.remove('active');
    }
}



/*// const panels = document.querySelectorAll('.panel');
// panels.forEach(panel => {
//     panel.addEventListener('click', ()=> {
//         removeActiveClasses();
//         panel.classList.add('active');
//     })
// })
//
function removeActiveClasses(){
   panels.forEach(panel => {
        panel.classList.remove('active');
    })
}*/
