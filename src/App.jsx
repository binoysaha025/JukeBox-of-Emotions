import "./App.css";
import {
  FormControl,
  InputGroup,
  Container,
  Button,
  Card,
  Row,
  Dropdown,
} from "react-bootstrap";
import { useState, useEffect } from "react";

const clientId = import.meta.env.VITE_CLIENT_ID;
const clientSecret = import.meta.env.VITE_CLIENT_SECRET;

function App() {
  const [selectedMood, setSelectedMood] = useState("");
  const [accessToken, setAccessToken] = useState("");
  const [albums, setAlbums] = useState([]);

  // Mood to search terms mapping
  const moodToSearch = {
    'happy': 'happy upbeat pop dance party feel good',
    'sad': 'sad melancholy acoustic indie folk emotional',
    'anxious': 'calm ambient chill relaxing peaceful meditation',
    'energetic': 'workout pump up rock electronic high energy',
    'romantic': 'love songs romantic R&B soul slow',
    'motivated': 'motivational inspiring hip hop rap confident',
    'nostalgic': 'nostalgic throwback 90s 2000s indie alternative'
  };

  const moodEmojis = {
    'happy': '😊',
    'sad': '😢', 
    'anxious': '😰',
    'energetic': '⚡',
    'romantic': '💕',
    'motivated': '💪',
    'nostalgic': '✨'
  };

  useEffect(() => {
    let authParams = {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body:
        "grant_type=client_credentials&client_id=" +
        clientId +
        "&client_secret=" +
        clientSecret,
    };

    fetch("https://accounts.spotify.com/api/token", authParams)
      .then((result) => result.json())
      .then((data) => {
        setAccessToken(data.access_token);
      });
  }, []);

  async function search() {
    if (!selectedMood) {
      alert("Please select how you're feeling!");
      return;
    }

    let searchParams = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + accessToken,
      },
    };

    // Search for albums based on mood keywords
    const searchQuery = moodToSearch[selectedMood];
    
    await fetch(
      "https://api.spotify.com/v1/search?q=" + encodeURIComponent(searchQuery) + "&type=album&market=US&limit=20",
      searchParams
    )
      .then((result) => result.json())
      .then((data) => {
        setAlbums(data.albums.items);
      })
      .catch((error) => {
        console.error('Error searching:', error);
      });
  }

  return (
    <>
      <Container style={{ marginTop: '20px' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '30px', color: '#1DB954' }}>
          🎵 How are you feeling today? 🎵
        </h2>
        
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
          <Dropdown>
            <Dropdown.Toggle 
              variant="success" 
              id="mood-dropdown"
              style={{
                backgroundColor: '#1DB954',
                borderColor: '#1DB954',
                fontSize: '18px',
                padding: '12px 20px',
                minWidth: '200px'
              }}
            >
              {selectedMood ? `${moodEmojis[selectedMood]} ${selectedMood.charAt(0).toUpperCase() + selectedMood.slice(1)}` : 'Select Your Mood'}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {Object.keys(moodToSearch).map((mood) => (
                <Dropdown.Item 
                  key={mood}
                  onClick={() => setSelectedMood(mood)}
                  style={{ fontSize: '16px' }}
                >
                  {moodEmojis[mood]} {mood.charAt(0).toUpperCase() + mood.slice(1)}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          
          <Button 
            onClick={search}
            style={{
              marginLeft: '15px',
              backgroundColor: '#1DB954',
              borderColor: '#1DB954',
              fontSize: '18px',
              padding: '12px 20px'
            }}
          >
            Find Albums
          </Button>
        </div>

        {selectedMood && (
          <p style={{ textAlign: 'center', fontSize: '16px', color: '#666' }}>
            Finding albums for when you're feeling <strong>{selectedMood}</strong>...
          </p>
        )}
      </Container>

      <Container>
        <Row
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-around",
            alignContent: "center",
          }}
        >
          {albums.map((album) => {
            return (
              <Card
                key={album.id}
                style={{
                  backgroundColor: "white",
                  margin: "10px",
                  borderRadius: "5px",
                  marginBottom: "30px",
                }}
              >
                <Card.Img
                  width={200}
                  src={album.images[0]?.url}
                  style={{
                    borderRadius: "4%",
                  }}
                />
                <Card.Body>
                  <Card.Title
                    style={{
                      whiteSpace: "wrap",
                      fontWeight: "bold",
                      maxWidth: "200px",
                      fontSize: "18px",
                      marginTop: "10px",
                      color: "black",
                    }}
                  >
                    {album.name}
                  </Card.Title>
                  <Card.Text
                    style={{
                      color: "black",
                    }}
                  >
                    Artist: {album.artists[0]?.name}<br />
                    Release Date: {album.release_date}
                  </Card.Text>
                  <Button
                    href={album.external_urls.spotify}
                    style={{
                      backgroundColor: "black",
                      color: "white",
                      fontWeight: "bold",
                      fontSize: "15px",
                      borderRadius: "5px",
                      padding: "10px",
                    }}
                  >
                    Album Link
                  </Button>
                </Card.Body>
              </Card>
            );
          })}
        </Row>
      </Container>
    </>
  );
}

export default App;