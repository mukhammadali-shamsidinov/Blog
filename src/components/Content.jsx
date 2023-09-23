import React, { useContext } from "react";
import Card from "./Card";
import { Context } from "../App";

function Content() {
  const { posts } = useContext(Context);
  function smallestToBiggest(a, b) {
    return b.created_time - a.created_time;
  }
  
  return (
    <div className="mt-5">
      <div className="row">
        {posts.length > 0 ? posts.sort(smallestToBiggest).map((doc) => <Card items={doc} key={doc.id} />) : <p>Loading...</p>}
      </div>
    </div>
  );
}

export default Content;
