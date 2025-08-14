import { useState } from "react";


export  function UserForm({ onSubmit }) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [errors, setErrors] = useState({});

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newError = {};

        if (!name.trim()) 
            newError.name = "กรุณากรอกชื่อ  ";
        
        else if (!email.trim()) 
            newError.email = "กรุณากรอกอีเมล ";
        
        else if (!validateEmail(email)) 
            newError.email = "รูปแบบอีเมลไม่ถูกต้อง";

        setErrors(newError);

        if (Object.keys(newError).length === 0) {
            onSubmit({ name, email });
            setName("");
            setEmail("");
        }
    };

return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 bg-white rounded shadow-md space-y-4">
      <div>
        <label className="block font-semibold mb-1">Name: </label>
        <input 
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full border border-gray-300 rounded px-3 py-2"
        placeholder="Please enter your name"
        />
        {errors.name && <p className="error">{errors.name}</p>}
      </div>


      <div>
        <label className="block font-semibold mb-1">Email: </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border border-gray-300 rounded px-3 py-2"
          placeholder="example@email.com"
        />
        {errors.email && <p className="error">{errors.email}</p>}
      </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white rounded px-4 py-2 rounded hover:bg-blue-600"
        >
          Submit
        </button>
    </form>
  );
}