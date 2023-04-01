import React from 'react';
import Post from '../post/Post';
import { posts } from '../../data';

const Posts = () => {
    return (
        <div>
            {posts.map((post) => (
                <Post data={post} key={post.post_id} />
            ))}
        </div>
    );
};

export default Posts;
