import { useState } from "react";
import "./App.scss";
import { comments } from "./constants/comments";
import { photos } from "./constants/photos";
import { posts } from "./constants/posts";
import { todos } from "./constants/todos";
import PaginatedTable from "./components/PaginatedTable";

function App() {
  const [data,setData] = useState(null);

  return (
    <div className="margin-center mt-25">
      <div className="center gap-1">
        <button onClick={()=>setData(comments)}>comments</button>
        <button onClick={()=>setData(photos)}>photos</button>
        <button onClick={()=>setData(posts)}>posts</button>
        <button onClick={()=>setData(todos)}>todos</button>
      </div>

      <PaginatedTable dataArray={data}/>
    </div>
  );
}

export default App;
