import React, {useState} from 'react';
import MyInput from "./UI/Input/MyInput";
import MyButton from "./UI/Button/MyButton";

const PostForm = (props) => {
    const [post,setPost] = useState({name:"",description:""})

    const addNewPost = (e) =>{
        e.preventDefault()
       const newPost ={
            ...post,id:Date.now()
        }
        props.create(newPost)
        setPost({name:"",description:""})
        }
    return (
        <form>
            <MyInput value={post.name}
                     onChange = {e => setPost({...post,name: e.target.value})}
                     type="text"
                     placeholder="Input for Name"/>
            <MyInput type="text"
                     value={post.description}
                     onChange = {e => setPost({...post,description: e.target.value})}
                     placeholder="Input for Desasadsdsasdacription"
            />
            <MyButton onClick={addNewPost} >Create new post</MyButton>
        </form>
    );
};

export default PostForm;
