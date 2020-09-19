import React from 'react';
import './feeds.scss';
import Tags from './tags/tags';
import Articles from './articles/articles';
import Tabs from './tabs/tabs';

const Feeds = props => {
    return (
        <section className="feeds">
            <div className="container">
            <div className="feeds-wrapper">
                    <div className="feeds-item">
                       <Tabs links={props.tabsLink} />
                       <div className="feed">
                            <div className="feed-wrapper">
                                <Articles articleList={props.articleList}/>
                            </div>
                        </div>
                    </div>
                    { props.tagsList 
                        ?  <div className="feeds-item">
                             <Tags tagsList={props.tagsList}/>
                        </div>
                        : null
                    }
                </div>
            </div>
        </section>
    )
}

export default Feeds;