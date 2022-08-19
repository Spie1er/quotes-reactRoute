import { Link } from "react-router-dom";
import classes from "./NoQuotesFound.module.css";

const NoQuotesFound = (props) => {
  return (
    <div className={classes.noquotes}>
      <p>{`No ${props.text} Found`}</p>
      <Link className="btn" to="/add-quote">
        Add a Quote
      </Link>
    </div>
  );
};

export default NoQuotesFound;
