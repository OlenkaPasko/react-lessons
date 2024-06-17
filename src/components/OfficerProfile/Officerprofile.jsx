//глибока деструктр.
//для кожного map key обов'язково
import css from "./OfficerProfile.module.css"

export default function OfficerProfile({
  officer: { name, rank, age, spec, status, skills },
}) {
  //console.log(props);
  return (
    <div className={css.container}>
      <p className={css.text}>Name:{name}</p>
      <p className={css.text}>Rank:{rank}</p>
      <p className={css.text}>Age:{age}</p>
      <p className={css.text}>Spec:{spec}</p>
      <p className={css.text}>Status:{status === "Active" ? "Is active" : "Is retaired"}</p>
      <ul>
        {skills.map((skill,index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}
