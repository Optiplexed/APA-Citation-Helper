function createTextField(nameType)
   {
   var parentDiv = document.createElement("div");

   var textField = document.createElement("input");
   textField.type = "text";
   textField.name = nameType.replace(" ", "-");
   textField.placeholder = nameType;
   textField.maxlength = 150
   textField.classList.add("text-input")

   parentDiv.appendChild(textField);
   parentDiv.classList.add("name-input-pair");

   return parentDiv;
   }

function createAuthorDiv()
   {
   var parentDiv = document.createElement("div");
   parentDiv.classList.add("side");
   parentDiv.classList.add("pad-top-bottom");

   parentDiv.appendChild(createTextField("First Name"));

   var middleName = createTextField("Middle Name");
   middleName.classList.add("pad-right-left-1");
   parentDiv.appendChild(middleName);

   parentDiv.appendChild(createTextField("Last Name"));

   return wrapAndTitle(parentDiv, "Author");
   }

function createDateDiv()
   {
   var parentDiv = document.createElement("div");
   parentDiv.classList.add("side");
   parentDiv.classList.add("pad-top-bottom");
   parentDiv.appendChild(createTextField("Year"));

   var month = createTextField("Month");
   month.classList.add("pad-right-left-1");
   parentDiv.appendChild(month);

   parentDiv.appendChild(createTextField("Day"));

   return wrapAndTitle(parentDiv, "Date");
   }

function createOtherDiv()
   {
   var parentDiv = document.createElement("div");
   parentDiv.classList.add("side");
   parentDiv.classList.add("pad-top-bottom");
   parentDiv.appendChild(createTextField("Title"));

   var month = createTextField("URL");
   month.classList.add("pad-right-left-1");
   parentDiv.appendChild(month);

   parentDiv.appendChild(createTextField("Publisher"));

   return wrapAndTitle(parentDiv, "Other");
   }

function wrapAndTitle(targetDiv, title)
   {
   var parentDiv = document.createElement("div");   

   var subTitle = document.createElement("p");
   subTitle.classList.add("sub-title");
   subTitle.innerHTML = title;

   parentDiv.appendChild(subTitle);
   parentDiv.appendChild(targetDiv);

   return parentDiv;
   }

function createSubmitButton()
   {
   var buttonDiv = document.createElement("div");  
   
   return buttonDiv;
   }

function initDocument()
   {
   var cardElement = document.getElementsByClassName("card")[0];
   
   elements = [createAuthorDiv(), createDateDiv(), createOtherDiv()];
   elements.forEach(element => {
      element.classList.add("pad-bottom");
      cardElement.appendChild(element);
      });
   }

document.addEventListener('DOMContentLoaded', function() {
    initDocument()
 }, false);

