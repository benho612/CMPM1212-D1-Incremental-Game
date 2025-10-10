let counter: number = 0;

// Create basic HTML structure
document.body.innerHTML = `
  <h1>CMPM 121 Project</h1>
  <p>Counter: <span id="counter">0</span></p>
  <button id="increment">Click Me!</button>
`;

// Add click handler
const button = document.getElementById("increment")!;
const counterElement = document.getElementById("counter")!;

button.addEventListener("click", () => {
  counter += 1;

  counterElement.textContent = counter.toString();
  console.log("I have these thingies:", button, counterElement, counter);
});

setInterval(() => {
  counter += 1;
  counterElement.textContent = counter.toString();
  console.log("Auto increment:", counter);
}, 1000);
