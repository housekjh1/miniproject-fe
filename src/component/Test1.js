import { Link } from "react-router-dom";

const Test1 = () => {

    return (
        <div>
            <h1>Test1 Page</h1>
            <Link to={'/'}>Home</Link>&nbsp;&nbsp;&nbsp;
            <Link to={'/test2'}>Test2</Link>&nbsp;&nbsp;&nbsp;
        </div>
    );
}

export default Test1
