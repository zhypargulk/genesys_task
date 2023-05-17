import { useState, useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";

const ProfilePage = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  const pageParam = location.search.split("=")[1];

  useEffect(() => {
    const fetchCharacter = async () => {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/${id}`
      );
      const data = await response.json();
      setCharacter(data);
    };
    fetchCharacter();
  }, [id]);

  return (
    <div className="profile">
      <div className="header2">
      <div className="profile"><h1>Profile page</h1> </div>
      </div>
   
      {character ? (
        <div className="profile__description">
          <img src={character.image} alt={character.name} />
          <div>
            <h2>{character.name}</h2>
            <p><b>Species:</b> {character.species}</p>
            <p><b>Status: </b> {character.status}</p>
            <p><b>Gender:</b>  {character.gender}</p>
            <p><b>Origin:</b>  {character.origin.name}</p>
            <p><b>Location:</b>  {character.location.name}</p>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
        <button onClick={() => navigate(`/?page=${pageParam}`)} class="custom-btn btn-1">Back</button>
    </div>
  );
};

export default ProfilePage;
