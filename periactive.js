       function showGas() {
           // elements gas at roomtemp.
           const divElement = document.getElementById("H");
           divElement.style = "default-div";
           
           const button = document.getElementById("gas");
           button.style.backgroundColor = "black";
           const button1 = document.getElementById("liquid");
           button1.style.backgroundColor = "lightgrey";
           const button2 = document.getElementById("all");
           button2.style.backgroundColor = "lightgrey";
           const button3 = document.getElementById("solid");
           button3.style.backgroundColor = "lightgrey";
       }

       function showLiquid() {
           // elements liquid at roomtemp.
          const myElement = document.getElementById('H');
           myElement.style.color = "gray";
           myElement.style.backgroundColor = "lightgray";
           myElement.style.border = "0px";  

           const button4 = document.getElementById("gas");
           button4.style.backgroundColor = "lightgray";
           const button5 = document.getElementById("liquid");
           button5.style.backgroundColor = "black";
           const button6 = document.getElementById("all");
           button6.style.backgroundColor = "lightgray";
           const button7 = document.getElementById("solid");
           button7.style.backgroundColor = "lightgray";
       }

       function showSolid() {
           // elements solid at roomtemp.
           const myElement = document.getElementById('H');
           myElement.style.color = "gray";
           myElement.style.backgroundColor = "lightgray";
           myElement.style.border = "0px";
           const button12 = document.getElementById("gas");
           button12.style.backgroundColor = "lightgray";
           const button13 = document.getElementById("liquid");
           button13.style.backgroundColor = "lightgray";
           const button14 = document.getElementById("all");
           button14.style.backgroundColor = "lightgray";
           const button15 = document.getElementById("solid");
           button15.style.backgroundColor = "black";
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

           const gridContainer = document.querySelector('.grid-container');
           const divs = gridContainer.querySelectorAll('div');
           divs.forEach(div => {
            div.style = "default";
           });
       }
