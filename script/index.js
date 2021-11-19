var people = document.getElementById("name");
var email = document.getElementById("email");
var type = document.getElementById("type");

var listStorage = [];

const HandleConfirm = () => {
  var objects = { name: people.value, email: email.value, type: type.value };

  var objectsJson = JSON.parse(localStorage.getItem("donator"));

  if (objectsJson != null) {
    listStorage = objectsJson.filter((a) => a);
  }

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

    if (objectsJson != null) {
      listStorage.push(donator);
      localStorage.setItem(
        "donator",
        JSON.stringify(listStorage)
      );
    }else{
      listStorage.push(donator);
      localStorage.setItem(
        "donator",
        JSON.stringify(listStorage)
      );
    }

    people.value = "";
    email.value = "";
    type.value = "";

    sweetAlert(
      'Doador adicionado',
      '',
      'success'
    )
  } else {
    sweetAlert(
      'Ohh noo',
      "Por favor, preencha todos os campos!",
      'error'
    )
  }

};

window.onload = function GetDonators() {
  var objectsJson = JSON.parse(localStorage.getItem("donator"));
  const newObjectsJson = objectsJson != null ? objectsJson.filter((a) => a) : 0;

  listStorage.push(newObjectsJson);

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
  listStorage = [];
};
