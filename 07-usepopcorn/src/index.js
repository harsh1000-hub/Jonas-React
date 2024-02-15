import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import StarRating from "./StarRating";
import App from "./App";

// function Test() {
//   // create a state
//   const [movieRating, setMovieRating] = useState(0);
//   return (
//     <div>
//       <StarRating color="blue" onSetRating={setMovieRating} maxRating={10} />
//       <p>This movie was rated {movieRating} stars</p>
//     </div>
//   );
// }
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <StarRating
      maxRating={5}
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
    />
    <StarRating maxRating={5} color="red" className="test" defaultRating={3} />
    <Test /> */}
    <App />
  </React.StrictMode>
);
