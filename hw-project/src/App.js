import logo from './logo.svg';
import './App.css';

function App() {
  // State to hold user input
  const [userInput, setUserInput] = useState('');
  const [submittedInput, setSubmittedInput] = useState('');

  // Function to handle input change
  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent page refresh
    setSubmittedInput(userInput); // Update the submitted input state
    setUserInput(''); // Clear the input field
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>User Input Form</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={userInput}
            onChange={handleInputChange}
            placeholder="Type something..."
            className="input-field"
          />
          <button type="submit" className="submit-button">Submit</button>
        </form>
        {submittedInput && (
          <div className="output">
            <p>You entered: {submittedInput}</p>
          </div>
        )}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
