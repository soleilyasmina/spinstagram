import { useState } from "react";
import "./App.css";

function App() {
  const [caption, setCaption] = useState("");
  const [author, setAuthor] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {

  }

  return (
    <div className="App">
      <form>
        <label htmlFor="caption">Caption:</label>
        <input
          type="text"
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
        />
        <label htmlFor="author">Author:</label>
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <label htmlFor="image">Image:</label>
        <input
          type="file"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <button type="submit">Submit!</button>
      </form>
    </div>
  );
}

export default App;
