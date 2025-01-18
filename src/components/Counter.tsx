import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { increment, decrement } from "../redux/counterSilce"
import "./counter.css";

function Counter() {
  const count = useSelector((state:{counter: any}) => state.counter.count);
  const dispatch = useDispatch();
  return (
    <div className="container">
      <div className="counter">
        <h1 className="counter__title">{count}</h1>
    <div className="counter__button">
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
    </div>
      </div>
    </div>
  );
}
export default Counter;
