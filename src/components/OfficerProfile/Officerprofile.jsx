//глибока деструктр.
export default function OfficerProfile({
  officer: { name, rank, age, spec, status },
}) {
  //console.log(props);
  return (
    <div>
      <p>Name:{name}</p>
      <p>Rank:{rank}</p>
      <p>Age:{age}</p>
      <p>Spec:{spec}</p>
      <p>Status:{status === "Active" ? "Is active" : "Is retaired"}</p>
    </div>
  );
}
