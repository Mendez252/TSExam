import Button from "../components/Button/Button";
import "./style/NotFound.css";
import { useHistory } from "react-router-dom";

const NotFound = () => {
  const history = useHistory();

  const returnBack = () => {
    history.push("/login");
  };

  return (
    <div className="notfound_container">
      <div>
        <p className="number">404 </p>
        <p className="title"> Page not found</p>
      </div>
      <Button title="return" onClick={returnBack} flag="error" />
    </div>
  );
};

export default NotFound;
