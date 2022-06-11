function createTextField(nameType)
   {
   var parentDiv = document.createElement("div");

   var title = document.createElement("span");
   title.innerHTML = nameType;
   title.classList.add("small-padding");

   var textField = document.createElement("input");
   textField.type = "text";
   textField.name = nameType.replace(" ", "-");
   textField.placeholder = title.innerHTML
   textField.maxlength = 150
   textField.classList.add("text-input")

   parentDiv.appendChild(title);
   parentDiv.appendChild(textField);
   parentDiv.classList.add("name-input-pair");

   return parentDiv;
   }

function createAuthorDiv()
   {
   var parentDiv = document.createElement("div");
   parentDiv.classList.add("side");
   parentDiv.classList.add("card-element");
   parentDiv.appendChild(createTextField("First Name"));
   parentDiv.appendChild(createTextField("Middle Name"));
   parentDiv.appendChild(createTextField("Last Name"));

   return parentDiv;
   }

function initDocument()
   {
   var cardElement = document.getElementsByClassName("card")[0];
   textTypes = ["First Name", "Last Name", "Date"];
   
   var formatType = document.createElement("span");
   formatType.innerHTML = "Website";
   formatType.classList.add("sub-title");

   cardElement.appendChild(formatType);
   cardElement.appendChild(createAuthorDiv());
   cardElement.appendChild(createTextField("title"));
   cardElement.appendChild(createTextField("URL"));
   }

document.addEventListener('DOMContentLoaded', function() {
    initDocument()
 }, false);

