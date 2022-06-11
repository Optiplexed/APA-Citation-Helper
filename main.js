textFieldList = []
textFieldMap = new Map();
var lastCitation = null;

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
   middleName.classList.add("pad-right-left");
   parentDiv.appendChild(middleName);

   parentDiv.appendChild(createTextField("Last Name"));

   return wrapAndTitle(parentDiv, "Author");
   }

function createDateDiv()
   {
   var parentDiv = document.createElement("div");
   parentDiv.classList.add("side");
   parentDiv.classList.add("pad-top-bottom");
   parentDiv.appendChild(createTextField("Month"));

   var month = createTextField("Day");
   month.classList.add("pad-right-left");
   parentDiv.appendChild(month);

   parentDiv.appendChild(createTextField("Year"));

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

function isInvalid(str)
   {
   formatError = true;
   return typeof(str) === "undefined" || str === null || str === "";
   }
function getAndResetFormatError()
   {
   var toReturn = formatError;   
   formatError = false;
   return toReturn;
   }
function getField(fieldName, modify = null)
   {
   var returnVal = textFieldMap.get(fieldName).value;   
   if(!isInvalid(returnVal))
      {
      return modify === null ? returnVal : modify(returnVal);   
      }
   return "";
   }
function numToDate(num)
   {
   switch(num)
      {
      case 1: return "January";
      case 2: return "February";
      case 3: return "March";
      case 4: return "April";
      case 5: return "May";
      case 6: return "June"; 
      case 7: return "July";
      case 8: return "August";
      case 9: return "September";
      case 10: return "October";
      case 11: return "November";
      case 12: return "December";
      default:
      return null;
      }   
   }
function isValidDate(date)
   {
   parsed = parseInt(date)
   return !isNaN(parsed) && parsed >= 1  && parsed <= 12;
   }
function formatCitation()
   {
   var formatted = "";
   formatError = false;
   
   var name = getField("last-name", (str) => str[0].toLocaleUpperCase() + str.slice(1) + ", ");
   name += getField("first-name", (str) => str[0].toLocaleUpperCase() + ".");
   name += getField("middle-name", (str) => " " + str[0].toLocaleUpperCase() + ".");

   var date = getField("year", (str) => str += ", ");
   date += getField("month", (str) => str += " ");
   date += getField("day", (str) => isValidDate(str) ? numToDate(parseInt(str)) : str);

   var title = getField("title", (str) => str += ".");
   var publisher = getField("publisher", (str) => str += ".");
   var url = getField("url");

   formatted = `${name} (${date}) <em>${title}</em> ${publisher} ${url}`;


   //Aubrey, A. (2019, December 12) How to reduce food waste. NPR. https://www.npr.org/2019/12/10/786867315/how-to-reduce-food-waste
   return formatted;
   }
function createCitation()
   {
   var citationText = document.createElement("p");
   citationText.classList.add("citation-text");

   console.log(textFieldMap.get("first-name"));

   citationText.innerHTML = formatCitation();
   
   var parentDiv = document.createElement("div");
   parentDiv.classList.add("citation-card");
   
   parentDiv.appendChild(citationText);
   
   return parentDiv;
   }
function onSubmitClick()
   {
   var newCitation = createCitation();
   document.body.appendChild(newCitation);
   if(lastCitation !== null)
      {
      document.body.insertBefore(newCitation, lastCitation);
      }
   lastCitation = newCitation;
   }

function onClearClick()
   {
   for(var i = 0; i < textFieldList.length; i++)
      {
      textFieldMap.get(textFieldList[i]).value = "";   
      }   
   }

function createButtons()
   {
   var parentDiv = document.createElement("div"); 
   var submitButton = document.createElement("button"); 
   var clearButton = document.createElement("button"); 
   var spacing = document.createElement("div");
   
   submitButton.classList.add("button");
   submitButton.type = "submit";
   submitButton.onclick = onSubmitClick;

   var submitText = document.createElement("span");  
   submitText.innerText = "Submit";
   submitText.classList.add("button-text");

   clearButton.classList.add("button");
   clearButton.type = "submit";
   clearButton.onclick = onClearClick;

   var clearText = document.createElement("span");  
   clearText.innerText = "Clear";
   clearText.classList.add("button-text");

   spacing.classList.add("pad-right");
   
   submitButton.appendChild(submitText);
   clearButton.appendChild(clearText);

   parentDiv.appendChild(submitButton);
   parentDiv.appendChild(spacing);
   parentDiv.appendChild(clearButton);

   parentDiv.classList.add("side");

   return parentDiv;
   }

function initDocument()
   {
   cardElement = document.getElementsByClassName("card")[0];
   
   elements = [createAuthorDiv(), createDateDiv(), createOtherDiv()];
   elements.forEach(element => {
      element.classList.add("pad-bottom");
      cardElement.appendChild(element);
      });

   cardElement.appendChild(createButtons());
   }

document.addEventListener('DOMContentLoaded', function() {
    initDocument()
 }, false);

