import { useState } from "react";

function MovieSelector({ movies, onSelect }) {
  const [selectedMovie, setSelectedMovie] = useState("");

    const handleChange = (e) => {
    setSelectedMovie(e.target.value);
    onSelect(e.target.value);
  };

    return (
     <div className="p-4 bg-white rounded shadow space-y-2 max-w-md mx-auto">
      <h2 className="text-xl font-semibold mb-2">เลือกหนังที่คุณชอบ *</h2>
      <form>
        {movies.map((movie, idx) => (
          <label
            key={idx}
            className="flex items-center gap-2 border p-2 rounded hover:bg-gray-50 cursor-pointer"
          >
            <input
              type="radio"
              name="movie"
              value={movie.title}
              checked={selectedMovie === movie.title}
              onChange={handleChange}
              className="accent-blue-500"
            />
            <span>
              <strong>{movie.title}</strong> ({movie.year}) - {movie.director}
            </span>
          </label>
        ))}
      </form>
    </div>
  );
}
export default MovieSelector ;