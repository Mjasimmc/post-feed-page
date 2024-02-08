import postOne from '../assets/postOne.jpg'
import postProfile from '../assets/postProfile.jpg'
export const postData = [
    {
        user: ' Anitha K C',
        date: new Date(),
        image: postOne,
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.jasdf',
        comments: [
            {
                iamge: postProfile,
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
        user: ' Anitha K C',
        date: new Date(),
        image: postOne,
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.jasdf',
        comments: []
    }
]