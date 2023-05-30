let add = document.querySelector("#add");
let subract = document.querySelector("#subtract");
let reset = document.querySelector("#reset");


console.log(add, subract, reset);

add.addEventListener("click", function () {
  let output = document.querySelector("#output");
  let result = Number(output.innerText) + 1;

  output.innerText = result;
});

subract.addEventListener("click", function () {
    let output = document.querySelector("#output");
    let result = Number(output.innerText) - 1;
  
    if (result < 0) {
      document.write("ERROR!!! Refresh to get back to counter.");
    }
  
    output.innerText = result;
  });

  reset.addEventListener("click", function () {
    let output = document.querySelector("#output");
    let result = Number(0);
  
    if (result < 0) {
      result = 0;
    }
  
    output.innerText = result;
  });
