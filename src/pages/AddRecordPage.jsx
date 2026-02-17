import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddRecordPage() {

  const navigate = useNavigate();

  // aquí definimos los estados para cada uno de los campos del formulario que vamos a crear para añadir un nuevo lanzamiento (record)

  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [year, setYear] = useState("");
  const [genre, setGenre] = useState("");
  const [cover, setCover] = useState("");

  const handleSubmit = (e) => { // aqui hacemos un event listener para que cuando se haga submit, se ejecute la función handleSubmit
    e.preventDefault();

    const newRecord = { // creamos un objeto con los datos del nuevo lanzamiento que vamos a enviar a la API para que lo guarde en la base de datos
      title: title,
      artist: artist,
      year: year,
      genre: genre
    };

    axios.post("http://localhost:5005/releases", newRecord) // hacemos la petición a la API para que lo guarde en la base de datos
      .then(() => {
        navigate("/releases");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h1>Add Record</h1> {/* aqui creamos un formulario con los campos necesarios para añadir un nuevo lanzamiento (record) y un botón para enviar el formulario */}

      <form onSubmit={handleSubmit}> {/* hacemos un form con un event listener para que cuando se haga submit, se ejecute la función handleSubmit*/}
        <div>
          <label>Title:</label>   {/* aqui creamos un input para cada uno de los campos del formulario, y le damos un value que es el estado correspondiente a cada campo, y un onChange para que cuando se escriba en el input, se actualice el estado correspondiente */}
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div>
          <label>Artist:</label>
          <input
            type="text"
            value={artist}
            onChange={(e) => setArtist(e.target.value)}
          />
        </div>

        <div>
          <label>Year:</label>
          <input
            type="number"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          />
        </div>

        <div>
          <label>Genre:</label>
          <input
            type="text"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
          />
        </div>

        <div>
          <label>Cover:</label>
          <input
            type="text"
            value={cover}
            onChange={(e) => setCover(e.target.value)}
          />
        </div>

        

        <button type="submit">Add Record</button>
      </form>
    </div>
  );
}

export default AddRecordPage;
