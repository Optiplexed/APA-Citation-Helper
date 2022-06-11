textFieldList = []
textFieldMap = new Map();

function createTextField(nameType, styles = [])
   {
   var parentDiv = document.createElement("div");

   var textField = document.createElement("input");
   textField.type = "text";
   textField.name = nameType.replace(" ", "-").toLocaleLowerCase();
   textField.placeholder = nameType;
   textField.maxlength = 150
   textField.classList.add("text-input")

   textFieldList.push(textField.name);
   textFieldMap.set(textField.name, textField);

   for(var i = 0; i < styles.length; i++)
      {
      textField.classList.add(styles[i]);   
      }

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
   parentDiv.classList.add("pad-top-bottom");

   children = ["Title", "Publisher", "URL"];

   children.forEach(element => {
      var childDiv = createTextField(element, ["extend-width"]);
      childDiv.classList.add("pad-bottom");
      parentDiv.appendChild(childDiv);
      });

   return wrapAndTitle(parentDiv, "Other");
   }

function wrapAndTitle(targetDiv, title)
   {
   var parentDiv = document.createElement("div");   

   var subTitle = document.createElement("p");
   subTitle.classList.add("sub-title");
   subTitle.innerText = title;

   parentDiv.appendChild(subTitle);
   parentDiv.appendChild(targetDiv);

   return parentDiv;
   }
function createCitation()
   {
   var citationText = document.createElement("p");
   citationText.classList.add("citation-text");

   console.log(textFieldMap.get("first-name"));

   var formattedText = "";
   for(var i = 0; i < textFieldList.length; i++)
      {
      formattedText += (textFieldList[i]) + "\n";   
      } 
   citationText.innerText = formattedText;
   

   var parentDiv = document.createElement("div");
   parentDiv.classList.add("citation-card");
   
   parentDiv.appendChild(citationText);
   
   return parentDiv;
   }
function onSubmitClick()
   {
   document.body.appendChild(createCitation());
   }

function createSubmitButton()
   {
   var parentDiv = document.createElement("div"); 
   var button = document.createElement("button");  
   
   button.classList.add("submit-button");
   button.type = "submit";
   button.onclick = onSubmitClick;

   var submitText = document.createElement("span");  
   submitText.innerText = "Submit";
   submitText.classList.add("submit-text");
   
   //parentDiv.classList.add("Center")

   button.appendChild(submitText);
   parentDiv.appendChild(button);

   return button;
   }

function initDocument()
   {
   var cardElement = document.getElementsByClassName("card")[0];
   
   elements = [createAuthorDiv(), createDateDiv(), createOtherDiv()];
   elements.forEach(element => {
      element.classList.add("pad-bottom");
      cardElement.appendChild(element);
      });

   cardElement.appendChild(createSubmitButton());
   }

document.addEventListener('DOMContentLoaded', function() {
    initDocument()
 }, false);

