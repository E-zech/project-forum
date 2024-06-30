import { useState } from 'react';
import PostModal from '../components/postModal/PostModal';
import './Home.css';
import moment from 'moment';
// example for Posts data from the DataBase :
export const post = [
    {
        userId: '667e6e0a09fc03a905fb78b5', // the user who created the post 
        postId: '667e6e0a09fc03a905fb78a9', // the id of the post (Unique)
        title: 'CSS color VS font size',
        text: 'Anyone know why CSS provides color for text, but does not have font-color or text-color?Seems very counter-intuitive, kind of like text-decoration: underline rather than font-style or something related to fonts.Does anyone know why/how the W3C came up with such a wide array of CSS names like this?',

        // array of user's id who liked the posts ?
        likes: ["667e6e0a09fc03a905fb82c3", "667e7dc009fc03a905fb82c6"],

        // array of objects, each object will include the user (the responding user)
        answers: [{
            answerId: '667e6e0a09fc03a905fb82c3', // the id of the user who answer/ response

            name: 'Elyashiv',
            text: 'CSS uses property names like color and text-decoration to cover broader styling needs and maintain consistency across different elements. Early naming decisions and the goal of separating style from content led to these conventions, prioritizing clarity and versatility.'
        },
        {
            id: '667e7dc009fc03a905fb82c6',
            name: 'Danny',
            text: 'CSS names like color and text-decoration reflect early design choices for clarity and broad application, aiming to cover various styling needs and maintain consistency.'
        }
        ],

        views: 5, // number of people who saw that Post, we can check it by add +1 each time app.get('/post/:id' was a succese or somthing like that

        tags: ['MongoDB', 'Express', 'React', 'NodeJs'], // the user who created the post can add tags like: #javaScript, #CSS and so on

        createdAt: '2024-06-28T08:02:18.214+00:00', // then we can use moment in the front UI 
        lastUpdated: '2024-07-28T08:03:24.214+00:00',
        status: true, // if it's false we can soft-delete (save it in DataBase, but not sending it as one of the posts when we ask for all post: app.get('/post/all')

        type: ['question'] // maybe we can create enum for type: question, answear, info like:
        // enum PostType {
        //QUESTION = 'question',
        //ANSWER = 'answer',
        //INFO = 'info'}
    },
    {
        userId: '667e6e0a09fc03a905fb78c4',
        postId: '667e6e0a09fc03a905fb78b8',
        title: 'Understanding CSS Flexbox',
        text: 'CSS Flexbox is a layout model that provides an easy and efficient way to design complex layouts. It allows items to align and distribute space within a container, even when their size is unknown. Flexbox is great for building responsive designs and handling alignment issues. Learn more about its properties and use cases in modern web design.',

        likes: ["667e6e0a09fc03a905fb82c7", "667e7dc009fc03a905fb82c8"],

        answers: [{
            id: '667e6e0a09fc03a905fb82c7',
            name: 'Alex',
            text: 'Flexbox is indeed powerful for creating layouts. It simplifies handling alignment and distribution in ways that were quite challenging before.'
        },
        {
            id: '667e7dc009fc03a905fb82c8',
            name: 'Jordan',
            text: 'I find Flexbox particularly useful for centering items both horizontally and vertically. It has become a fundamental tool in my CSS toolkit.'
        }],

        views: 12,

        tags: ['CSS', 'Web Design', 'Flexbox'],

        createdAt: '2024-06-29T09:15:00.000+00:00',
        lastUpdated: '2024-07-01T10:20:30.000+00:00',

        status: true,

        type: ['info']
    },
    {
        userId: '667e6e0a09fc03a905fb78d2',
        postId: '667e6e0a09fc03a905fb78d0',
        title: 'How to center a div ?',
        text: 'To center a div horizontally, you can use the `margin: auto` property with a specified width. For vertical centering, using Flexbox or Grid is recommended. For example, using Flexbox, you can set `display: flex`, `justify-content: center`, and `align-items: center` on the parent container to center the child div both horizontally and vertically.',

        likes: ["667e6e0a09fc03a905fb82c9", "667e7dc009fc03a905fb82c5"],

        answers: [],

        views: 8,

        tags: ['CSS', 'Flexbox', 'Centering'],

        createdAt: '2024-06-30T11:30:45.000+00:00',
        lastUpdated: '2024-07-02T12:45:50.000+00:00',

        status: true,

        type: ['answer']
    }
]

export function fixTime(time) {
    return moment(time).format('HH:mm [on] DD/MM/YYYY');
}

export default function Home() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <>
            <header className='mainHeader'>
                <h1>Home Page</h1>
            </header>

            <section className='post-btnContainer'>
                <div>
                    <button className='post-btn' onClick={openModal}>Add Post</button>
                </div>
            </section>

            {isModalOpen && <PostModal handleClose={openModal} />}

            <section className='home-container'>
                {/* for example each "Post" (can be a photo of code a line of code and such) 
                    will called a Post ? // almayo u can change anything at anytime bro :)
                    so will need to map over those "Posts" to make the homePage filled with data
                */}

                {
                    post.map(p => (
                        <>
                            <section key={p.postId} className='post-container'>
                                <header>
                                    <h2 className='post-title'>{p.title}</h2>
                                </header>
                                <div className='post-tags'>
                                    {p.tags.map((t, index) => (
                                        <>
                                            <span key={index}>{t}</span>
                                        </>
                                    ))}
                                </div>

                                <div className='post-text'>
                                    <p>{p.text}</p>
                                </div>

                                <div className='post-answerContainer'>
                                    {
                                        p.answers.length > 0 &&
                                        p.answers.map(a => (
                                            <div key={a.answerId} >
                                                <div className='post-answerName'>{a.name}:</div>
                                                <div className='post-answerText'><p>{a.text}</p>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>

                                <div className='post-footer'>
                                    <div className='post-views'>Views: {p.views}</div>
                                    <div className='post-timeContainer'>
                                        <div>Created at: {fixTime(p.createdAt)}</div>
                                        <div>Last updated at: {fixTime(p.lastUpdated)}</div>
                                    </div>
                                </div>

                            </section>
                            <hr className='post-hr' />
                        </>
                    ))
                }
            </section>
        </>
    )
};
