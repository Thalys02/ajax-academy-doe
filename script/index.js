var people = document.getElementById("name");
var email = document.getElementById("email");
var type = document.getElementById("type");

var listStorage = [];

const HandleConfirm = () => {
  debugger;
  var objects = { name: people.value, email: email.value, type: type.value };

  if (objects.name && objects.email && objects.type) {
    var ul = document.getElementById("list");

    var li = document.createElement("li");
    var span = document.createElement("span");
    var text = document.createTextNode(`( ${objects.type} ) ${objects.name}`);

    ul.appendChild(li);
    li.appendChild(span);
    span.appendChild(text);

    const donator = {
      Blood_type: objects.type,
      Name: objects.name,
      Inclusion_date: Date.now(),
    };
    listStorage.push(donator);

    localStorage.setItem("donator", JSON.stringify(listStorage));

    people.value = "";
    email.value = "";
    type.value = "";
  } else {
    alert("Por favor, preencha todos os campos!");
  }
};

window.onload = function GetDonators() {
  debugger;
  var objectsJson = JSON.parse(localStorage.getItem("donator"));
 const newObjectsJson = objectsJson.filter((a) => a);
  for (let index = 0; index < newObjectsJson.length; index++) {
    var ul = document.getElementById("list");

    var li = document.createElement("li");
    var span = document.createElement("span");
    var text = document.createTextNode(
      `( ${newObjectsJson[index].Blood_type} ) ${newObjectsJson[index].Name}`
    );

    ul.appendChild(li);
    li.appendChild(span);
    span.appendChild(text);
  }
};
