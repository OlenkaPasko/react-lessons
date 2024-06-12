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

export default function App() {
  return (
    <div>
      <AppBar />
      <OfficerProfile />
    </div>
  );
}
