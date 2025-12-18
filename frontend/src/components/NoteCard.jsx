import { Link } from "react-router";

const NoteCard = ({ note }) => {
  return (
    <Link
      to={`/note/${note.id}`}
      className="card bg-base-100 shadow-md hover:shadow-lg transition-shadow duration-200 *:border-t-4 border-solid border-[#00FF9D]"
    >
      <div className="card-body">
        <h3 className="card-title">{note.title}</h3>
      </div>
    </Link>
  );
};
export default NoteCard;
