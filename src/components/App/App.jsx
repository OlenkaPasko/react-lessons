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
export default function App() {
  return (
    <div>
      <AppBar />
      <OfficerProfile officer={firstPilot} />
      <OfficerProfile officer={secondPilot} />
    </div>
  );
}
