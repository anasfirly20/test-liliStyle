import { useParams } from "react-router-dom";

export default function CartById() {
  const { id } = useParams();

  return (
    <div>
      <h1>BY ID: {id}</h1>
    </div>
  );
}
