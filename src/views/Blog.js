import useFetch from "../customize/fetch";
import "./Blog.scss";
import { Link, useHistory } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";
import AddNew from "./AddNew";

const Blog = () => {
  const [newData, setNewData] = useState([]);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  let history = useHistory();
  const {
    data: dataBlog,
    isLoading,
    isError,
  } = useFetch(`https://jsonplaceholder.typicode.com/posts`, false);
  useEffect(() => {
    if (dataBlog && dataBlog.length > 0) {
      let data = dataBlog.slice(0, 9);
      setNewData(data);
    }
  }, [dataBlog]);
  const addNewBlog = (blog) => {
    let data = newData;
    data.unshift(blog);
    setShow(false);
    setNewData(data);
    // console.log("check data", data);
  };
  const deletePost = (id) => {
    let data = newData;
    data = data.filter((item) => item.id !== id);
    setNewData(data);
  };

  // const handleShowNew = () => {
  //   history.push("/add-blog");
  // };
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        + Add New Post
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Add New</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddNew addNewBlog={addNewBlog} />
        </Modal.Body>
      </Modal>

      <h2>BLog</h2>
      {/* <button variant="primary" className="my-3" onClick={handleShowNew}>
        + Add new blog
      </button> */}
      <div className="blogs-container">
        {isLoading === false &&
          newData &&
          newData.length > 0 &&
          newData.map((item) => {
            return (
              <div className="single-blog" key={item.id}>
                <div className="title">
                  <span>{item.title} </span>
                  <span onClick={() => deletePost(item.id)}>X</span>
                </div>
                <div className="content">{item.body}</div>
                <button>
                  <Link to={`/blog/${item.id}`}>View detail</Link>
                </button>
              </div>
            );
          })}

        {isLoading === true && (
          <div style={{ textAlign: "center !important", width: "100%" }}>
            Loading data...
          </div>
        )}
      </div>
    </>
  );
};

export default Blog;
