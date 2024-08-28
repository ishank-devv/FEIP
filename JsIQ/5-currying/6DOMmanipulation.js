// Real world use case of currying in web application
//Q5- manipulating DOM

function updateElementText(id) {
  return function (content) {
    document.querySelector("#" + id).textContent = content;
  };
}

//intialising it once
const updateHeader = updateElementText("heading");
// we can use updateHeader again and again
// everytime we want to update the text inside h1
updateHeader("Hello Ishank update 1");
