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

  //отримання поточного елементу
  const currentArticle = items[idx];
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
