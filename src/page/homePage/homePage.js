import React from 'react';
import Information from './../../components/information/information';
import Feeds from './../../components/feeds/feeds';

const HomePage = props => {
    const tabsLink = [
        {text: 'Your Feed', href: '/login'},
        {text: 'Global Feed', href: '/', defaultActive: true}
    ];
    const tagsList = [
        'HuManlty', 
        'HuManlty', 
        'Gandhi', 
        'HITLER', 
        'SIDA', 
        'BlackLivesMatter', 
        'BlackLivesMatter', 
        'test', 
        'dragons',
        'butt'
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
            <Information title="medium" subtitle="A place to share your React knowledge"/>
            <Feeds tabsLink={tabsLink} tagsList={tagsList} articleList={articleList}/>
        </>
    )
}

export default HomePage;