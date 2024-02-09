import { createContext, useState } from "react";
import postOne from '../assets/postOne.jpg';
import postProfile from '../assets/postProfile.jpg';

export const ImagePopUpContext = createContext(null);
export const PostContext = createContext(null);

function generateUniqueId() {
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    let id = '';
    for (let i = 0; i < 5; i++) {
        const randomIndex = Math.floor(Math.random() * letters.length);
        id += letters[randomIndex];
    }
    return id;
}

let postData = [
    {
        id: generateUniqueId(),
        user: 'Anitha K C',
        date: new Date(),
        image: postOne,
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.jasdf',
        comments: [
            {
                image: postProfile,
                user: 'Srutheesh',
                message: 'Nice Images....Good Work',
                reply: [
                    {
                        user: 'Anitta K C',
                        message: 'Thankuu....'
                    }
                ]
            },
            {
                image: postProfile,
                user: 'Simi K Sunny',
                message: 'Nice Work....',
                reply: []
            }
        ]
    },
    {
        id: generateUniqueId(),
        user: 'Anitha K C',
        date: new Date(),
        image: postOne,
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.jasdf',
        comments: []
    }
];

export const ContextProvider = ({ children }) => {
    const [popupPost, setPopUpPost] = useState(null);
    const [posts, setPosts] = useState(postData);

    const addPost = (image, description) => {
        const newPost = {
            id: generateUniqueId(),
            user: 'Anitha K C', // Assuming this is the default user for new posts
            date: new Date(),
            image: image,
            description: description,
            comments: []
        };

        setPosts(prevPosts => [...prevPosts, newPost]);
    };

    return (
        <>
            <PostContext.Provider value={{ posts, setPosts ,addPost  }}>
                <ImagePopUpContext.Provider value={{ popupPost, setPopUpPost }}>
                    {children}
                </ImagePopUpContext.Provider>
            </PostContext.Provider>
        </>
    );
};

export default ContextProvider;
