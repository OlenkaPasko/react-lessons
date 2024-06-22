import { useEffect } from "react";
//монтування, розмонтування,монтування
export default function Timer() {
  useEffect(() => {
    console.log("Mount useEffect");
    setInterval(() => {}, 1000);
    const intervalId = setInterval(() => {
      console.log(Date.now());
    }, 1000);
      //функція очищення, для ремувЕдвенліснерів,деаніціалізації бібліотек,
    return function cleanup() {
        console.log("cleanup");
        clearInterval(intervalId);
    };
  }, []);

  return <div>Timer</div>;
}
