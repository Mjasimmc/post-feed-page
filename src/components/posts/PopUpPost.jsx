import React, { Fragment, useContext, useEffect, useRef, useState } from 'react';
import { ImagePopUpContext, PostContext } from '../../store/ImagePopupContext';
import postProfile from '../../assets/postProfile.jpg';

const PopUpPost = () => {
    const { addComment, getPostById, posts } = useContext(PostContext);
    const { popupPost, setPopUpPost } = useContext(ImagePopUpContext);
    const [postData, setPostData] = useState(null);
    const [typedComment, setTypedComment] = useState('');
    const commentsEndRef = useRef(null);

    useEffect(() => {
        if (popupPost) {
            const post = getPostById(popupPost);
            setPostData(post);

        }
    }, [posts, popupPost]);
    useEffect(() => {
        scrollToBottom();
    }, [postData])
    const scrollToBottom = () => {
        if (commentsEndRef.current) {
            commentsEndRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };

    const handlePostComment = () => {
        if (typedComment) {
            addComment(postData.id, typedComment);
            setTypedComment('');
            const post = getPostById(popupPost);
            setPostData(post);
            scrollToBottom();
        }
    };

    if (!popupPost || !postData) {
        return <></>;
    }

    return (
        <div className='fixed top-0 left-0 w-full h-full p-[2rem] py-[1.5rem] grid z-[99]'>
            <div className="bg-white overflow-auto scroll-hide shadow-special relative p-4">
                <div className="w-full grid xl:grid-cols-2 p-4">
                    <div className="2xl:h-[70vh] max-w-full">
                        <div className="static">
                            <div className="absolute right-0 top-0">
                                <button onClick={() => setPopUpPost(null)} className="aspect-square w-[3rem] bg-gray-600 rounded-bl-[1.4rem] text-white text-3xl p-1 ">
                                    x
                                </button>
                            </div>
                        </div>
                        <div className="flex items-center justify-center w-full h-full">
                            <div className="overflow-hidden max-md:min-w-full md:min-w-1/2 aspect-auto flex flex-col items-center justify-center rounded-md">
                                <img src={postData.image} className='min-h-full animate-show-div' alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="h-[70vh] max-w-full flex flex-col p-1 px-6 ">
                        <div className="w-full min-h-[4rem] flex justify-between">
                            <div className="flex gap-4 items-center">
                                <div className="w-[70px] aspect-square rounded-full border border-[#C08C5D] bg-white p-1">
                                    <img src={postProfile} className='w-full rounded-full' alt="" />
                                </div>
                                <div className="grid h-min gap-[-5px]">
                                    <p className='font-[500] text-[24px] mb-[-10px]'>{postData.user}</p>
                                    <p className='font-[400] text-[14px] text-[#444444]'> 2 Days ago</p>
                                </div>
                            </div>
                            <div className=" flex items-center">
                                <button className=' border-red-900 border-[1px] px-[15px] py-[7px] rounded-[5px] '>REPORT</button>
                            </div>
                        </div>
                        <div className="w-full grid grid-cols-2 gap-4 p-2">
                            <button className='font-[400] text-[20px] text-center py-[.8rem] border border-[#CF796C] text-[#CF796C] rounded-[45px]'>Likes</button>
                            <button className='font-[400] text-[20x] text-center py-[.8rem] border border-[#CF796C] rounded-[45px] bg-[#CF796C] text-white'>Comments</button>
                        </div>
                        <div className="flex-1 overflow-auto scroll-hide">
                            {postData.comments.length > 0 && <div className="p-8 rounded-[45px]  flex flex-col gap-4 bg-[#e1e1e13b] ">
                                {postData.comments.map((comment) => (<Fragment key={comment.name + comment.message}>
                                    <div className="w-full">
                                        <div className="flex items-center gap-1">
                                            <div className="w-[53px] aspect-square rounded-full overflow-hidden">
                                                <img src={postProfile} className='w-full' alt="" />
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
                                                {comment.reply.map((reply) => (
                                                    <div className="w-full pt-4">
                                                        <div className="flex items-center gap-1">
                                                            <div className="w-[53px] aspect-square rounded-full overflow-hidden">
                                                                <img src={postProfile} className='w-full' alt="" />
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
                                    </div>
                                </Fragment>))}
                                <div ref={commentsEndRef} />
                            </div>}
                        </div>
                        <div className="w-full">
                            <div className="bg-[#ecc8ae4a] w-full h-[70px] flex rounded-full pe-2 items-center">
                                <div className="h-[70px] aspect-square rounded-full border border-[#C08C5D] bg-white p-1">
                                    <img src={postProfile} className='w-full rounded-full' alt="" />
                                </div>
                                <input
                                    value={typedComment}
                                    onChange={(e) => {
                                        setTypedComment(e.target.value);
                                    }}
                                    type="text"
                                    className='flex-1 caret-black p-4 bg-transparent outline-none  text-[1.1rem] font-[400]'
                                    placeholder='Write a Comment... '
                                />
                                <button className='p-2' onClick={handlePostComment}>send</button>
                            </div>
                        </div>
                    </div>
                </div>
                <h1 className='text-[30px] font-[500] p-3'>Latest Images</h1>
                <div className="w-full overflow-x-auto px-8 scroll-hide rounded-xl ">
                    <div className="min-w-max flex gap-4">
                        <div className="h-[15rem] aspect-[2] flex items-center overflow-hidden rounded-xl " >
                            <img src={postData?.image} className='min-h-full aspect-auto  animate-show-div' alt="" />
                        </div>
                        <div className="h-[15rem] aspect-[2] flex items-center overflow-hidden rounded-lg" >
                            <img src={postData?.image} className='min-h-full aspect-auto  animate-show-div' alt="" />
                        </div>
                        <div className="h-[15rem] aspect-[2] flex items-center overflow-hidden rounded-xl " >
                            <img src={postData?.image} className='min-h-full aspect-auto  animate-show-div' alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopUpPost;
