import {useEffect, useRef} from 'react';
import './pagination.scss';
import {withRouter} from 'react-router-dom';


const Pagination = ({limit, itemsCount, url, isLoadingArticles, history}) => {
    const maxPage = Math.ceil(itemsCount / limit);
    const page = useRef(1);

    useEffect(() =>{
        document.onscroll = () => {
            if(window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
               if((page.current <= maxPage) && !isLoadingArticles) {
                page.current += 1;
                history.push(`${url}?page=${page.current}`)
               }
            }
        }
        return () => {
            document.onscroll = null;
        }
    },[maxPage, url]);

    return null;
}

export default withRouter(Pagination);