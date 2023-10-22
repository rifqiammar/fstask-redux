import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addPost } from "../../actions/postAction";
import { useNavigate } from "react-router-dom";

const PostContent = () => {
  const [UserId, setUserId] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [StautsPosting, setPostingStatus] = useState("");

  const dispatche = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatche(addPost({ title, content, StautsPosting }));
    navigate("/");
  };

  return (
    <>
      <div className="container mt-5">
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="mb-3">
            <label for="title" className="form-label float-start">
              <h5>Title</h5>
            </label>
            <input type="hidden" id="custId" name="UserId" onChange={() => setUserId()} />
            <input type="text" className="form-control" id="title" onChange={(event) => setTitle(event.target.value)} name="title" />
            <div id="emailHelp" className="form-text"></div>
          </div>
          <div className="mb-3">
            <label for="content" className="form-label float-start">
              <h5>Postingan</h5>
            </label>
            <input type="text" className="form-control input-lg" style={{ height: "15rem" }} id="content" onChange={(event) => setContent(event.target.value)} name="content" />
          </div>
          <div class="mb-3 form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1" onChange={(event) => setPostingStatus(1)} />
            <label class="form-check-label" for="exampleCheck1">
              Post Status
            </label>
          </div>

          <button type="submit" className="btn btn-success btn-lg float-end">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default PostContent;
