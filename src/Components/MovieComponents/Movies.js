import "./Movies.css";
import List from "./List";
function Movies(props) {
  const ListData = (
    <ul>
      {props.movies.map((itm) => {
        return <List title={itm.name} des={itm.describe} key={itm.id}></List>;
      })}
    </ul>
  );
  return <div>{ListData}</div>;
}
export default Movies;
