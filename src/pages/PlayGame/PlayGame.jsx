import { Link } from "react-router-dom";
function PlayGame(){
return(
<div>
    <h1>Play Game</h1>
    <Link to='/start' className="text-blue-600 underline hover:text-blue-700"> Start Game </Link>
</div>
);
}
export default PlayGame;