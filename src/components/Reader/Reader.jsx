import css from "./Reader.module.css"

export default function Reader() {
  return (
    <div>
          <header className={css.header}>
        <div>
          <button>Prev</button>
          <button>Next</button>
        </div>
        <p>3/10</p>
      </header>
      <article>
        <h2>Topic</h2>
        <p>Text</p>
      </article>
    </div>
  );
}
