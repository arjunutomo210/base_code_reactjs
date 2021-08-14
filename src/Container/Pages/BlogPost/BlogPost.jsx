import React, { Component, Fragment } from "react";
import "./BlogPost.css";

import Post from "../../../Component/Post/Post";
import { RestAPIGet } from "../../../RestAPI";
import { RestAPIPost } from "../../../RestAPI";
import { RestAPIPut } from "../../../RestAPI";
import { RestAPIDelete } from "../../../RestAPI";
import CircularProgress from "@material-ui/core/CircularProgress";

class BlogPost extends Component {
  state = {
    post: [],
    formBlogPost: {
      id: 1,
      title: "",
      body: "",
      userId: 1,
    },
    isUpdate: false,
    isloading: true,
  };

  getPostAPI() {
    RestAPIGet("?_sort=id&_order=desc").then(
      (result) => {
        console.info(result);
        this.setState({
          post: result,
          isloading: false,
        });
      },
      (err) => {
        console.log("error: ", err);
      }
    );
  }
  handleRemove = (data) => {
    this.body = {};
    RestAPIDelete(data, this.body).then(
      (result) => {
        console.info(result);
        this.getPostAPI();
      },
      (err) => {
        console.log("error: ", err);
      }
    );
  };

  handleFormChange = (event) => {
    let timestamp = new Date().getTime();
    let formBlogPostNew = { ...this.state.formBlogPost };
    if (!this.state.isUpdate) {
      formBlogPostNew["id"] = timestamp;
    }
    formBlogPostNew[event.target.name] = event.target.value;
    this.setState({
      formBlogPost: formBlogPostNew,
    });
  };

  handleSubmit = () => {
    if (this.state.isUpdate) {
      this.putDataAPI();
    } else {
      this.postDataApi();
    }
  };
  postDataApi = () => {
    this.body = {
      id: this.state.formBlogPost.id,
      title: this.state.formBlogPost.title,
      body: this.state.formBlogPost.body,
      userId: 1,
    };
    RestAPIPost("", this.body).then(
      (result) => {
        this.getPostAPI();
        this.setState({
          formBlogPost: {
            id: 1,
            title: "",
            body: "",
            userId: 1,
          },
        });
      },
      (err) => {
        console.log("error: ", err);
      }
    );
  };
  handleUpdate = (data) => {
    this.setState({
      formBlogPost: data,
      isUpdate: true,
    });
  };
  putDataAPI = () => {
    this.body = {
      id: this.state.formBlogPost.id,
      title: this.state.formBlogPost.title,
      body: this.state.formBlogPost.body,
      userId: 1,
    };
    RestAPIPut(this.state.formBlogPost.id, this.body).then(
      (result) => {
        this.getPostAPI();
        this.setState({
          formBlogPost: {
            id: 1,
            title: "",
            body: "",
            userId: 1,
          },
          isUpdate: false,
        });
      },
      (err) => {
        console.log("error: ", err);
      }
    );
  };

  handleDetail = (id) => {
    this.props.history.push(`/detail-post/${id}`);
  };

  componentDidMount() {
    this.getPostAPI();
  }

  render() {
    return (
      <Fragment>
        <p>Halaman BlogPost</p>
        <hr />
        <p className="section-title">Blog Post</p>
        <div className="form-add-post">
          <label htmlFor="title"></label>
          <input type="text" name="title" value={this.state.formBlogPost.title} onChange={this.handleFormChange} placeholder="add your title" />
          <label htmlFor="body">Blog Content</label>
          <textarea name="body" id="body" cols="30" rows="10" value={this.state.formBlogPost.body} onChange={this.handleFormChange} placeholder="add blog content"></textarea>
          <button className="button btn-submit" onClick={this.handleSubmit}>
            Simpan
          </button>
        </div>
        <div>
          {this.state.isloading ? (
            <CircularProgress />
          ) : (
            this.state.post.map((post) => {
              return <Post key={post.id} data={post} remove={this.handleRemove} update={this.handleUpdate} goDetail={this.handleDetail} />;
            })
          )}
        </div>
      </Fragment>
    );
  }
}

export default BlogPost;
