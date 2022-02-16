import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import HeartHealth from "../Components/HeartHealth";

const Details = () => {
  const URL = process.env.REACT_APP_API_URL;
  const [snacks, setSnacks] = useState([]);
  const params = useParams();
  const navi = useNavigate();

  useEffect(() => {
    axios
      .get(`${URL}/snacks/${params.id}`)
      .then((response) => setSnacks(response.data.payload))
      .catch((error) => console.warn(error));
  }, [URL, params.id]);

  const handleDelete = () => {
    axios.delete(`${URL}/snacks/${params.id}`).then(
      () => {
        navi("/snacks");
      },
      (error) => console.warn(error)
    );
  };
  return (
    <article className="details">
      <aside>{HeartHealth(snacks.is_healthy)}</aside>
      <h2>Nutritional Facts</h2>
      <div>Protein: {snacks.protein}</div>
      <div>Fiber: {snacks.fiber}</div>
      <div>Added Sugar: {snacks.added_sugar}</div>
      <div>
        <img src={`${snacks.image}`} alt={snacks.name} />
      </div>

      <Link to={`/snacks/${params.id}/edit`}>
        <button>Edit</button>
      </Link>
      <Link to={`/snacks`}>
        <button>Back</button>
      </Link>
      <button onClick={handleDelete}>Delete</button>
    </article>
  );
};

export default Details;