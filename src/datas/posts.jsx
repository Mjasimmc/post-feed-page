import postOne from '../assets/postOne.jpg';
import postProfile from '../assets/postProfile.jpg';

// Initial data
export let postData = [
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

// Function to add a comment to a post
export function addComment(postIndex, comment) {
    postData[postIndex].comments.push(comment);
}

// Function to add a new post with a pre-built user name
export function addPost(newPost) {
    newPost.user = 'Prebuilt User'; // Set a default user name
    newPost.id = generateUniqueId(); // Assigning a unique ID to the new post
    postData.push(newPost);
}

// Function to generate a unique ID consisting of 5 random letters
function generateUniqueId() {
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    let id = '';
    for (let i = 0; i < 5; i++) {
        const randomIndex = Math.floor(Math.random() * letters.length);
        id += letters[randomIndex];
    }
    return id;
}
