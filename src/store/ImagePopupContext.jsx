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
                        image: postProfile,
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
    const getPostById = (postId) => {
        return posts.find(post => post.id === postId);
    };
    const addPost = (image, description) => {
        const newPost = {
            id: generateUniqueId(),
            user: 'Anitha K C', // Assuming this is the default user for new posts
            date: new Date(),
            image: image,
            description: description,
            comments: []
        };

        setPosts(prevPosts => [newPost, ...prevPosts]);
    };

    // Function to add a comment to a post
    const addComment = (postId, comment) => {
        console.log(postId, comment)
        setPosts(prevPosts =>
            prevPosts.map(post =>
                post.id === postId
                    ? {
                        ...post,
                        comments: [...post.comments, {
                            message: comment,
                            image: postProfile,
                            user: 'Srutheesh',
                            reply: []
                        }],
                    }
                    : post
            )
        );
    };

    return (
        <>
            <PostContext.Provider value={{ posts, setPosts, addPost, addComment, getPostById }}>
                <ImagePopUpContext.Provider value={{ popupPost, setPopUpPost }}>
                    {children}
                </ImagePopUpContext.Provider>
            </PostContext.Provider>
        </>
    );
};

export default ContextProvider;
