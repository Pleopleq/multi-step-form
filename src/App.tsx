import FieldInput from "./components/atoms/FieldInput";

function App() {
  return (
    <div className='App'>
      <FieldInput
        label='Name'
        labelFor='Name'
        placeholder='John Doe'
        required></FieldInput>
    </div>
  );
}

export default App;
