import React, {useRef, useState} from "react";
import Counter from "./Components/Counter";
import ClassCounter from "./Components/ClassCounter";
import './styles/App.css';
import PostItem from "./Components/PostItem";
import PostList from "./Components/PostList";
import MyButton from "./Components/UI/button/MyButton";
import MyInput from "./Components/UI/input/MyInput";

function App() {


      const [posts, setPosts] = useState([
            {id:1, title: 'Javascript1', body: 'Javascript - язык программирования1'},
            {id:2, title: 'Javascript2', body: 'Javascript - язык программирования2'},
            {id:3, title: 'Javascript3', body: 'Javascript - язык программирования3'}
      ])

    const [post,setPost] = useState({title: '', body: ''})

    const addNewPost = (e) => {
          e.preventDefault()

        setPosts([...posts, {...post, id: Date.now}])
        setPost({title: '', body: ''})
      }



      return (
        <div className="App">
            <form>
                {/*Управляемый компонент*/}
                <MyInput
                    value={post.title}
                    onChange={e => setPost({...post, title: e.target.value})}
                    type="text"
                    placeholder="Название поста"
                />
                {/*Неуправляемый/Неконтролируемый компонент*/}
                <MyInput
                    value={post.body}
                    onChange={e => setPost({...post, body: e.target.value})}
                    type="text"
                    placeholder="Опичание поста"
                />
                <MyButton onClick={addNewPost}>Создать пост</MyButton>
            </form>
              <PostList posts={posts} title='Список Постов1'/>
        </div>
      );
}

export default App;
