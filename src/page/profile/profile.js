import React from 'react';
import Information from './../../components/information/information';
import Feeds from './../../components/feeds/feeds';

const Profile = props => {
    console.log(props)
    const profile = {
        img: 'https://png.pngtree.com/png-vector/20190828/ourlarge/pngtree-smile-icon-template-design-smiling-emoticon-vector-logo-on-yellow-background-png-image_1715036.jpg',
        subtitle: 'Darktime'
    };

    const tabsLink = [
        {text: 'My Posts', href: props.location.pathname},
        {text: 'Favorite Post', href: props.location.pathname, defaultActive: true}
    ];

    const articleList = [
        {
            hrefProfile: '/profile/Darktime',
            tagsList: ['Dark', 'zzz', 'fizz'],
            title: 'Darktime',
            about: 'Darktime', 
            id: 'asdasdasdasd',
            hrefArticle: '/article',
            meta: {
                date: new Date().toLocaleDateString(),
                username: 'Darktime',
                src: 'https://png.pngtree.com/png-vector/20190828/ourlarge/pngtree-smile-icon-template-design-smiling-emoticon-vector-logo-on-yellow-background-png-image_1715036.jpg',
                like: '0'

            }
        },
        {
            hrefProfile: '/profile',
            tagsList: ['Dark', 'zzz', 'fizz'],
            title: 'Kossu',
            about: 'Kossu', 
            id: 'asdasdasdasd',
            hrefArticle: '/article',
            meta: {
                date: new Date().toLocaleDateString(),
                username: 'Darktime',
                src: 'https://png.pngtree.com/png-vector/20190828/ourlarge/pngtree-smile-icon-template-design-smiling-emoticon-vector-logo-on-yellow-background-png-image_1715036.jpg',
                like: '0'

            }
        },
        {
            hrefProfile: '/profile/Darktime',
            tagsList: ['Dark', 'zzz', 'fizz'],
            title: 'Jeny',
            about: 'Jenu', 
            id: 'asdasdasdasd',
            hrefArticle: '/article',
            meta: {
                date: new Date().toLocaleDateString(),
                username: 'Darktime',
                src: 'https://png.pngtree.com/png-vector/20190828/ourlarge/pngtree-smile-icon-template-design-smiling-emoticon-vector-logo-on-yellow-background-png-image_1715036.jpg',
                like: '0'

            }
        }
    ];
    return (
        <>
            <Information  img={profile.img} subtitle={profile.subtitle} icon="fas fa-plus" profile={'true'} buttonText={`follow ${profile.subtitle}`}/>
            <Feeds tabsLink={tabsLink} articleList={articleList} />
        </>
    )
}

export default Profile;