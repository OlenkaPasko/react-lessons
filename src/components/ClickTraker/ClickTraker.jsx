import { useState, useEffect } from "react";

export default function ClickTraker() {
  const [clicks, setClicks] = useState(0);
  const [date, setDate] = useState(Date.now());

  useEffect(() => {
    console.log("effect");
    //,[] масив залежностей,який передається завжди. Першим передається колбекФункція
    //коли використовується ефект,і другим масив залежностей.Якщо передали пустий масив[]
    //він спрацює тільки на монтування компонента
  }, []);
  useEffect(() => {
    console.log("Number of clicks:", clicks);
  }, [clicks]);
  //всі залежності ефекта мають бути в масиві залежностей [clicks] олин раз пусті дужки[] для монтування, потім дужки заповнюються еффектами[clicks]ті які потрібно при будь якій кількості
  return (
    <div>
      <button onClick={() => setClicks(clicks + 1)}>Clicls:{clicks}</button>
      <button onClick={() => setClicks(0)}>Reset</button>
      <button onClick={() => setDate(Date.now())}>Date:{date}</button>
    </div>
  );
}
//[] запит на бекенд,ще до того як користувач виконав дію,сабмітну форму тощо, ми можемо зробити запит на бекенд,або по факту запустити код.
//заходимо на сторінку і робимо запит за найпопулярнішими фільмами useEffect