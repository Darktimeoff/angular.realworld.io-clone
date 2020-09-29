import React, {useState, useEffect} from 'react';
import { useFetch } from './../../../library/hooksLibrary';

const DeleteButton = props => {
    const [isDelete, setIsDelete] = useState(false);
    const[,doFetchComment] = useFetch(`/articles/${props.slug}/comments/${props.id}`);

    useEffect(() => {
        if(isDelete) {
            doFetchComment({method: 'delete'});
        }
    }, [isDelete, doFetchComment]);

    return  <span onClick={() => setIsDelete(true)}><i className="fas fa-trash-alt"></i></span>
}

export default DeleteButton;