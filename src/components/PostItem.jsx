import React from 'react';
import MyButton from "./UI/Button/MyButton";

const PostItem = (props) => {
    return (
        <div className="post">

            <div className='post_content'>
                <strong>{props.number}.{props.post.name}</strong>
                <div>{props.post.description}</div>
            </div>
            <div className="post_btn">
                <MyButton onClick={()=>props.remove(props.post)}>Удалить</MyButton>
            </div>
        </div>
    );
};

export default PostItem;
