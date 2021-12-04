{
  /* <div class="card-text joke">Loading..</div>
 <a href="#" class="btn btn-primary jokebtn">Browse Next</a>
                    */
}

//using promises
// const jokes = document.querySelector(".joke");
// const jokebtn = document.querySelector(".jokebtn");
// const generatejokes = () => {
//   const setHeader = {
//     object, headers is a key value
//     headers: {
//       Accept: "application/json", //value is another key-value
//     },
//   };
//res is a variable, we were getting result of fetch in html, so in order to get it in json, we converted it as res.json
//   fetch("https://icanhazdadjoke.com/", setHeader)
//     .then((res) => res.json())
//     .then((data) => {
//       jokes.innerHTML = data.joke;
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };
// jokebtn.addEventListener("click", generatejokes);
// generatejokes();

//!using async/await
const jokes = document.querySelector(".joke");
const jokebtn = document.querySelector(".jokebtn");
const generatejokes = async () => {
  try {
    const setHeader = {
      headers: {
        Accept: "application/json",
      },
    };
    const res = await fetch("https://icanhazdadjoke.com/", setHeader);
    const data = await res.json();
    jokes.innerHTML = data.joke;
  } catch (error) {
    console.log(`${error}`);
  }
};
jokebtn.addEventListener("click", generatejokes);
generatejokes();
