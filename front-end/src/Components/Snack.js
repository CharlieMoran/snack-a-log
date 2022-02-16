import { Link } from "react-router-dom";
import HeartHealth from "./HeartHealth";

function Snack({ snack }) {
  return (
    <div className="Snack">
      <Link to={`/snacks/${snack.id}`}>
        <div>
          <img src={snack.image} alt=""/>
        </div>
        <h4>
          {HeartHealth(snack.is_healthy)}
          {snack.name}
        </h4>
      </Link>
    </div>
  );
}

export default Snack; 