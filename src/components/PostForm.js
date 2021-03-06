import React, {useState} from 'react';
import MyInput from "./UI/Input/MyInput";
import MyButton from "./UI/Button/MyButton";

const PostForm = (props) => {
    const [post,setPost] = useState({title:"",body:""})

    const addNewPost = (e) =>{
        e.preventDefault()
       const newPost ={
            ...post,id:Date.now()
        }
        props.create(newPost)
        setPost({title:"",body:""})
        }
    return (
        <form>
            <MyInput value={post.title}
                     onChange = {e => setPost({...post,title: e.target.value})}
                     type="text"
                     placeholder="Input for Name"/>
            <MyInput type="text"
                     value={post.body}
                     onChange = {e => setPost({...post,body: e.target.value})}
                     placeholder="Input for Desasadsdsasdacription"
            />
            <MyButton onClick={addNewPost} >Create new post</MyButton>
        </form>
    );
};

export default PostForm;
