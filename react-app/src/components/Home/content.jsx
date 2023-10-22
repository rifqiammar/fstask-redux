import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts } from "../../actions/postAction";

const Content = () => {
  const { getAllPostsResult, getAllPostsLoading, getAllPostsError } = useSelector((state) => state.PostsReducer);
  const allPost = getAllPostsResult.data;
  const dispatch = useDispatch();

  useEffect(() => {
    try {
      dispatch(getAllPosts());
      console.log(getAllPostsResult);
    } catch (error) {
      console.log(error.message);
    }
  }, [dispatch]);

  return (
    <>
      {getAllPostsResult && allPost ? (
        allPost.map((post) => {
          return (
            <div key={post.id} className="container mt-5 ">
              <div className="row">
                <div className="col">
                  <div className="card" style={{ width: "18rem" }}>
                    <img
                      src="data:image/jpeg;base64,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"
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">{post.title}</h5>
                      <p className="card-text">{post.content}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })
      ) : getAllPostsLoading ? (
        <p></p>
      ) : (
        <h3 className="mt-5 ms-5">{getAllPostsError ? getAllPostsError : "Data Kosong Atau Refresh Halaman Sekali Lagi"}</h3>
      )}
    </>
  );
};

export default Content;
