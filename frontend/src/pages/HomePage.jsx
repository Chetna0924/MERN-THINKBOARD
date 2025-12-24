import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import RateLimitedUI from "../components/RateLimitedUI";
import NoteCard from "../components/NoteCard";
import api from "../lib/axios";
import toast from "react-hot-toast";

const HomePage = () => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isRateLimited, setIsRateLimited] = useState(false);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const res = await api.get("/api/notes");
        setNotes(res.data);
        setIsRateLimited(false);
      } catch (error) {
        if (error.response?.status === 429) {
          setIsRateLimited(true);
        } else {
          toast.error("Failed to load notes");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchNotes();
  }, []);

  /*return (
    <div className="min-h-screen">
      <Navbar />

      {isRateLimited ? (
        <RateLimitedUI />
      ) : (
        <div className="max-w-7xl mx-auto p-4 mt-6">
          {loading && (
            <div className="text-center text-primary py-10">
              Loading notes...
            </div>
          )}

          {!loading && notes.length === 0 && (
            <div className="text-center text-gray-500 py-10">
              No notes found
            </div>
          )}

          {!loading && notes.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {notes.map((note) => (
                <NoteCard
                  key={note._id}
                  note={note}
                  setNotes={setNotes}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );*/
  return(
    <div className="min-h-screen">
      <navbar />
      {isRateLimited && <RateLimitedUI />}
      <div className="max-w-7xl mx-autp p-4 mt-6">
        { loading && <div className="text-center text-primary py-10"> loading notes...</div>}
        {notes.length > 0 && !isRateLimited && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {notes.map(note=>(
              <NoteCard Key={note._id} note={note}/>
         ))}
        
      </div>
     )}
    </div>
    </div>
  );
};
export default HomePage;
