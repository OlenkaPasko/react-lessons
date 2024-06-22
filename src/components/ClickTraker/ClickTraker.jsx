import { useState, useEffect } from "react";
//функція ініціалізатор стану. спочатку виконується getInitialClicks, потімuseState і все інше
const getInitialClicks = () => {
  const savedClicks = localStorage.getItem("num-of-clicks");
  return savedClicks !== null ? JSON.parse(savedClicks) : 0;
};

export default function ClickTraker() {
  //до const [clicks, setClicks] додали функцію до монтування компонента,спочатку поставили useState(0);, потім в останню чергу дописали нову функцію, для запам'ятовування чиселв локалсторидж.
  const [clicks, setClicks] = useState(getInitialClicks);
  const [date, setDate] = useState(Date.now());
  //JSON.stringify()якщо об'єкт чи масив обов'язково,тобто складний тип даних
  //за допомогою ефекту можна записувати будь які значення в локалсторидж
  useEffect(() => {
    localStorage.setItem("num-of-clicks", /*JSON.stringify()*/ clicks);
  }, [clicks]);

  useEffect(() => {
    console.log("effect");
    //,[] масив залежностей,який передається завжди. Першим передається колбекФункція
    //коли використовується ефект,і другим масив залежностей.Якщо передали пустий масив[]
    //він спрацює тільки на монтування компонента
  }, []);
  useEffect(() => {
    console.log("current date:", date);
    document.title = date;
  }, [date]);

  //useEffect(() => {
  //console.log("Number of clicks:", clicks);
  //}, [clicks]);
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
