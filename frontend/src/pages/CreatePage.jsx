import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const CreatePage = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading ,setLoading] = useState(false);

  const handleSubmit = ()=>{}


    return (
      <div className="min-h-screen flex justify-center px-4">

        <div className="container mx-auto px-4 py-8">
          <div className="max-w-2xl mx-auto">
            <Link to ={"/"} className="btn btn-ghost mb-6" > 
            <ArrowLeft className = "size-5" />
            back to nNotes
            </Link>
            <div className="card bg-base-100 w-full max-w-xl mt-20">
              <div className="card-body">
                <h2 className="card-title text-2xl mb-4">create New Notes</h2>
                <form onSubmit={handleSubmit}>
                  <div className="form-control mb-4">
                    <label className="label">
                      <span className="label-text">

                      </span>
                    </label>
                    <input type="text"
                    placeholder="Note Title"
                    className="input input-bordered"
                    value={title}
                    onChange={(e)=>setTitle(e.target.value)}/>
                  </div>


                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  };
  
  export default CreatePage;