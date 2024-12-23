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
       }

       function showAll() {
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
            div.style = "default";
           });
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
    }