import React from 'react';

// using a functional component to build a list

const PostList = ({posts}) => {
    console.log(posts)
    if(posts) {
        return posts.map(post => {
            return(
                <div className="item" key={post._id}>
                    <div className="content">
                        {post.title}
                    </div>
                    <div className="description">
                        {post.content}
                    </div>
                </div>
            );
        })
    }
    else {
        return <div></div>;
    }
}

export default PostList;