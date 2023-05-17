import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const HomePage = () => {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const fetchCharacters = async (page) => {
    setLoading(true);
    const response = await fetch(
      `https://rickandmortyapi.com/api/character?page=${page}`
    );
    const data = await response.json();
    setCharacters(data.results);
    setTotalPages(data.info.pages);
    setLoading(false);
  };

  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1);
    navigate(`?page=${page + 1}`);
  };

  const handlePreviousPage = () => {
    setPage((prevPage) => prevPage - 1);
    navigate(`?page=${page - 1}`);
  };

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const pageParam = parseInt(searchParams.get("page"), 10);
    setPage(pageParam || 1);
  }, [location.search]);


  useEffect(() => {
    fetchCharacters(page);
  }, [page]);

  const filteredCharacters = characters.filter((character) =>
    character.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="header">
        <h1><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/800px-Rick_and_Morty.svg.png" alt="Rick and Morty" className="logo-img"></img></h1>
        <div>
          <input
            type="text"
            placeholder="Search by name"
            value={searchTerm}
            onChange={handleSearchTermChange}
          />
        </div>
      </div>
      <div className="maintable">
      <table>
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Name</th>
            <th>Species</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredCharacters.map((character) => (
            <tr key={character.id}>
              <td>
                <img src={character.image} alt={character.name} />
              </td>
              <td>  
                <div className="charname"> 
                <Link to={`/profile/${character.id}?page=${page}`}>
                  {character.name}
                </Link>     
                </div>    
              </td>
              <td>{character.species}</td>
              <td>{character.status}</td>
            </tr>
          ))}
          {filteredCharacters.length === 0 && (
            <tr>
              <td>No characters with this name</td>
            </tr>
          )}
        </tbody>
      </table>
      </div>
      {loading && <p>Loading...</p>}
      {!loading && (
        <div className="footer">
          <p>
            Page {page} of {totalPages}
          </p>
          <div>
            {page > 1 && (
              <button disabled={loading} onClick={handlePreviousPage} class="custom-btnprev btn-1">
                Previous Page
              </button>
            )}
            {page < totalPages && (
              <button disabled={loading} onClick={handleNextPage} class="custom-btnnext btn-1">
                Next Page
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;
