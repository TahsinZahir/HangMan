import { Link } from "react-router-dom";
function StartGame(){
    return(
    <div>
        <h1>Start Game</h1>
        <Link to='/play' className="text-blue-600 underline hover:text-blue-700"> Play Game </Link>
    </div>
    );
    }
    export default StartGame;