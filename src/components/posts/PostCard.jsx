import React, { Fragment, useContext } from 'react';
import postProfile from '../../assets/postProfile.jpg';
import postOne from '../../assets/postOne.jpg';
import collectionOne from '../../assets/collectionOne.jpg'
import collectionTwo from '../../assets/collectionTwo.jpg'
import collectionThree from '../../assets/collectionThree.jpg'
import { ImagePopUpContext } from '../../store/ImagePopupContext';

const PostCard = ({ image, description, user, comments }) => {
    const {popupPost, setPopUpPost} = useContext(ImagePopUpContext)
    return (
        <div className='w-full shadow-special p-8 flex flex-col gap-4'>
            {/* header start */}
            <div className="w-full min-h-[4rem] flex justify-between">
                <div className="flex gap-4 items-center">
                    <div className="w-[70px] aspect-square rounded-full border border-[#C08C5D] bg-white p-1">
                        <img src={postProfile} className='w-full rounded-full' alt="" />
                    </div>
                    <div className="grid h-min gap-[-5px]">
                        <p className='font-[500] text-[24px] mb-[-10px]'>{user}</p>
                        <p className='font-[400] text-[14px] text-[#444444]'> 2 Days ago</p>
                    </div>
                </div>
                <div className=" flex items-center">
                    <button className=' border-red-900 border-[1px] px-[15px] py-[7px] rounded-[5px] '>REPORT</button>
                </div>
            </div>
            {/* header ends */}
            {/* body with image start */}
            <div className="w-full aspect-[2] flex flex-col gap-2" onClick={()=>setPopUpPost({image,description,user, comments})}>
                <p className='font-[400] text-[24px] text-[#5b5b5b] '>{description} </p>
                <div className="overflow-hidden w-full aspect-[2] flex items-center rounded-md">
                    <img src={image} className='w-full aspect-auto  animate-show-div' alt="" />
                </div>
            </div>
            {/* body with image end */}

            {/* like part start */}
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
            {/* like part end */}
            {/* like and comment button start */}
            <div className="w-full grid grid-cols-2 gap-4">
                <button className='font-[400] text-[25px] text-center py-[1.2rem] border border-[#CF796C] text-[#CF796C] rounded-[45px]'>Likes</button>
                <button className='font-[400] text-[25px] text-center py-[1.2rem] border border-[#CF796C] rounded-[45px] bg-[#CF796C] text-white'>Comments</button>
            </div>
            {/* like and comment button end */}
            {/* comments section start */}

            {comments.length > 0 && <div className="p-8 rounded-[45px] flex flex-col gap-4 bg-[#e1e1e13b]">
                {comments.map((comment) => (<Fragment key={comment.name + comment.message}>
                    <div className="w-full">
                        <div className="flex items-center gap-1">
                            <div className="w-[53px] aspect-square rounded-full overflow-hidden">
                                <img src={collectionOne} className='w-full' alt="" />
                            </div>
                            <p className='font-[500] text-[22px]'>{comment.user} <span className='font-[400] text-[14px]'>1 Week ago</span> </p>
                        </div>
                        <div className="flex w-full ">
                            <div className="max-w-[54px] flex-1 flex flex-col items-center">
                                {/* {comment.reply.length > 0 && <div className='h-4/5  border'></div>} */}
                            </div>
                            <div className="flex-1 w-full">
                                <div className="flex-1 w-full bg-[#ecc8ae4a] p-[1.7rem] px-[2rem] rounded-[30px] rounded-tl-none ">
                                    <p>{comment.message}</p>
                                </div>
                                {comment.reply.map((reply) => (
                                        <div className="w-full pt-4">
                                            <div className="flex items-center gap-1">
                                                <div className="w-[53px] aspect-square rounded-full overflow-hidden">
                                                    <img src={collectionOne} className='w-full' alt="" />
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
            </div>}
            {/* comments section end */}

        </div>
    );
}

export default PostCard;
