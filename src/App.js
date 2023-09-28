import './index.css';
import Employee from './components/Employee';
import { useState } from 'react';
import { v4 as uuidv4} from 'uuid';

function App() {
  const [role, setRole] = useState('dev');
  const [employees, setEmployees] = useState([
      {
        name: "Bilbo", 
        role: "Developer", 
        img: "https://images.pexels.com/photos/2743754/pexels-photo-2743754.jpeg?auto=compress&cs=tinysrgb&w=1600" 
      },
      {
        name: "Winther", 
        role: "Manager", 
        img: "https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg?auto=compress&cs=tinysrgb&w=1600" 
      },
      {
        name: "Tim", 
        role: "Director of Eng.", 
        img: "https://images.pexels.com/photos/4556737/pexels-photo-4556737.jpeg?auto=compress&cs=tinysrgb&w=1600" 
      },
      {
        name: "John", 
        role: "Software Engineer", 
        img: "https://images.pexels.com/photos/14697557/pexels-photo-14697557.jpeg?auto=compress&cs=tinysrgb&w=1600" 
      },
      {
        name: "Lawrence", 
        role: "The DevOps Guy", 
        img: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1600" 
      },
      {
        name: "Bobby", 
        role: "Senior", 
        img: "https://images.pexels.com/photos/2232981/pexels-photo-2232981.jpeg?auto=compress&cs=tinysrgb&w=1600" 
      },
    ]
  )
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
                  <div className="flex flex-wrap justify-center">
                  {employees.map((employee) => {
                    console.log(uuidv4());
                      return (
                      <Employee 
                          key={uuidv4()}
                          name={employee.name} 
                          role={employee.role} 
                          img={employee.img} 
                      />
                  );
                  })}
                  </div>
              </>
          ) : (
              <p>You cannot see the employees</p>
          )}
      </div>
    );
}

export default App;
