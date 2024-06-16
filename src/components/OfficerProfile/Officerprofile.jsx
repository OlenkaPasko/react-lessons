//глибока деструктр.
//для кожного map key обов'язково
export default function OfficerProfile({
  officer: { name, rank, age, spec, status, skills },
}) {
  //console.log(props);
  return (
    <div>
      <p>Name:{name}</p>
      <p>Rank:{rank}</p>
      <p>Age:{age}</p>
      <p>Spec:{spec}</p>
      <p>Status:{status === "Active" ? "Is active" : "Is retaired"}</p>
      <ul>
        {skills.map((skill,index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}
