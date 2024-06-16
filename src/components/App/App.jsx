import AppBar from "../AppBar/AppBar";
import OfficerProfile from "../OfficerProfile/Officerprofile";
import officers from "../../components/officers.json";
//console.log(officers);

//const firstPilot = {
 // id: 1,
 // name: "Jacob Mercer",
  //rank: "Commander",
  //age: 42,
 // spec: "Fighter Pilot",
  //skills: ["Combat Maneuvers", "Navigation", "Strategic Planning"],
  //status: "Active",
//};
//const secondPilot = {
  //id: 2,
  //name: "Adrian Cross",
  //rank: "Lieutenant",
  //age: 35,
  //spec: "Reconnaissance",
  //skills: ["Stealth Operations", "Surveillance", "Data Analysis"],
  //status: "Active",
//};
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
      <ul>
        {officers.map((officer) => <li key={officer.id}>
          <OfficerProfile officer={officer}/>
        </li>)}
      </ul>
    </div>
  );
}
