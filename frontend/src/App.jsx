/*import { Route,Routes } from "react-router";
import NoteDetailPage from "./pages/NoteDetailPage";
import CreatePage from "./pages/CreatePage";
import HomePage from "./pages/homepage";

const App=()=> {
  return ( 
 <div
  className="min-h-screen w-full px-5 py-24
  bg-black
  bg-[radial-gradient(120%_60%_at_50%_100%,#00ff9944_0%,transparent_70%)]"
>


    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/create" element={<CreatePage />} />
      <Route path="/note/:id" element={<NoteDetailPage />} />


    </Routes>
  </div>
  );

};

export default App;*/
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
import NoteDetailPage from "./pages/NoteDetailPage";

const App = () => {
  return (
    <div
  className="min-h-screen w-full px-5 py-24
  bg-black
  bg-[radial-gradient(120%_60%_at_50%_100%,#00ff9944_0%,transparent_70%)]"
>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/note/:id" element={<NoteDetailPage />} />
      </Routes>
    </div>
  );
};

export default App;
