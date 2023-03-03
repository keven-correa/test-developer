import { useRef } from "react";
import "./Form.css";

export const Form = (props) => {
  const { setSpeed } = props;
  const speed = useRef(null);
  return (
    <div className="form-container">
      <input
        ref={speed}
        type="number"
        className="speed"
        placeholder="Velocidad"
        // onChange={() => props.setSpeed(speed.current.value)}
      />
      <button onClick={() => setSpeed(speed.current.value)} className="submit">
        Submit
      </button>
    </div>
  );
};
