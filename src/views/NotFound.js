import { useHistory } from "react-router-dom";
const NotFound = () => {
  let history = useHistory();
  const goHome = () => {
    history.push("/");
  };
  return (
    <>
      <h2>404 ! Oops...</h2>
      <p>Unfortunately this page does not exist.</p>
      <button className="btn btn-warning" onClick={() => goHome()}>
        Go to Home
      </button>
    </>
  );
};

export default NotFound;
