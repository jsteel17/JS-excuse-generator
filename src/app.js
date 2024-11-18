window.onload = function() {
  let who = ["The dog ", "My grandma ", "The mailman ", "My bird "];
  let action = ["ate ", "peed ", "crushed ", "broke "];
  let what = ["my homework ", "my phone ", "the car "];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying",
  ];

  let whoChoice = Math.floor(Math.random() * who.length);
  let actionChoice = Math.floor(Math.random() * action.length);
  let whatChoice = Math.floor(Math.random() * what.length);
  let whenChoice = Math.floor(Math.random() * when.length);

  document.querySelector("#excuse").innerHTML =
    who[whoChoice] + action[actionChoice] + what[whatChoice] + when[whenChoice];
};
