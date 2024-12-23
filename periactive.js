       function showGas() {        
           const button = document.getElementById("gas");
           button.style.backgroundColor = "darkblue";
           const button1 = document.getElementById("liquid");
           button1.style.backgroundColor = "lightgrey";
           const button2 = document.getElementById("all");
           button2.style.backgroundColor = "lightgrey";
           const button3 = document.getElementById("solid");
           button3.style.backgroundColor = "lightgrey";
           const button4 = document.getElementById("nature");
           button4.style.backgroundColor = "lightgrey";
           const gridContainer = document.querySelector('.grid-container');
           const divs = gridContainer.querySelectorAll('div');
           divs.forEach(div => {
            if (div.getAttribute('data-element') == "gas") {
            div.style.backgroundColor = "darkblue"; div.style.color = "white";}
            else if (div.getAttribute('data-element') == "solid")  {
               div.style.backgroundColor = "lightgray";
               div.style.color = "gray";
            }
            else if (div.getAttribute('data-element') == "liquid")  {
                div.style.backgroundColor = "lightgray";
                div.style.color = "gray";
             }
           });
           const element = document.getElementById("tempSlider");
  element.style.visibility = "hidden";
  const element2 = document.getElementById("temperature");
  element2.style.visibility = "hidden";
  const element3 = document.getElementById("buttonsolid");
  element3.style.visibility = "hidden";
  const element4 = document.getElementById("buttonliquid");
  element4.style.visibility = "hidden";
  const element5 = document.getElementById("buttongas");
  element5.style.visibility = "hidden";
       }



       function showLiquid() {
           const button4 = document.getElementById("gas");
           button4.style.backgroundColor = "lightgray";
           const button5 = document.getElementById("liquid");
           button5.style.backgroundColor = "darkblue";
           const button6 = document.getElementById("all");
           button6.style.backgroundColor = "lightgray";
           const button7 = document.getElementById("solid");
           button7.style.backgroundColor = "lightgray";
           const button8 = document.getElementById("nature");
           button8.style.backgroundColor = "lightgrey";
           const gridContainer = document.querySelector('.grid-container');
           const divs = gridContainer.querySelectorAll('div');
           divs.forEach(div => {
            if (div.getAttribute('data-element') == "liquid") {
            div.style.backgroundColor = "darkblue"; div.style.color = "white";}
            else if (div.getAttribute('data-element') == "solid")  {
               div.style.backgroundColor = "lightgray";
               div.style.color = "gray";
            }
            else if (div.getAttribute('data-element') == "gas")  {
                div.style.backgroundColor = "lightgray";
                div.style.color = "gray";
             }
            });
            const element = document.getElementById("tempSlider");
  element.style.visibility = "hidden";
  const element2 = document.getElementById("temperature");
  element2.style.visibility = "hidden";
  const element3 = document.getElementById("buttonsolid");
  element3.style.visibility = "hidden";
  const element4 = document.getElementById("buttonliquid");
  element4.style.visibility = "hidden";
  const element5 = document.getElementById("buttongas");
  element5.style.visibility = "hidden";
       }



       function showSolid() {
           const button12 = document.getElementById("gas");
           button12.style.backgroundColor = "lightgray";
           const button13 = document.getElementById("liquid");
           button13.style.backgroundColor = "lightgray";
           const button14 = document.getElementById("all");
           button14.style.backgroundColor = "lightgray";
           const button15 = document.getElementById("solid");
           button15.style.backgroundColor = "darkblue";
           const button16 = document.getElementById("nature");
           button16.style.backgroundColor = "lightgrey";
           const gridContainer = document.querySelector('.grid-container');
           const divs = gridContainer.querySelectorAll('div');
           divs.forEach(div => {
            if (div.getAttribute('data-element') == "solid") {
            div.style.backgroundColor = "darkblue"; div.style.color = "white";}
            else if (div.getAttribute('data-element') == "liquid")  {
               div.style.backgroundColor = "lightgray";
               div.style.color = "gray";
            }
            else if (div.getAttribute('data-element') == "gas")  {
                div.style.backgroundColor = "lightgray";
                div.style.color = "gray";
             }
            });
            const element = document.getElementById("tempSlider");
            element.style.visibility = "hidden";
            const element2 = document.getElementById("temperature");
            element2.style.visibility = "hidden";
            const element3 = document.getElementById("buttonsolid");
            element3.style.visibility = "hidden";
            const element4 = document.getElementById("buttonliquid");
            element4.style.visibility = "hidden";
            const element5 = document.getElementById("buttongas");
            element5.style.visibility = "hidden";
       }

       

       function showNature() {
        const button12 = document.getElementById("gas");
        button12.style.backgroundColor = "lightgray";
        const button13 = document.getElementById("liquid");
        button13.style.backgroundColor = "lightgray";
        const button14 = document.getElementById("all");
        button14.style.backgroundColor = "lightgray";
        const button15 = document.getElementById("solid");
        button15.style.backgroundColor = "lightgray";
        const button16 = document.getElementById("nature");
        button16.style.backgroundColor = "green";
        const gridContainer = document.querySelector('.grid-container');
        const divs = gridContainer.querySelectorAll('div');
        divs.forEach(div => {
         if (div.getAttribute('nature') == "y") {
         div.style.backgroundColor = "green"; div.style.color = "white";}
         else if (div.getAttribute('data-element') == "liquid")  {
            div.style.backgroundColor = "lightgray";
            div.style.color = "gray";
         }
         else if (div.getAttribute('data-element') == "gas")  {
             div.style.backgroundColor = "lightgray";
             div.style.color = "gray";
          }
          else if (div.getAttribute('data-element') == "solid")  {
            div.style.backgroundColor = "lightgray";
            div.style.color = "gray";
         }
         });
         const element = document.getElementById("tempSlider");
         element.style.visibility = "hidden";
         const element2 = document.getElementById("temperature");
         element2.style.visibility = "hidden";
         const element3 = document.getElementById("buttonsolid");
         element3.style.visibility = "hidden";
         const element4 = document.getElementById("buttonliquid");
         element4.style.visibility = "hidden";
         const element5 = document.getElementById("buttongas");
         element5.style.visibility = "hidden";
    }


    const slider = document.getElementById("tempSlider");
const output = document.getElementById("temperature");
output.innerHTML = "Temperature: " + slider.value + "K"; // Display the default value

slider.oninput = function() {
  output.innerHTML = "Temperature: " + this.value + "K";
}



function showAll(temp) {
   const button8 = document.getElementById("gas");
   button8.style.backgroundColor = "lightgray";
   const button9 = document.getElementById("liquid");
   button9.style.backgroundColor = "lightgray";
   const button10 = document.getElementById("all");
   button10.style.backgroundColor = "black";
   const button11 = document.getElementById("solid");
   button11.style.backgroundColor = "lightgrey";
   const button12 = document.getElementById("nature");
   button12.style.backgroundColor = "lightgrey";
   const gridContainer = document.querySelector('.grid-container');
   const divs = gridContainer.querySelectorAll('div');
   divs.forEach(div => {
       if (div.id>0 && div.getAttribute('melt') <= parseInt(temp) && div.getAttribute('boil') > parseInt(temp)) {
         div.style.backgroundColor = "orange";
         div.style.color = "white";
      }  
        else if  (div.id>0 && div.getAttribute('melt') > parseInt(temp) ) {
            div.style.backgroundColor = "black";
            div.style.color = "white";
         }
         else if  (div.id>0 && div.getAttribute('boil') < parseInt(temp) ) {
            div.style.backgroundColor = "red";
            div.style.color = "white";
         }


         else div.style = "default";

   })
   const element = document.getElementById("tempSlider");
element.style.visibility = "visible";
const element2 = document.getElementById("temperature");
element2.style.visibility = "visible";
const element3 = document.getElementById("buttongas");
element3.style.visibility = "visible";
const element4 = document.getElementById("buttonliquid");
element4.style.visibility = "visible";
const element5 = document.getElementById("buttonsolid");
element5.style.visibility = "visible";
}