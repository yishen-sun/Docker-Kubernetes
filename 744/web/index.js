labels = {
  0: "setosa",
  1: "versicolor",
  2: "virginica",
};
url = "http://localhost:8000/api";

let vector = window.prompt("Please enter the vector, eg: 5.8 4.0 1.2 0.2");
vector = [5.8, 4.0, 1.2, 0.2];
// r = requests.post(url,json={'feature': vector})
// print(labels[r.json()])

var xhr = new XMLHttpRequest();
xhr.open("POST", url, true);
xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
xhr.send(
  JSON.stringify({
    feature: vector,
  })
);
xhr.onload = function () {
  console.log("HELLO");
  console.log(this.responseText);
  var data = JSON.parse(this.responseText);
  console.log(data);
};

const image_input = document.querySelector("#image-input");
image_input.addEventListener("change", function () {
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    const uploaded_image = reader.result;
    document.querySelector(
      "#display-image"
    ).style.backgroundImage = `url(${uploaded_image})`;
  });
  reader.readAsDataURL(this.files[0]);
});
