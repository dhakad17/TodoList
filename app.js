/*const ul = document.querySelector("ul");
const li = document.querySelectorAll("li");

const myform = document.addfrm;
const txtadd = myform.add;

myform.addEventListener("submit", (e) => {
  var li = document.createElement("li");
  li.setAttribute(
    "class",
    "list-group-item d-flex justify-content-between align-item-center"
  );
  var span = document.createElement("span");
  var i = document.createElement("i");
  i.setAttribute("class", "far fa-trash-alt delete");
  var x = txtadd.value;
  var t = document.createTextNode(x);

  // li.innerHTML = "<span>" + t + "</span>";

  // ul.innerHTML = "<li>" + x + "</li>";
  if (txtadd.value != "") {
    span.appendChild(t);
    li.appendChild(span);
    li.appendChild(i);
    ul.appendChild(li);
    txtadd.value = "";
  }

  e.preventDefault();
});*/
let addFrm = document.addfrm;
let text = addfrm.add;
let ul = document.querySelector("ul");

let Include = (item) => {
  let str = `<li
        class="
          list-group-item
          d-flex
          justify-content-between
          align-items-center
        "
      >
        <span>${item}</span>
        <i class="far fa-trash-alt delete"></i>
      </li>`;
  ul.innerHTML += str;
};

addfrm.addEventListener("submit", (e) => {
  let x = text.value;
  e.preventDefault();
  if (x.length > 0) {
    Include(x);
    text.value = "";
  }
});
ul.addEventListener("click", (e) => {
  if (e.target.nodeName == "I") {
    e.target.parentElement.remove();
  }
});

let searchItem = (item) => {
  let listItem = ul.children;
  for (let li of listItem) {
    if (li.innerText.toLowerCase().indexOf(text) == -1)
      li.classList.add("filtered");
    else li.classList.remove("filtered");
  }
};

let searchText = document.querySelector(".search input");
searchText.addEventListener("keyup", (e) => {
  searchItem(searchText.value.toLowerCase());
});
