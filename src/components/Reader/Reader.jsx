import { useState } from "react";
import css from "./Reader.module.css";

export default function Reader({ items }) {
  const [idx, setIdx] = useState(0);

  const hendlePrev = () => {
    setIdx(idx - 1);
  };
  const hendeleNext = () => {
    setIdx(idx + 1);
  };
//якщо заходить менше одного -, або більше 10
  
  const isFirst = idx === 0;
  const isLast = idx === items.length - 1; 
  //отримання поточного елементу
  const currentArticle = items[idx];
  //console.log(currentArticle);
  return (
    <div className={css.container}>
      <header className={css.header}>
        <h1>R</h1>
        <div>
          <button onClick={hendlePrev}>Prev</button>
          <button onClick={hendeleNext}>Next</button>
        </div>
        <p>
          {idx + 1}/{items.length}
        </p>
      </header>
      <article>
        <h2>{currentArticle.topic}</h2>
        <p>{currentArticle.text}</p>
      </article>
    </div>
  );
}
