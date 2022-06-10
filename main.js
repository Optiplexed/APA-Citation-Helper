function initDocument()
   {
    cardElement = document.getElementsByClassName("card")[0];
    textTypes = ["First Name", "Last Name", "Date"];
    for(var i = 0; i < 3; i++)
       {
       parentDiv = document.createElement("div")
       thingy = document.createElement("span");
       textField = document.createElement("input");

       parentDiv.className = "input-pair"

       thingy.innerHTML = textTypes[i];

       textField.type = "text";
       textField.name = textTypes[i].replace(" ", "-");
       textField.placeholder = textTypes[i];
       textField.maxlength = 150

       parentDiv.appendChild(thingy);
       parentDiv.appendChild(textField);
       cardElement.appendChild(parentDiv);

       }
   }

document.addEventListener('DOMContentLoaded', function() {
    initDocument()
 }, false);

