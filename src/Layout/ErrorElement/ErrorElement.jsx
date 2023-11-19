import { Link } from "react-router-dom";

const ErrorElement = () => {
  return (
    <div>
      <p className="text-6xl font-extrabold min-h-[50vh] text-center justify-center flex items-center">
        You have been CAUGHT
      </p>
      <Link className="flex justify-center items-center" to="/">
        <button className="btn uppercase hover:btn-success  btn-warning rounded-xl btn-wide">Home</button>
      </Link>
    </div>
  );
};

export default ErrorElement;
