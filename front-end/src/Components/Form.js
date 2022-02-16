import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const Form = (isEdit = false) => {
  let navi = useNavigate();
  const URL = process.env.REACT_APP_API_URL;
  let params = useParams();
  const id = params.id ? params.id : null;
  const [snack, setSnack] = useState({
    name: "",
    fiber: "",
    protein: "",
    added_sugar: "",
    is_healthy: false,
    image: "",
  });
  useEffect(() => {
    if (isEdit.isEdit) {
      axios.get(`${URL}/snacks/${id}`).then((response) => {
        setSnack(response.data.payload);
      });
    }
  }, [URL, id, isEdit, snack]);

  let handleChange = (evt) => {
    if (evt.target.id === "is_healthy") {
      setSnack({...snack, is_healthy: !snack.is_healthy});
    } else {
      setSnack({...snack, [evt.target.id]: evt.target.value});
    }
  };

  /* put request & post request */
  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (isEdit.isEdit) {
      axios
        .put(`${URL}/snacks/${id}`, snack)
        .then(() => {
          navi(`/snacks`);
        })
        .catch((error) => console.warn(error));
    } else {
      axios
        .post(`${URL}/snacks/`, snack)
        .then(() => {
          navi("/snacks");
        })
        .catch((error) => console.warn(error));
    }
  };

  return (
    <>
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        required
        id="name"
        name="name"
        type="text"
        defaultValue={snack.name}
        onChange={handleChange}
        placeholder="name"
      />
      <label htmlFor="fiber">Fiber:</label>
      <input
        id="fiber"
        name="fiber"
        type="number"
        defaultValue={snack.fiber}
        onChange={handleChange}
        placeholder="fiber"
      />
      <label htmlFor="protein">Protein:</label>
      <input
        id="protein"
        name="protein"
        type="number"
        defaultValue={snack.protein}
        onChange={handleChange}
        placeholder="protein"
      />
      <label htmlFor="added_sugar">Added Sugars:</label>
      <input
        id="added_sugar"
        name="added_sugar"
        type="number"
        defaultValue={snack.added_sugar}
        onChange={handleChange}
        placeholder="added_sugar"
      />
      <label htmlFor="is_healthy">Is it Healthy:</label>
      <input
        id="is_healthy"
        name="is_healthy"
        type="checkbox"
        defaultValue={snack.is_healthy}
        onChange={handleChange}
        placeholder="is_healthy"
      />
      <label htmlFor="image">Image:</label>
      <input
        id="image"
        name="image"
        type="text"
        defaultValue={snack.image}
        onChange={handleChange}
        placeholder="image"
      />
      <button handleSubmit={handleSubmit}>Submit</button>
    </form>
    </>
  );
};

export default Form; 