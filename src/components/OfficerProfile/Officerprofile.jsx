
//глибока деструктр.
export default function OfficerProfile({ officer:{name,rank,age,spec,status} }) {
  //console.log(props);
  return (
    <div>
      <p>Name:Jacob Mercer{name}</p>
      <p>Rank:Commander{rank}</p>
      <p>Age:{age}</p>
      <p>Spec:Fighter Pilot{spec}</p>
      <p>Status:Active{status}</p>
    </div>
  );
}