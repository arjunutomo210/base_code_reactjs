import React, { Component, Fragment } from 'react';
import { RestAPIGet } from '../../../../RestAPI'
import './DetailPost.css'

class DetailPost extends Component {
    state = {
        post: {
            title: '',
            body: ''
        }
    }
    componentDidMount() {
        let id = this.props.match.params.postId;

        RestAPIGet(id).then((result) => {
            let post = result;

            this.setState({
                post: {
                    title: post.title,
                    body: post.body
                }
            })
        })
    }


    render() {
        // console.log(this.props);
        return (
            <div className="p-detail-post">
                <p className="detail-title">{this.state.post.title}</p>
                <p className="detail-body">{this.state.post.body}</p>
            </div>
        )

    }
}

export default DetailPost;