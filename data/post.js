import { USERS } from './users'

export const POSTS =[
    {
        imageUrl: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.firstpost.com%2Fwp-content%2Fuploads%2F2019%2F05%2FAkshay-Kumar-featured-380.jpg&imgrefurl=https%3A%2F%2Fwww.firstpost.com%2Fentertainment%2Fakshay-kumar-trolled-after-old-video-of-him-saying-toronto-is-my-home-resurfaces-6569701.html&tbnid=Qj4A5i1BAPVubM&vet=12ahUKEwjA5JG05qv1AhXT_jgGHQwJBNMQMyhbegUIARCzAQ..i&docid=1R39aeVEOm72XM&w=380&h=285&itg=1&q=akshay%20kumar&ved=2ahUKEwjA5JG05qv1AhXT_jgGHQwJBNMQMyhbegUIARCzAQ',
        user: USERS[2].users,
        likes: 792052,
        caption: 'Toronto my home',
        profile_picture: USERS[2].image,
        comments:[
            {
                users: 'rayto',
                comment: 'Nice one sir',
            },
            {
                users: 'BajrangDal',
                comment: 'Canadian',
            },
        ],
    },
    {
        imageUrl: 'https://www.google.com/imgres?imgurl=http%3A%2F%2Fwww.medictips.com%2Fwp-content%2Fuploads%2F2017%2F07%2Fjason-statham-workout-routine.png&imgrefurl=https%3A%2F%2Fmedictips.com%2Fdiscover-jason-statham-workout-regime-fitness-routine-and-diet-plan%2F&tbnid=Nqb1FVnQAJKb8M&vet=12ahUKEwiSuJDN6Kv1AhVxwzgGHRhvBNkQMygnegUIARCKAg..i&docid=AoE9lijBX21JuM&w=346&h=419&itg=1&q=jason%20statham%20workout&ved=2ahUKEwiSuJDN6Kv1AhVxwzgGHRhvBNkQMygnegUIARCKAg',
        user: USERS[0].users,
        likes: 92052,
        caption: 'Early Work Out',
        profile_picture: USERS[0].image,
        comments:[
            {
                users: 'ThefitnessMan',
                comment: 'Lit @jason',
            },
            {
                users: 'dev.raymond',
                comment: 'Siiiiiuuuuhhhh',
            },
        ],   
    }
]