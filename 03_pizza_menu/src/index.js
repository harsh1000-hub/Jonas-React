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
function App(props) {
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
  const pizzas = pizzaData;
  const pizzasLength = pizzas.length;

  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {/* below is the conditional rendering on the basis of is pizzasLength greater than 0 and we use with ternary operator */}
      {pizzasLength > 0 ? (
        // here we use react fragment bcz we need to render p and ul element
        <>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stone oven, all organic, all delicious.
          </p>
          <ul className="pizzas">
            {/* rendering the element from pizzaData array */}
            {pizzas.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} /> // we pass whole obj pizza to pizzaObj
              // <Pizza name={pizza.name} price={pizza.price} />  -? another wa to write just above line
            ))}
          </ul>
        </>
      ) : (
        <p>We're currently working on our menu. Please come back later :)</p>
      )}

      {/* <Pizza
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
      /> */}
    </main>
  );
}

// create Pizza component
function Pizza({ pizzaObj }) {
  // destructure the props above like {pizzaObj}

  //console.log(props);
  // if (pizzaObj.soldOut) return null; // here we apply conditional rendering with multiple return statements.
  // always keep whe you have to rendering specific jsx used ternary operator
  // and you want to render a whole component use like above if condition

  return (
    // here below in className = pizza give original color to all pizza image but if pizza is sold out so we need to color out that particular image using className = pizza sold-out

    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      {/* here we recieve the props */}
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        {/* below we conditional render the inner text of span element*/}
        {pizzaObj.soldOut ? (
          <span>SOLD OUT</span>
        ) : (
          <span>{pizzaObj.price}</span>
        )}
        {/* <span>{pizzaObj.soldOut?"SOLD OUT":{pizzaObj.price}}</span> */}{" "}
        {/*another way to conditionally render the text of any element*/}
      </div>
    </li>
  );
}

function Footer() {
  //  console.log(props); // give you empty object because is iteself ac a parent component for child component that is order

  // write some js logic
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  //console.log(isOpen);

  return (
    <footer className="footer">
      {/* below is the conditional rendering and also use with ternary operator*/}
      {isOpen ? (
        <Order closeHour={closeHour} openHour={openHour} />
      ) : (
        <p>
          We're happy to welcome you between {openHour}:00 and {closeHour}:00
        </p>
      )}
    </footer>
  );
  //   return React.createElement("footer", null, "We're currently open!");
}

// Order component
function Order({ closeHour, openHour }) {
  // destructure the props above {closeHour}
  return (
    <div className="order">
      <p>
        We're open from {openHour}:00 to {closeHour}:00. Come visit us or order
        online.
      </p>
      <button className="btn">Order</button>
    </div>
  );
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
