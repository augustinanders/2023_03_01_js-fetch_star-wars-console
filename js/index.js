console.clear();

const url = "https://swapi.dev/api/people";

async function fetchData() {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);

  const names = await data.results.map((character) => {
    return character.name;
  });
  console.log(names);

  const eyeColorR2D2 = await data.results.find((character) => {
    return character.name.startsWith("R2-D2");
  }).eye_color;
  console.log("eyeColorR2D2:", eyeColorR2D2);
}

fetchData();

/* async function fetchSomething() {
  const response = await fetch("/bad/url/oops");
  const something = await response.json();
  return something;
}
 */
