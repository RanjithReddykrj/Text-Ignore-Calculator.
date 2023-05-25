const textArea =document.getElementById("text"); 
const inputBtns = document.querySelectorAll('button');
const clearBtn = document.getElementById('clear-btn');
const savebtn=document.getElementById("savebtn");
let expression="";
let val="";
textArea.value="20*3 pens+10*2 pencils"
inputBtns.forEach((inputBtn) => {
  if (inputBtn.classList.contains('clear')) {
    inputBtn.addEventListener('click', () =>clearFunc())
  } 
  else if (inputBtn.classList.contains('equal-sign')) {
    inputBtn.addEventListener('click', () => evaluateFunc())
  }
  else{
      inputBtn.addEventListener('click', () =>addtotextArea(inputBtn.value));
  }
});
const clearFunc=()=>{
  textArea.value="";
}
const addtotextArea=(val)=>{
  textArea.value=textArea.value+val;
}
const evaluateFunc = () => {
  expression = textArea.value;

  // Clean up the expression by removing unwanted characters
  const cleanedString = expression.replace(/[\sA-Za-z]|[^0-9*+\-\/\.]/g, "");
 

  // Evaluate the expression using the eval() function
  const result = eval(cleanedString);
   
  // Update the text area with the result
  textArea.value = textArea.value+' = '+result;
};
savebtn.addEventListener("click",()=>{
// set the data you want to pass as query parameters
const data = { Calculation: textArea.value};

// encode the data as a query string
const queryString = new URLSearchParams(data).toString();

// redirect to the target website with the query string appended to the URL
let url = "https://todoproj.ranjithk7.repl.co/?" + queryString;
  window.open(url, "_blank");

})
