// importing the react module to use them
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

// create our App component
function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

// header component
function Header() {
  //const style = { color: "red", fontSize: "40px", textTransform: "uppercase" };
  const style = {};
  return (
    <header className="header">
      <h1 style={style}>Fast React Pizza Co.</h1>
    </header>
  );
}

// menu component
function Menu() {
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <Pizza
        // here I pass the props to the component that is Step 1 to use the props
        name="Pizza Spinaci"
        ingredient="Tomato, mozarella, spinach, and ricotta cheese"
        photoName="pizzas/spinaci.jpg"
        price={10}
      />
      <Pizza
        // here I pass the props to the component that is Step 1 to use the props
        name="Pizza Funghi"
        ingredient="Tomato, mozarella, mushrooms, and onion"
        photoName="pizzas/funghi.jpg"
        price={12}
      />
    </main>
  );
}

// create Pizza component
function Pizza(props) {
  console.log(props);
  return (
    <div className="pizza">
      {/* here we recieve the props */}
      <img src={props.photoName} alt={props.name} />
      <div>
        <h3>{props.name}</h3>
        <p>{props.ingredient}</p>
        <span>{props.price + 3}</span>
      </div>
    </div>
  );
}

function Footer() {
  // write some js logic
  const hour = new Date().getHours();
  const openHour = 8;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  //console.log(isOpen);

  return (
    <footer className="footer">
      {new Date().toLocaleTimeString()} We're currently open!
    </footer>
  );
  //   return React.createElement("footer", null, "We're currently open!");
}

// creating out root
const root = ReactDOM.createRoot(document.getElementById("root"));
// console.log(root);
root.render(
  <React.StrictMode>
    {" "}
    {/* here strictmode help to your indentify the bugs in your component easily*/}
    <App />
  </React.StrictMode>
); // render App component
