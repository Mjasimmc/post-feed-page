import React, { useState, useRef } from 'react';
import banner from '../../assets/bannerImage.png';

const UploadImage = () => {
    const [newImage, setNewImage] = useState(null);
    const [description, setDescription] = useState('')
    const inputRef = useRef(null);

    const handleImageChange = (e) => {
        console.log(e.target.files)
        if (e.target.files.length > 0) {
            setNewImage(URL.createObjectURL(e.target.files[0]));
        }
    };
    const handleCancelUpload = () => {
        setNewImage(null)
        inputRef.current.fileList = []
    }

    const handleClickUploadedImage = () => {
        inputRef.current.click();
    };

    return (<>
        <div className='w-full shadow shadow-black flex justify-between p-4 min-h-[10rem] rounded-md'>
            <div className="min-w-[10rem] flex items-end justify-start -me-[35%] max-w-[25rem] w-full sticky right-0">
                <div className="md:w-[10rem] max-md:w-[5rem] aspect-square bg-red-50 grid place-content-center max-md:rounded-[1.5rem] md:rounded-[3rem]">
                    <div className="max-md:w-[3rem] max-md:rounded-[1rem] md:w-[7rem] aspect-square  upl-pg-lft-crd-brd  md:rounded-[2rem]" />
                </div>
            </div>
            <div className="w-full   flex flex-col gap-4 items-center justify-center z-[0] ">

                {!newImage && (<>
                    <input type="file" id='uploadImage' className='max-w-full hidden' onChange={(e) => {
                        console.log('changed')
                        handleImageChange(e)
                    }} ref={inputRef} />
                    <label htmlFor="uploadImage" className='py-[1rem] min-w-[250px]  px-[20%] rounded-[45px] bg-[#C08C5D] font-[500] text-[20px]  text-[#FFFFFF] cursor-pointer custom-animate-upload-button'>
                        Upload Images
                    </label>
                </>)}
                {/* Uploaded image */}
                {newImage && (<>
                    <input type="file" id='uploadImage' className='max-w-full hidden' onChange={(e) => {
                        console.log('changed')
                        handleImageChange(e)
                    }} ref={inputRef} />

                    <div className="overflow-hidden w-full aspect-[2] bg-gray-400 flex items-center rounded-md border " onClick={handleClickUploadedImage} title='click here to change image'>
                        {newImage && <img src={newImage} className='w-full aspect-auto min-[20rem] min-h-[10rem] animate-show-div' alt="" />}
                    </div>
                    <div className="w-full bg-white ">
                        <textarea name="" id="" rows="3" className='outline-none bg-white text-[20px] min-w-[15rem] w-full font-[400] p-4 border border-blue-800 rounded-md mt-4 caret-black'
                            onChange={(e) => setDescription(e.target.value)}
                            value={description}
                            placeholder='Type here . . .'
                        />

                    </div>
                    <div className="w-full flex justify-end flex-wrap gap-4">
                        <button className=' border-red-900 border-[1px] px-[15px] py-[7px] rounded-[5px] ' onClick={handleCancelUpload}>cancel</button>
                        <button className=' border-blue-900 border-[1px] px-[15px] py-[7px] rounded-[5px] '>Save</button>
                    </div>
                </>
                )}
            </div>
            <div className="min-w-[10rem] -me-[5%] -ms-[30%] ps-[-10px] max-w-[25rem] aspect-square w-full  ">
                <img src={banner} className='w-full bg-transparent' alt="" />
            </div>
        </div>
    </>
    );
}

export default UploadImage;
