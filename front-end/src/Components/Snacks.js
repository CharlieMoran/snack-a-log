import axios from "axios";
import { useState, useEffect } from "react";
import Snack from "./Snack";

function Snacks() {
  const URL = process.env.REACT_APP_API_URL;
  const [snacks, setSnacks] = useState([]);

  useEffect(() => {
    axios
      .get(`${URL}/snacks`)
      .then((response) => setSnacks(response.data.payload))
      .catch((error) => console.warn(error));
  }, [URL]);

  return (
    <section className="Snacks">
      <article className="Snacks">
        {snacks.map((snack) => {
          return <Snack key={snack.id} snack={snack}/>
        })}
      </article>
    </section>
  );
}

export default Snacks; 