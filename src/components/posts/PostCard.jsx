import React, { Fragment, useContext, useEffect, useState } from 'react';
import postProfile from '../../assets/postProfile.jpg';

import collectionOne from '../../assets/collectionOne.jpg';
import collectionTwo from '../../assets/collectionTwo.jpg';
import collectionThree from '../../assets/collectionThree.jpg'
import { ImagePopUpContext, PostContext } from '../../store/ImagePopupContext';

const PostCard = (props) => {
    const { addComment } = useContext(PostContext)
    const { popupPost, setPopUpPost } = useContext(ImagePopUpContext);

    const [like, setLikes] = useState(false);
    const [commented, setCommented] = useState(false);
    const [typedComment, setTypedComment] = useState('')
    // Function to handle liking the post
    const handleLike = () => {
        setLikes(!like); // Toggle like state
    };

    // Function to handle commenting on the post
    const handleComment = () => {
        setCommented(!commented); // Toggle comment state
    };
    const handlePostComment = () => {
        if (typedComment) {
            addComment(props.id, typedComment)
            setTypedComment('')
        }
    }
    useEffect(() => {
        console.log(props)
    }, [props])
    return (
        <div className='w-full shadow-special p-8 flex flex-col gap-4'>
            {/* Header */}
            <div className="w-full min-h-[4rem] flex justify-between">
                <div className="flex gap-4 items-center">
                    <div className="w-[70px] aspect-square rounded-full border border-[#C08C5D] bg-white p-1">
                        <img src={postProfile} className='w-full rounded-full' alt="" />
                    </div>
                    <div className="grid h-min gap-[-5px]">
                        <p className='font-[500] text-[24px] mb-[-10px]'>{props.user}</p>
                        <p className='font-[400] text-[14px] text-[#444444]'> 2 Days ago</p>
                    </div>
                </div>
                <div className=" flex items-center">
                    <button className=' border-red-900 border-[1px] px-[15px] py-[7px] rounded-[5px] '>REPORT</button>
                </div>
            </div>
            {/* Body with image */}
            <div className="w-full aspect-[2] flex flex-col gap-2" onClick={() => setPopUpPost(props.id)}>
                <p className='font-[400] text-[24px] text-[#5b5b5b] '>{props.description} </p>
                <div className="overflow-hidden w-full aspect-[2] flex items-center rounded-md">
                    <img src={props.image} className='w-full aspect-auto  animate-show-div' alt="" />
                </div>
            </div>
            {/* Like part */}
            <div className="w-full py-4 flex items-center justify-between gap-4">
                <div className="flex  items-center">
                    <div className="rounded-full h-[50px] aspect-square border overflow-hidden border-[#C08C5D] bg-white flex items-center justify-center">
                        <img src={collectionOne} className='h-full aspect-square' alt="" />
                    </div>
                    <div className="rounded-full -ms-[25px] h-[50px] aspect-square border overflow-hidden border-[#C08C5D] bg-white flex items-center justify-center">
                        <img src={collectionTwo} className='h-full aspect-square' alt="" />
                    </div>
                    <div className="rounded-full  -ms-[25px] h-[50px] aspect-square border overflow-hidden border-[#C08C5D] bg-white flex items-center justify-center">
                        <img src={collectionThree} className='w-full aspect-square' alt="" />
                    </div>
                    <p className='text-[18px] text-[#00000085] ms-4 font-[400]' >Liked by You and Srutheesh</p>
                </div>
                <p className='text-[18px] text-[#00000085] ms-4 font-[400]' >3 Comments</p>
            </div>
            {/* Like and comment button */}
            <div className="w-full grid grid-cols-2 gap-4">
                <button className={`font-[400] text-[25px] text-center py-[1.2rem] border border-[#CF796C] text-[#CF796C] rounded-[45px] ${like ? 'bg-[#CF796C] text-white' : ''}`} onClick={handleLike}>Likes</button>
                <button className={`font-[400] text-[25px] text-center py-[1.2rem] border border-[#CF796C] text-[#CF796C] rounded-[45px]   ${commented ? 'bg-[#CF796C] text-white' : ''}`} onClick={handleComment}>Comments</button>
            </div>
            {/* Comments section */}
            {commented && props.comments.length > 0 && <div className="p-8 rounded-[45px] flex flex-col gap-4 bg-[#e1e1e13b]">
                {commented && props.comments?.map((comment, index) => (<Fragment key={comment.name + comment.message + index}>
                    { <div className="w-full">
                        <div className="flex items-center gap-1">
                            <div className="w-[53px] aspect-square rounded-full overflow-hidden">
                                <img src={comment.image} className='w-full' alt="" />
                            </div>
                            <p className='font-[500] text-[22px]'>{comment.user} <span className='font-[400] text-[14px]'>1 Week ago</span> </p>
                        </div>
                        <div className="flex w-full ">
                            <div className="max-w-[54px] flex-1 flex flex-col items-center">
                            </div>
                            <div className="flex-1 w-full">
                                <div className="flex-1 w-full bg-[#ecc8ae4a] p-[1.7rem] px-[2rem] rounded-[30px] rounded-tl-none ">
                                    <p>{comment.message}</p>
                                </div>
                                {comment.reply.map((reply, index) => (
                                    <div className="w-full pt-4" key={index}>
                                        <div className="flex items-center gap-1">
                                            <div className="w-[53px] aspect-square rounded-full overflow-hidden">
                                                <img src={reply.image} className='w-full' alt="" />
                                            </div>
                                            <p className='font-[500] text-[22px]'>{reply.user} <span className='font-[400] text-[14px]'>1 Week ago</span> </p>
                                        </div>
                                        <div className="flex w-full ">
                                            <div className="max-w-[54px] flex-1 flex flex-col items-center">
                                            </div>
                                            <div className="flex-1 w-full">
                                                <div className="flex-1 w-full bg-[#ecc8ae4a] p-[1.7rem] px-[2rem] rounded-[30px] rounded-tl-none ">
                                                    <p>{comment.message}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>}
                </Fragment>))}
            </div>}
            {commented && <div className="w-full">
                <div className="bg-[#ecc8ae4a] w-full h-[70px] flex rounded-full pe-2 items-center">
                    <div className="h-[70px] aspect-square rounded-full border border-[#C08C5D] bg-white p-1">
                        <img src={postProfile} className='w-full rounded-full' alt="" />
                    </div>
                    <input type="text"
                    value={typedComment}
                        onChange={(e) => {
                            setTypedComment(e.target.value)
                        }}
                        className='flex-1 caret-black p-4 bg-transparent outline-none  text-[1.1rem] font-[400]' placeholder='Write a Comment... ' />
                    <button className='p-2' onClick={handlePostComment}>send</button>
                </div>
            </div>}
        </div>

    );
};

export default PostCard;
