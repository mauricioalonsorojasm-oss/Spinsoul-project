import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function HomePage() {
    const [artists, setArtists] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5005/artists')
            .then(response => {
                setArtists(response.data);
            })
            .catch(error => {
                console.error('Error fetching artists:', error);
            });
    }, []);

    return (
        <div className="home-page">
            
            <section className="hero">
            <h1>Discover the Sound of the World</h1>

            <div className="filters">
                <select>
                    <option value="">Select Genre</option>
                    <option value="rock">Rock</option>
                    <option value="pop">Pop</option>
                    <option value="hiphop">Hip-Hop</option>
                    <option value="jazz">Jazz</option>
                </select>

                <select>
                    <option value="">Select Country</option>
                    <option value="usa">USA</option>
                    <option value="uk">UK</option>
                    <option value="france">France</option>
                    <option value="germany">Germany</option>
                    <option value="japan">Japan</option>
                    <option value="italy">Italy</option>
                    <option value="spain">Spain</option>
                    <option value="chile">Chile</option>
                    <option value="venezuela">Venezuela</option>
                    <option value="colombia">Colombia</option>
                    <option value="argentina">Argentina</option>
                    <option value="brazil">Brazil</option>
                    <option value="mexico">Mexico</option>
                     </select>

                    <button className="search-button">Explore Artist</button>


               
            </div>
            </section>

            <section className="trending">
                <h2>🔥 Trending Now </h2>
            </section>


        </div>

        
    )
}

export default HomePage;