import { useState, useEffect } from "react";

const initialData = [
  {
    id: 1,
    title: "React",
    creator: "Jordan Walke",
    content: "React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library that aims to make building user interfaces based on components more seamless. It is maintained by Meta (formerly Facebook) and a community of individual developers and companies. React can be used to develop single-page, mobile, or server-rendered applications with frameworks like Next.js and Remix. Because React is only concerned with the user interface and rendering components to the DOM, React applications often rely on libraries for routing and other client-side functionality. A key advantage of React is that it only re-renders those parts of the page that have changed, avoiding unnecessary re-rendering of unchanged DOM elements.",
    category: "Front End"
  },
  {
    id: 2,
    title: "Javascript",
    creator: "Brendan Eich",
    content: "JavaScript, often abbreviated as JS, is a programming language and core technology of the Web, alongside HTML and CSS. Ninety-nine percent of websites use JavaScript on the client side for webpage behavior. Web browsers have a dedicated JavaScript engine that executes the client code. These engines are also utilized in some servers and a variety of apps. The most popular runtime system for non-browser usage is Node.js. JavaScript is a high-level, often just-in-time compiled language that conforms to the ECMAScript standard.It has dynamic typing, prototype-based object-orientation, and first-class functions. It is multi-paradigm, supporting event-driven, functional, and imperative programming styles. It has application programming interfaces (APIs) for working with text, dates, regular expressions, standard data structures, and the Document Object Model (DOM).",
    category: "Front End"
  },
  {
    id: 3,
    title: "VueJS",
    creator: "Evan You",
    content: "Vue.js is an open-source model view view model front end JavaScript framework for building user interfaces and single-page applications. It was created by Evan You and is maintained by him and the rest of the active core team members.",
    category: "Front End"
  },
];


export default function App() {
  const [blogsList, setBlogsList] = useState(initialData);

  const [formData, setFormData] = useState({
    id: blogsList[blogsList.length - 1].id + 1,
    title: "",
    creator: "",
    content: "",
    category: "",
    published: false,
  });

  const handleFormField = (fieldName, value) => {
    setFormData((currentFormData) => ({
      ...currentFormData,
      [fieldName]: value,
    }));
  };

  const handleSubmit =
    (e) => {
      e.preventDefault();

      setBlogsList((currentBlogsList) => [...currentBlogsList, formData]);

      setFormData({
        title: "",
        creator: "",
        content: "",
        category: "",
        published: false,
      });
    };

  useEffect(() => {
    console.log("react rendering");
  }, [formData.available]);

  const deleteAll = () => {
    setBlogsList([]);
  };

  const handleDelete = (blogId) => {
    setBlogsList((currentState) =>
      currentState.filter((blog) => blog.id !== blogId)
    );
  };

  return (
    <>
      <div className="blog-title">
        <p className="title">Programming</p>
      </div>
      <div className="blog-index">
        <h2>blog posts.</h2>
        <ul>
          {blogsList.map((blog) => (
            <li key={blog.id}>
              <strong>{blog.title} - {blog.creator} </strong> ({blog.category}, {blog.published ? "published" : "unpublished"}) <button className="btn-1" onClick={() => handleDelete(blog.id)}>🗑️</button><br /> <i>{blog.content}</i></li>
          ))}
        </ul>
        <button className="btn-2 delete-all" onClick={deleteAll}>delete all</button>
        <div className="new-post">
          <p>new post  :</p>
          <form onSubmit={handleSubmit}>
            <div className="blog-basic-info">
              <input
                type="text"
                value={formData.title}
                onChange={(e) => handleFormField("title", e.target.value)}
                placeholder="title"
                required
              />
              <input
                type="text"
                value={formData.creator}
                onChange={(e) => handleFormField("creator", e.target.value)}
                placeholder="creator name"
                required
              />
              <select
                value={formData.category}
                onChange={(e) => handleFormField("category", e.target.value)}
                required
              >
                <option value="Choose one" hidden>Choose One</option>
                <option value="Front End">Front End</option>
                <option value="Back End">Back End</option>
                <option value="UX/UI">UX/UI</option>
              </select>
            </div>
            <textarea
              value={formData.content}
              onChange={(e) => handleFormField("content", e.target.value)}
              placeholder="post body"
              rows="10" cols="56"
            />
            <br />
            <div className="publish">
              <p>publish?</p>
              <input
                type="checkbox"
                checked={formData.published}
                onChange={(e) => handleFormField("published", e.target.checked)}
              />
            </div>
            <button className="btn-2 submit" type="submit">add post</button>
          </form>
        </div>
      </div>
    </>
  );
}