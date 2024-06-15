import AppBar from "../AppBar/AppBar";
import OfficerProfile from "../OfficerProfile/Officerprofile";

const firstPilot = {
  id: 1,
  name: "Jacob Mercer",
  rank: "Commander",
  age: 42,
  spec: "Fighter Pilot",
  skills: ["Combat Maneuvers", "Navigation", "Strategic Planning"],
  status: "Active",
};
const secondPilot = {
  id: 2,
  name: "Adrian Cross",
  rank: "Lieutenant",
  age: 35,
  spec: "Reconnaissance",
  skills: ["Stealth Operations", "Surveillance", "Data Analysis"],
  status: "Active",
};
const isModalOpen = true;
export default function App() {
  return (
    //якщо або - або, то використовується тернарний оператор //можна так робити або так
    <div>
      {/*{isModalOpen ? <p>Modal is open</p> : <p>Model closed</p>}
      <p>{isModalOpen ? <p>Modal is open</p> : <p>Model closed</p>}</p>*/}
      {/* <AppBar /> */}
      {/* <OfficerProfile officer={firstPilot} /> */}
      {/* <OfficerProfile officer={secondPilot} /> */}
    </div>
  );
}
