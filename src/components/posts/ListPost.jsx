import React, { Fragment } from 'react';
import PostCard from './PostCard';
import { postData } from '../../datas/posts';

const ListPost = () => {
    return (
        <div className='w-full flex flex-col gap-4 '>

            {postData.map((post, i) => (<Fragment  key={post.name + i}>

                <PostCard {...post} />
            </Fragment>))}

        </div>
    );
}

export default ListPost;
