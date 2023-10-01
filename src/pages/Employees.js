import '../index.css';
import Employee from '../components/Employee';
import { useState } from 'react';
import { v4 as uuidv4} from 'uuid';
import AddEmployee from '../components/AddEmployee';
import EditEmployee from '../components/EditEmployee';
import Header from '../components/Header';


function Employees() {
  const [employees, setEmployees] = useState([
      {
        id: 1,
        name: "Bilbo", 
        role: "Developer", 
        img: "https://images.pexels.com/photos/2743754/pexels-photo-2743754.jpeg?auto=compress&cs=tinysrgb&w=1600" 
      },
      {
        id: 2,
        name: "Winther", 
        role: "Manager", 
        img: "https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg?auto=compress&cs=tinysrgb&w=1600" 
      },
      {
        id: 3,
        name: "Tim", 
        role: "Director of Eng.", 
        img: "https://images.pexels.com/photos/4556737/pexels-photo-4556737.jpeg?auto=compress&cs=tinysrgb&w=1600" 
      },
      {
        id: 4,
        name: "John", 
        role: "Software Engineer", 
        img: "https://images.pexels.com/photos/14697557/pexels-photo-14697557.jpeg?auto=compress&cs=tinysrgb&w=1600" 
      },
      {
        id: 5,
        name: "Lawrence", 
        role: "The DevOps Guy", 
        img: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1600" 
      },
      {
        id: 6,
        name: "Bobby", 
        role: "Senior", 
        img: "https://images.pexels.com/photos/2232981/pexels-photo-2232981.jpeg?auto=compress&cs=tinysrgb&w=1600" 
      },
    ]);

    function UpdateEmployee(id, newName, newRole) {
      const updatedEmployees = employees.map((employee) => {
        if (id == employee.id) {
          return {...employee, name: newName, role: newRole}
        }
        return employee;
      });
      setEmployees(updatedEmployees);
    }

    function newEmployee(name, role, img) {
      const newEmployee = {
        id: uuidv4(),
        name: name,
        role: role,
        img: img,
      }
      setEmployees([...employees, newEmployee])
    }

  const showEmployees = true;
  return (
      <div className="">
        {showEmployees ? (
              <>

                  <div className="flex flex-wrap justify-center">
                  {employees.map((employee) => {
                    const editEmployee = (            
                    <EditEmployee 
                        id={employee.id}
                        name={employee.name} 
                        role={employee.role} 
                        updateEmployee={UpdateEmployee} 
                    />
                  );
                      return (
                        <Employee 
                            key={employee.id}
                            id={employee.id}
                            name={employee.name} 
                            role={employee.role} 
                            img={employee.img} 
                            editEmployee={editEmployee}
                        />
                    );
                })}
                  </div>
                  <AddEmployee newEmployee={newEmployee} />
              </>
          ) : (
              <p>You cannot see the employees</p>
          )}
      </div>
    );
}

export default Employees;
