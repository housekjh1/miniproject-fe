import { Link } from "react-router-dom";

const Test2 = () => {

    return (
        <div>
            <h1>Test2 Page</h1>
            <Link to={'/'}>Home</Link>&nbsp;&nbsp;&nbsp;
            <Link to={'/test1'}>Test1</Link>&nbsp;&nbsp;&nbsp;
        </div>
    );
}

export default Test2
