function initDocument()
   {
    cardElement = document.getElementsByClassName("card")[0];
    for(var i = 0; i < 3; i++)
       {
       para = document.createElement("div");
       thingy = document.createElement("div");
       para.innerText = "This is a paragraph";
       cardElement.appendChild(para);
       cardElement.appendChild(thingy);
       }
   }

document.addEventListener('DOMContentLoaded', function() {
    initDocument()
 }, false);

