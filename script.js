function addLang(langName) {
  const li = document.createElement("li");
  li.innerHTML = `${langName}`;
  document.querySelector(".lanagauge").appendChild(li);
}
addLang("python");
addLang("Java");

function addOptLang(lanagName) {
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(lanagName));
  document.querySelector(".lanagauge").appendChild(li);
}
addOptLang("HTML");
addOptLang("Golang");

//edit

const secLang = document.querySelector("li:nth-child(2)");
const newli = document.createElement("li");
newli.textContent = "Mojo";
secLang.replaceWith(newli);

//edit

const firstLang = document.querySelector("li:first-child");
const secNewLi = document.createElement("li");
secNewLi.textContent = "Data analytics";
firstLang.replaceWith(secNewLi);

// remove

const lastLang = document.querySelector("li:last-child");
lastLang.remove();
