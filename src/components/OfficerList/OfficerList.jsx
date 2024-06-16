import OfficerProfile from "../OfficerProfile/Officerprofile";

export default function OfficerList({ items }) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <OfficerProfile officer={items} />
        </li>
      ))}
    </ul>
  );
}
