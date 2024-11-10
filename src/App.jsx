import TextInputFormContainer from "./components/TextInputForm/TextInputFormContainer";

function App(){
return (
<div>
  <h1 className="font-semibold text-3xl">Welcome to Hangman</h1>
  <TextInputFormContainer onSubmit={(value)=>console.log("Value comming from hidden form is ",value)}/>
</div>
);
}
export default App;