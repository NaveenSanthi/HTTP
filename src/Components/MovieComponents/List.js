import "./List.css";
function List(props) {
  return (
    <div className="list">
      <h3>{props.title}</h3>
      <p>{props.des}</p>
    </div>
  );
}
export default List;
