import { useEffect, useState } from "react";
//import Progress from "../Progress/Progress";
import css from "./Reader.module.css";
const getInitialIdx = () => {
  const savedIdx = localStorage.getItem("artcl-idx");
  if (savedIdx !== null) {
    return JSON.parse(savedIdx);
  }
  return 0;
};

export default function Reader({ items }) {
  const [idx, setIdx] = useState(getInitialIdx);

  const hendlePrev = () => {
    setIdx(idx - 1);
  };
  const hendeleNext = () => {
    setIdx(idx + 1);
  };
  //функція ініціалізатор стану useEffect
  useEffect(() => {
    localStorage.setItem("artcl-idx", idx);
  }, [idx]);

  //якщо заходить менше одного -, або більше 10

  const isFirst = idx === 0;
  const isLast = idx === items.length - 1;
  //отримання поточного елементу
  const currentArticle = items[idx];
  //console.log(currentArticle);
  return (
    <div className={css.container}>
      <header className={css.header}>
        <div>
          <button onClick={hendlePrev} disabled={isFirst}>
            Prev
          </button>
          <button onClick={hendeleNext} disabled={isLast}>
            Next
          </button>
        </div>
        <Progress current={idx + 1} total={items.length} />
      </header>
      <article>
        <h2>{currentArticle.topic}</h2>
        <p>{currentArticle.text}</p>
      </article>
    </div>
  );
}
