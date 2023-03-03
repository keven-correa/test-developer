import "./App.css";
import Map from "./components/GoogleMap";
import { Form } from "./components/Form";
import { useState } from "react";

export default function App(): JSX.Element {
  const [initialSpeed, setInitialSpeed] = useState(null);

  const setSpeed = (speed) => {
    setInitialSpeed(speed);
  };

  return (
    <div className="App">
      {/* <div className="Top"> */}
      {/* <img */}
      {/* src="https://cdn.worldvectorlogo.com/logos/google-maps-2020-icon.svg"
          alt="Img"
        /> */}
      <h1>Track vehicles</h1>
      {/* </div> */}
      {/* <div> */}
      <Form setSpeed={setSpeed} />
      {/* </div> */}
      {/* <br></br> */}
      <Map initialSpeed={initialSpeed} />
    </div>
  );
}
