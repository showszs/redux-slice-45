import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { incrementAsync, decrementAsync } from "../redux/slices/counterSilce";
import "./index.css";

function Counter() {
  const count = useSelector((state: { counter: any }) => state.counter.count);
  const dispatch = useDispatch();
  return (
    <div className="container">
      <div className="counter">
        <h1 className="counter__title">{count}</h1>
        <div className="counter__button">
          <button onClick={() => dispatch(incrementAsync())}>+</button>
          <button onClick={() => dispatch(decrementAsync())}>-</button>
        </div>
      </div>
    </div>
  );
}
export default Counter;
