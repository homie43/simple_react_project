import React from 'react';
import { useState } from 'react';
import MyInput from './UI/input/MyInput';
import MyButton from './UI/button/MyButton';

const PostForm = ({create}) => {

    const [post, setPost] = useState({title: '', body: ''})

    const addNewPost = (e) => {
        e.preventDefault();
        // добавить пост
        const newPost = {
          ...post, id: Date.now()
        }
        create(newPost);
        setPost({title: '', body: ''});
    }

    return (
        <form>
            {/* получение данных из управляемого компонента */}
            <MyInput 
                // value={title}
                value={post.title}
                onChange={e => setPost({...post, title: e.target.value})}
                type="text" 
                placeholder='Название поста'
            />

            <MyInput 
                // value={body}
                value={post.body}
                onChange={e => setPost({...post, body: e.target.value})}
                type="text" 
                placeholder='Описание поста'
            />
            <MyButton onClick={addNewPost} >Создать пост</MyButton>
      </form>
    );
};

export default PostForm;