//import { FaBeer } from "react-icons/fa";
//import AppBar from "../AppBar/AppBar";
//import officers from "../../components/officers.json";
//import OfficerList from "../OfficerList/OfficerList";
//import articles from "../../articles.json";
import css from "./App.module.css";
//import Reader from "../Reader/Reader.jsx";
import ClickTraker from "../ClickTraker/ClickTraker";
import { useState } from "react";
import Timer from "../Timer/Timer";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const togle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className={css.container}>
      <h1>Effects in React</h1>
      <button onClick={togle}>{isOpen ? "Unmont" : "Mount"}</button>
      {isOpen && <Timer/>}
      <ClickTraker/>
    </div>
  );

  {
    /*<Reader items={articles} />;*/
  }
}

//import css from "./App.module.css"
//import { FaMusic } from "react-icons/fa";

//json файл імпортувати тільки в App.jsx
//console.log(officers);

//const isModalOpen = true;
//export default function App() {
//return (
//якщо або - або, то використовується тернарний оператор //можна так робити або так
//коли колекція перебирається map,передається обов'язково ключ key,щоб ідетифікувати для реакту де цей елемент
//<div className={css.container}>
// <AppBar />
//<h1>
// React <FaBeer size={20} />
//</h1>
//<FaMusic className={css.myIcon} />
// {/*{isModalOpen ? <p>Modal is open</p> : <p>Model closed</p>}
// <p>{isModalOpen ? <p>Modal is open</p> : <p>Model closed</p>}</p>*/}
// {/* <AppBar /> */}
// {/* <OfficerProfile officer={firstPilot} /> */}
// {/* <OfficerProfile officer={secondPilot} /> */}
//<ul>
//  {[1, 2, 3].map((item, index) => (
//<li key={index}>{item}</li>
//  ))}
/// </ul>
// <OfficerList items={officers} />
//</div>
// );
//}
