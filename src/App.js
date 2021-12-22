import React, {useEffect, useMemo, useState} from "react";
import './styles/App.css'
import PostsList from "./components/PostsList";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/MySelect/MySelect";
import PostFilter from "./components/PostFilter";
import ModalWindow from "./components/UI/MyModalWindow/ModalWindow";
import MyButton from "./components/UI/Button/MyButton";
import {usePosts} from "./hooks/usePosts";
import axios from "axios";
import PostServise from "./API/PostServise";
import Loader from "./components/UI/Loader/Loader";
import {useFetching} from "./hooks/useFetching";

function App() {
    const [posts, setPosts] = useState([])
    const [filter, setFilter] = useState({sort: '', query: ''})
    const [modal, setModal] = useState(false)
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
    const [totalCount,setTotalCount] = useState(0)
    const [limit,setLimit] = useState(10)
    const [page,setPage] = useState(1)

    const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
        const response = await PostServise.getAll(limit,page)
        setPosts(response.data)
        console.log(response.headers['x-total-count'])
        setTotalCount(response.headers['x-total-count'])
    })
    useEffect(() => {
        fetchPosts()
    }, [])
    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
    }
    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    return (
        <div className="app">
            <MyButton style={{marginTop: '30px'}} onClick={() => setModal(true)}>Create Post</MyButton>
            <ModalWindow visible={modal} setVisible={setModal}>
                <PostForm create={createPost}/>
            </ModalWindow>
            <PostFilter filter={filter} setFilter={setFilter}/>
            {postError && <h1>Error ${postError}</h1>}
            {isPostsLoading
                ? <div style={{justifyContent: "center", display: "flex", marginTop: 15}}><Loader/></div>
                :
                <PostsList remove={removePost} posts={sortedAndSearchedPosts} title={'Posts Lists JS'}/>}
        </div>
    )
}

export default App


