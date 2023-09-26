import './App.css';
import Employee from './components/Employee';
import { useState } from 'react';

function App() {
  const [role, setRole] = useState('dev');
  const showEmployees = true;
  return (
      <div className="App">
        {showEmployees ? (
              <>
                <input 
                    type='text'
                    onChange={(e) => {
                        console.log(e.target.value);
                        setRole(e.target.value);
                    }}
                  />
                  <Employee name="Lasse" role="Intern" />
                  <Employee name="Kim" role={role} />
                  <Employee name="Jakob"/>
                  <Employee name="Simon"/>
              </>
          ) : (
              <p>You cannot see the employees</p>
          )}
      </div>
    );
}

export default App;
