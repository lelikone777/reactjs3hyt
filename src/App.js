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

    const [title,setTitle] = useState('')
    const bodyInputRef = useRef();

    const addNewPost = (e) => {
          e.preventDefault();
        console.log(title)
        console.log(bodyInputRef.current.value)

    }



      return (
        <div className="App">
            <form>
                {/*Управляемый компонент*/}
                <MyInput
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    type="text"
                    placeholder="Название поста"
                />
                {/*Неуправляемый/Неконтролируемый компонент*/}
                <MyInput
                    ref={bodyInputRef}
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
