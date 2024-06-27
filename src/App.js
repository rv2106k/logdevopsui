import logo from './logo.svg';
import log from './log-devOps.svg';
import './App.scss';
import { useState } from 'react';

function App() {
  const [isHome, setIsHome] = useState(true);
  const [formData, setFormData] = useState({});
  const handleChange = (e) => {
    setFormData(formData => (
      {
        ...formData,
        [e.target?.name]: e.target?.value
      }
    ))
  }
  const handleSubmit = () =>
    fetch("http://localhost:9020/student/api/register", {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    })
      .then(() => {
        setIsHome(true);
      });

  const toggleHome = () => {
    setIsHome(isHome => !isHome)
  }
  const FIELDS = [
    {
      name: "name",
      label: "Name(First, Middle, Last)",
      required: true,
      type: "text"
    },
    {
      name: "age",
      label: "Age",
      required: false,
      type: "text"
    },
    {
      name: "address",
      label: "Address",
      required: false,
      type: "textarea",
    },
    {
      name: "city",
      label: "City",
      required: false,
      type: "text",
    },
    {
      name: "state",
      label: "State",
      required: false,
      type: "text",
    },
    {
      name: "pincode",
      label: "Zip/pincode",
      required: false,
      type: "text",
    },
    {
      name: "email",
      label: "Email",
      required: true,
      type: "text",
    },
    {
      name: "mobile",
      label: "Mobile",
      required: true,
      type: "text",
    },
    {
      name: "personRole",
      label: "What are you?",
      required: true,
      type: "text",
      placeholder: "Employee/ Student"
    },
    {
      name: "college",
      label: "Company/ College",
      required: true,
      type: "text",
    },
    {
      name: "designation",
      label: "Current Role",
      required: true,
      type: "text",
    },
    {
      name: "experience",
      label: "Experience",
      required: true,
      type: "text",
    }
  ]
  return (
    <div className="App">
      <header className="App-header">
        <img src={log} className="App-logo" alt="log-devOps" />
        {isHome ?
          <></> :
          <h2>Registration</h2>
        }
      </header>
      <div className='App-content'>
        {isHome ? <button className='App-content-btn' onClick={toggleHome}>Register Yourself</button> :
          <div style={{ width: "100%", height: "100%" }}>
            <form className='form' onSubmit={handleSubmit}>
              {FIELDS.map(e =>
                <div key={e.name} className='form-field'>
                  <label htmlFor={e.name}>
                    {e.label}{e.required ? "*" : ""}
                  </label>
                  {e.type === "text" ?
                    <input
                      type={e.type}
                      required={e.required}
                      name={e.name}
                      onChange={handleChange}
                    /> :
                    <textarea
                      required={e.required}
                      name={e.name}
                      onChange={handleChange}
                    />}
                </div>
              )}
              <button className='App-content-btn' style={{ gridColumn: "1 / 3", placeSelf: "center" }} type='submit'>Submit</button>
            </form>
          </div>}
      </div>
    </div>
  );
}

export default App;
