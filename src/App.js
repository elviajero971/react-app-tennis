import { useState, useEffect } from 'react';

function App() {

  const [tennisPlayer, setTennisPlayer] = useState([]);

  useEffect(() => {
    getTennisPlayers()
  }, []);

  const getTennisPlayers = async () => {
    const response = await fetch('https://rails-tennis-api.herokuapp.com/tennis_players/index');
    setTennisPlayer(await response.json())
  }
  return (
    <div className="App">
      <div>There is the list of players</div>
      <ul>
        {
          tennisPlayer.map(
            (data) => {
              return(
                <li key={data.id}>{data.first_name}</li>
              )
            }
          )
        }

      </ul>
    </div>
  );
}
export default App;