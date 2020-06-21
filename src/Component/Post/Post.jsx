import React from 'react';

const Post = (props) => {
    return (
        <div className="post">
            <div className="img-tumb">
                <img src="http://placeimg.com/200/150/tech" alt="dummy" />
            </div>
            <div className="content">
                <p className="title" onClick={() => props.goDetail(props.data.id)}>{props.data.title}</p>
                <p className="desc">{props.data.body}</p>
                <button className="buttonproduct update" onClick={() =>props.update(props.data)}>Update</button>
                <button className="buttonproduct remove" onClick={() =>props.remove(props.data.id)}>Remove</button>

            </div>
        </div>
    )
}

export default Post;