import React, { useCallback, useState } from "react";
import ReactDOM from "react-dom/client";
import './index.css';
import App from './App';
// import StarRating from "./StarRating";

// function Test() {
//   const [movieRating,setMovieRating] = useState(0);
//   const [movieTempRating,setMovieTempRating] = useState(0);
//   return (
//     <div>
//       <StarRating color="blue" size={36} maxRating={5} onSetRating={setMovieRating} onSetTempRating={setMovieTempRating}/>
//       <p>This movie was rated {movieTempRating?movieTempRating:movieRating} stars</p>
//     </div>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating
      maxRating={5}
      messages={[`Terriable`, `Bad`, `Okay`, `Good`, `Amazing`]}
    />
    <StarRating
      color="red"
      size={32}
      maxRating={10}
      className="test"
      defaultRating={3}
    /> */}
    {/* <Test /> */}
  </React.StrictMode>
);
