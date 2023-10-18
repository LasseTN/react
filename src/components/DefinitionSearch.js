import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function DefinitionSearch() {
 {
    const [word, setWord] = useState('');
    const navigate = useNavigate();


    return (
        <form 
        className="flex space-between space-x-2 max-w-[300px]"
        onSubmit={() => { // form Enables the Enter key to submit form search
            navigate('/dictionary/' + word);
        }}>
            <input 
            className=" shrink  px-2 py-1 rounded"
            placeholder="Dinosauer"
                type="text" 
                onChange={(e) => {
                setWord(e.target.value);
                }} 
            />
            <button className="block mx-auto m-2 bg-purple-600 hover:bg-purple-700 text-white font-bold px-2 py-1 rounded"> Search</button>
        </form>
    );
}
}