import { useState } from "react";




export default function App() {
  const [blogTitle, setBlogTitle] = useState("");
  const [blogsList, setBlogsList] = useState(["React", "Javascript", "VueJS"]);

  const handleSubmit =
    (e) => {
      e.preventDefault();

      setBlogsList((currentState) => [...currentState, blogTitle]);
      {/*const newBlogsList = [...blogsList];
      newBlogsList.push(blogTitle);
      setBlogsList(newBlogsList);*/}
      {/* see 2.02 3 feb lesson*/ }
      setBlogTitle(""); {/*empty input*/ }
    };

  const deleteAll = () => {
    setBlogsList([]);
  };

  const handleDelete = (index) => {
    setBlogsList((currentState) =>
      currentState.filter((blog, blogIndex) => blogIndex !== index)
    );
  }; {/*see 2:20 Monday 3 Feb lecture*/ }

  return (
    <>
      <div className="blog-title">
        <p className="title">Programming</p>
      </div>
      <div className="blog-index">
        <h2>blog posts.</h2>
        <ul>
          {blogsList.map((blog, index) => (
            <li key={index}>{blog} <button className="btn-1" onClick={() => handleDelete(index)}>🗑️</button></li>
          ))}
        </ul>
        <div className="new-post">
          <p>new post  :</p>
          <form onSubmit={handleSubmit}>
            <input type="text" value={blogTitle} onChange={(e) => { setBlogTitle(e.target.value) }} placeholder="blog title"></input>
            <button className="btn-2" type="submit">add</button>
          </form>
        </div>
        <button className="btn-2" onClick={deleteAll}>delete all</button>
      </div>
    </>
  );
}