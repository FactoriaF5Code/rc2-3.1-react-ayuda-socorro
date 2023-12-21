
import './App.css';
import datos from './data/data.json';
const URL_POSTER = "https://image.tmdb.org/t/p/original";

function App() {

  return (
    <div>
      <div className='container'>
        {
          datos.results.map(movie => {

            let posterUrl = URL_POSTER + movie.poster_path
            return <div class="card">
              <img src={posterUrl} alt="caratula de la peli" />
              <p>{movie.title}</p>
            </div>
          }
          )
        }
      </div>
    </div>
  );
}

export default App
