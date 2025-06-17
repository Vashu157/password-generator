import React, { useEffect, useState } from "react";
import { generatePassword } from '../util/password';

import {useNavigate} from 'react-router-dom'

const PassGenerator = () => {
    const navigate = useNavigate();
  const [selected, setSelected] = useState({
    alphabet: 0,
    numeric: 0,
    chars: 0,
  });

  const [length, setLength] = useState(8);
  const [pass, setPass] = useState('');
  const [passValid,setPassValid] = useState(false);
  useEffect(() => {
  setPassValid(false);
}, [selected, length]);
  const toggleOptions = (option) => {
    setSelected((prev) => ({
      ...prev,
      [option]: prev[option] === 1 ? 0 : 1,
    }));
  };

  const handleClick = () => {
    const password = generatePassword(selected, length);
    setPass(password);
    if(password.length > 0) setPassValid(true);
  };
const handleCopy = () => {
  if (!passValid || !pass) {
    alert("Please generate a valid password first.");
    return;
  }
  navigator.clipboard.writeText(pass);
  alert("Password copied to clipboard!");
};

  // optional: extract style logic
  const getStyle = (isSelected) => ({
    backgroundColor: isSelected ? 'blue' : 'lightgray',
    color: isSelected ? 'white' : 'black',
    border: '1px solid gray',
    padding: '6px 12px',
    margin: '4px',
    borderRadius: '4px',
    cursor: 'pointer'
  });

  return (
    <div>

      <h1>Click to generate</h1>
      <p>{pass}</p>

      <button onClick={handleClick}>Generate</button>
      <button onClick={handleCopy}>Copy</button>
      <p>Enter length of password</p>
      <input
        type="number"
        value={length}
        onChange={(e) => setLength(Number(e.target.value))}
      />
      <h2>Choose what your passwords includes</h2>
      <div style={{ marginTop: '10px' }}>
        <button
          onClick={() => toggleOptions("alphabet")}
          style={getStyle(selected.alphabet)}
        >
          Alphabet
        </button>
        <button
          onClick={() => toggleOptions("numeric")}
          style={getStyle(selected.numeric)}
        >
          Numeric
        </button>
        <button
          onClick={() => toggleOptions("chars")}
          style={getStyle(selected.chars)}
        >
          Special Chars
        </button>
      </div>
      <button onClick={() => navigate('/')}>back to home</button>
    </div>
  );
};

export default PassGenerator;
