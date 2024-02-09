import React, { Fragment, useContext } from 'react';
import PostCard from './PostCard';
import postOne from '../../assets/postOne.jpg'
import postProfile from '../../assets/postProfile.jpg';


// import { postData } from '../../datas/posts';
import { PostContext } from '../../store/ImagePopupContext';

const ListPost = () => {
    const { posts } = useContext(PostContext)
    return (
        <div className='w-full flex flex-col gap-4 '>

            {posts.map((post, i) => (<Fragment key={post.name + i}>

                <PostCard {...post} />
            </Fragment>))}

        </div>
    );
}

export default ListPost;
