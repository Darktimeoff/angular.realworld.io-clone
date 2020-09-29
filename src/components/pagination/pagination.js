import React, {useEffect, useRef} from 'react';
import './pagination.scss';
import {withRouter} from 'react-router-dom';


const Pagination = props => {
    const page = useRef(1);
    useEffect(() =>{
        document.onscroll = (event) => {
            if(window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
               if(page.current <= props.maxPage) {
                page.current += 1;
                props.history.push(`${props.url}?page=${page.current}`)
               }
            }
        }
        return () => {
            document.onscroll = null;
        }
    },[]);
    return null;
}

export default withRouter(Pagination);