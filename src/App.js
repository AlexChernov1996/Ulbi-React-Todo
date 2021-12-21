import React, {useMemo, useState} from "react";
import './styles/App.css'
import PostsList from "./components/PostsList";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/MySelect/MySelect";
import PostFilter from "./components/PostFilter";
import ModalWindow from "./components/UI/MyModalWindow/ModalWindow";
import MyButton from "./components/UI/Button/MyButton";
import {usePosts} from "./hooks/usePosts";
import axios from "axios";

function App() {
    const [posts, setPosts] = useState([])
    const [filter, setFilter] = useState({sort: '', query: ''})
    const [modal, setModal] = useState(false)
    const sortedAndSearchedPosts = usePosts(posts,filter.sort,filter.query)

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
    }
    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }
    async function fetchPosts () {
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
        setPosts(response.data)
    }
    return (
        <div className="app">
            <button onClick={fetchPosts}>Get Posts</button>
            <MyButton style={{marginTop:'30px'}} onClick={() => setModal(true)}>Create Post</MyButton>
            <ModalWindow visible={modal} setVisible={setModal}>
                <PostForm create={createPost}/>
            </ModalWindow>
            <PostFilter filter={filter} setFilter={setFilter}/>
            <PostsList remove={removePost} posts={sortedAndSearchedPosts} title={'Posts Lists JS'}/>


        </div>
    )
}

export default App


