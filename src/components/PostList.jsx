import React from 'react';
import { TransitionGroup } from 'react-transition-group';
import { CSSTransition } from 'react-transition-group';
import PostItem from "./PostItem";

const PostList = ({posts, title, remove}) => {
    if (!posts.length) {
        return (<h1 style={{marginTop: '125px', textAlign: "center"}}>
                    Посты не найдены!
                </h1>)
    } 

    return (
        <div>
            <h1 style={{textAlign: 'center', paddingTop: '12px'}}>{title}</h1>
            <TransitionGroup>
                {posts.map((post, index) => 
                    <CSSTransition key={post.id} timeout={500} classNames="post">
                        <PostItem number={index + 1} post={post} remove={remove}/> 
                    </CSSTransition>
                )}
            </TransitionGroup>
        </div>
    );
};

export default PostList;