import React, {useState} from "react";
import './styles/App.css'
import PostsList from "./components/PostsList";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/MySelect/MySelect";

function App() {
    const [posts, setPosts] = useState([
        {id: '1', name: 'JS', description: 'Its a programming language'},
        {id: '2', name: 'JS 2', description: 'Its a programming language'},
        {id: '3', name: 'JS 3', description: 'Its a programming language'},
    ])
    const createPost = (newPost) =>{
        setPosts([...posts,newPost])
    }
    const removePost =(post) =>{
        setPosts(posts.filter(p => p.id !==post.id))
    }
    return (
        <div className="app">

            <PostForm create={createPost}/>
            <div>
                <MySelect defaultValue={'Sort'}
                            options={[
                                {value: 'name',name:'by name'},
                                {value:'description',name:'by description'},

                            ]}
                />
            </div>
            {posts.length !==0
                ? <PostsList remove={removePost} posts={posts} title={'Posts Lists JS'}/>
                :  <h1 >Create a new post</h1>
            }

        </div>
    )
}

export default App


