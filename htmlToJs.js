function json(){
    // select all div elements
const divs = document.querySelectorAll('div');

// create an empty array to store JSON objects
const jsonArr = [];

// loop through the div elements
for (let i = 0; i < divs.length; i++) {
  const div = divs[i];

  // create an empty object to store div attributes and properties
  const obj = {};

  // get all attributes of the div element and add them to the object
  for (let j = 0; j < div.attributes.length; j++) {
    const attr = div.attributes[j];
    obj[attr.name] = attr.value;
  }

  // add the text content of the div element to the object
  obj['textContent'] = div.textContent;

  // push the object into the array
  jsonArr.push(obj);
}

// convert the array to a JSON string
const jsonString = JSON.stringify(jsonArr);

}

