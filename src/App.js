import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainPage from "./pages/mainPage/MainPage";
import Post from "./components/post/Post";
import PostPage from "./pages/postPage/PostPage";
import Layout from "./components/layout/Layout";

function App() {
  return (
        <BrowserRouter>
          <Routes>
              <Route path='/' element={<Layout/>}>
                  <Route index element={<MainPage/>}/>
              </Route>
              <Route path='/post' element={<PostPage/>}/>
              <Route path='/post/:id' element={<Post/>}/>
              <Route path='*' element={<h2 style={{textAlign:"center"}}>404 not found</h2>}/>
          </Routes>
        </BrowserRouter>
  );
}

export default App;
