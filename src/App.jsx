import { useState } from 'react'
import './App.css'
import {UserForm} from "./components/UserForm";
import  MovieSelector  from "./components/MovieSelector";


const movies = [
  { title: "Avatar", year: "2009", director: "James Cameron" },
  { title: "Inception", year: "2010", director: "Christopher Nolan" },
  { title: "Interstellar", year: "2014", director: "Christopher Nolan" },
  { title: "The Shawshank Redemption", year: "1994", director: "Frank Darabont" },
  { title: "Pulp Fiction", year: "1994", director: "Quentin Tarantino" },
  { title: "Parasite", year: "2019", director: "Bong Joon-ho" }
];

function App() {
  const [step, setStep] = useState(1); // 1 = UserForm, 2 = MovieSelector
  const [userData, setUserData] = useState(null);
  const [selectedMovie, setSelectedMovie] = useState("");

    // ฟังก์ชันเรียกจาก UserForm เมื่อ submit
  const handleUserSubmit = (data) => {
    setUserData(data);
    setStep(2); // ไปหน้า MovieSelector
  };

    // ฟังก์ชันเรียกจาก MovieSelector
  const handleMovieSelect = (movieTitle) => {
    setSelectedMovie(movieTitle);
  };

   const handleFinalSubmit = () => {
    if (!selectedMovie) {
      alert("กรุณาเลือกหนังที่คุณชอบ");
      return;
    }
    alert(`สวัสดี: ${userData.name} e-mail: ${userData.email} คุณเลือกหนัง: ${selectedMovie}`);
  };

return (
   <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      {step === 1 && <UserForm onSubmit={handleUserSubmit} />}
      {step === 2 && (
        <div className="space-y-4">
          <MovieSelector movies={movies} onSelect={handleMovieSelect} />
          <button
            onClick={handleFinalSubmit}
            className="w-full max-w-md bg-green-500 text-white py-2 rounded hover:bg-green-600"
          >
            ส่งข้อมูล
          </button>
        </div>
      )}
    </div>
  );
}

export default App
