import { useRef, useEffect } from "react";
function Counter({ min = 1, cnt: current, max, onChange }) {
  let inp = useRef();

  function applyCurrent(num) {
    let validNum = Math.max(min, Math.min(max, num));


    onChange(validNum);
  }
  let incr = () => applyCurrent(current + 1);
  let descr = () => applyCurrent(current - 1);
  function onKeyPress(e) {
    if (e.charCode === 13) {
      parseCurrentStr(e);
    }
  }
  function parseCurrentStr(e) {
    let num = parseInt(e.target.value);
    applyCurrent(isNaN(num) ? min : num);
  }

  useEffect(() => {
    inp.current.value = current;
  }, [current]);

  return (
    <div>
      <button onClick={incr}>+</button>
      <input
        ref={inp}
        defaultValue={current}
        onBlur={parseCurrentStr}
        onKeyPress={onKeyPress}
        type="text"
      />
      <button onClick={descr}>-</button>
    </div>
  );
}
export default Counter;

//   let inp = useRef();
//   function applyCurrent(num) {
//     let validNum = Math.max(min, Math.min(max, num));
//     inp.current.value = validNum;
//     console.log(validNum);
//     onChange(validNum);
//   }
//   let incr = () => applyCurrent(cnt + 1);
//   let descr = () => applyCurrent(cnt - 1);
//   useEffect(() => {
//     inp.current.value = cnt;
//   }, [cnt]);
