import { useCallback, useState, useEffect,useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null)

  // logic to generate password
  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrst";
    if (numberAllowed) str += "0123456789";
    if (characterAllowed) str += "~`!@#$%^&(){}[]|.,";

    for (let i = 0; i < length; i++) {
      let num = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(num);
    }

    setPassword(pass);
  }, [length, numberAllowed, characterAllowed, setPassword]);

  //copied the password to clipboard
  const copyToClipboard = useCallback(()=>{
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,100)
    window.navigator.clipboard.writeText(password)
    alert("Password copied to clipboard (windows key + v)")
  } ,[password] )

  //called the password generate function on effect
  useEffect(() => {
    generatePassword();
  }, [length, numberAllowed, characterAllowed, generatePassword]);

  return (
    <>
      <div className="w-full h-screen flex justify-center items-center">
      <div className="w-full max-w-lg mx-auto shadow-lg rounded-lg p-9 my-8 bg-gray-800 text-orange-500 ">
        <h1 className="text-4xl text-center text-white">Password Generator</h1>
        <div className="flex shadow-2xl rounded-lg overflow-hidden mb-4 mt-2 ">
          <input
            className="outline-none w-full py-1 px-3"
            type="text"
            placeholder="Password"
            value={password}
            readOnly
            ref={passwordRef}
          />
          <button onClick={copyToClipboard} className="outline-none bg-blue-500 text-white px-3 py-2 hover:bg-blue-700 ">
            Copy
          </button>
        </div>
        <div className="flex gap-3 justify-around pt-6 ">
          <input
            type="range"
            min={8}
            max={100}
            className="cursor-pointer"
            value={length}
            onChange={(e) => {
              setLength(e.target.value);
            }}
          />
          <label>Length : {length}</label>

          <input
            type="checkbox"
            value={numberAllowed}
            onChange={() => {
              setNumberAllowed(!numberAllowed);
            }}
          />
          <label> Number </label>
          <input
            type="checkbox"
            value={characterAllowed}
            onChange={() => {
              setCharacterAllowed(!characterAllowed);
            }}
          />
          <label> Character </label>
        </div>
      </div>
      </div>
    </>
  );
}

export default App;
