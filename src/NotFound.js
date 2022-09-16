import { Link } from "react-router-dom";
const NotFound = () => {
    return ( 
        <div className="not-foud">
            <h2>Sorry</h2>
            <p>That page Cannot be Found 404</p>
            <Link to="/">Back To Home Page...</Link>
        </div>
     );
}
 
export default NotFound;