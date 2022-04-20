import React, {useRef, useState} from "react";
import Counter from "./Components/Counter";
import ClassCounter from "./Components/ClassCounter";
import './styles/App.css';
import PostItem from "./Components/PostItem";
import PostList from "./Components/PostList";
import MyButton from "./Components/UI/button/MyButton";
import MyInput from "./Components/UI/input/MyInput";
import PostFormy from "./Components/PostFormy";

function App() {


      const [posts, setPosts] = useState([
            {id:1, title: 'Javascript1', body: 'Javascript - язык программирования1'},
            {id:2, title: 'Javascript2', body: 'Javascript - язык программирования2'},
            {id:3, title: 'Javascript3', body: 'Javascript - язык программирования3'}
      ])

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }


      return (
        <div className="App">
                <PostFormy create={createPost}/>
              <PostList posts={posts} title='Список Постов1'/>
        </div>
      );
}

export default App;
