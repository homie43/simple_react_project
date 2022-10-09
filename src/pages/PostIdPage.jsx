import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import BasicExample from '../components/UI/spinner/MySpinner';
import PostService from '../API/PostService';
import { useFetching } from '../hooks/useFetching';

const PostIdPage = () => {
    const params = useParams();
    const [post, setPost] = useState({})
    const [comments, setComments] = useState([])
    
    const [fetchPostById, isLoading, error] = useFetching(async (id) => {
        const response = await PostService.getById(id);
        setPost(response.data)
    })
    
    const [fetchCom, isComLoading, errorCom] = useFetching(async (id) => {
        const response = await PostService.getByComm(id);
        setComments(response.data)
    })

    useEffect(() => {
        fetchPostById(params.id);
        fetchCom(params.id)
    }, [])

    return (
        <div>
            <h1>Вы открыли страницу поста c ID {params.id}</h1>
            {isLoading ? <BasicExample/> : <div>{post.id} {post.title}</div>}
            <h1>Комментарии</h1>
            {isComLoading 
                ? <BasicExample/> 
                : <div>
                    {comments.map(comment => 
                        <div key={comment.id} style={{marginTop: '15px'}}>
                            <h5>{comment.email}</h5>
                            <div>{comment.body}</div>
                        </div>
                    )}
                  </div>}
        </div>
    );
};

export default PostIdPage;