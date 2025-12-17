import { Route,Routes } from "react-router";
import NoteDetailPage from "./pages/NoteDetailPage";
import HomePage from "./pages/homepage";
import CreatePage from "./pages/CreatePage";

const App=()=> {
  return ( 
  <div data-theme="forest" className="min-h-screen bg-base-200 text-base-content p-8">

    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/create" element={<CreatePage />} />
      <Route path="/note/:id" element={<NoteDetailPage />} />


    </Routes>
  </div>
  );

};

export default App;