import { useParams, useHistory } from "react-router-dom";
import useFetch from "../customize/fetch";
import "./Blog.scss";

const DetailBlog = () => {
  let { id } = useParams();
  let history = useHistory();
  const {
    data: dataDetailBlog,
    isLoading,
    isError,
  } = useFetch(`https://jsonplaceholder.typicode.com/posts/${id}`, false);
  const handleBackData = () => {
    history.push("/blog");
  };
  console.log("check useParams:", useParams());
  return (
    <div>
      <div>
        <span onClick={handleBackData}>&lt;-- Back </span>
      </div>
      <div className="blog-detail">
        {dataDetailBlog && (
          <>
            <div className="title">
              Blog ID: {id} ---{" "}
              {isLoading === true ? "Loading data ..." : dataDetailBlog.title}
            </div>
            <div className="content">{dataDetailBlog.body}</div>
          </>
        )}
      </div>
    </div>
  );
};
export default DetailBlog;
