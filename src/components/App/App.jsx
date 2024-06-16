import AppBar from "../AppBar/AppBar";
import officers from "../../components/officers.json";
import OfficerList from "../OfficerList/OfficerList";

//json файл імпортувати тільки в App.jsx
//console.log(officers);

//const isModalOpen = true;
export default function App() {
  return (
    //якщо або - або, то використовується тернарний оператор //можна так робити або так
    //коли колекція перебирається map,передається обов'язково ключ key,щоб ідетифікувати для реакту де цей елемент
    <div>
      <AppBar/>
      {/*{isModalOpen ? <p>Modal is open</p> : <p>Model closed</p>}
      <p>{isModalOpen ? <p>Modal is open</p> : <p>Model closed</p>}</p>*/}
      {/* <AppBar /> */}
      {/* <OfficerProfile officer={firstPilot} /> */}
      {/* <OfficerProfile officer={secondPilot} /> */}
      <ul>
        {[1, 2, 3].map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <OfficerList items={officers} />
    </div>
  );
}
