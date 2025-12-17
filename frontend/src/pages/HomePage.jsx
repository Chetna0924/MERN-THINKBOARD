import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import RateLimitedUi from "../components/RateLimitedUi";
import axios from "axios";

const HomePage = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const res = await axios.get(
          "http://localhost:5001/api/notes"
        );
        setNotes(res.data);
        console.log(res.data);
      } catch (error) {
        console.log("error fetching notes");
      }
    };

    fetchNotes();
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <RateLimitedUi />
    </div>
  );
};

export default HomePage;
