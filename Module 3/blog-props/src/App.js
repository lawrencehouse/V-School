import './App.css';
import React from "react"
import Header from "./header"
import blogData from "./blogdata"
import blogPost from "./bloglist"

function App() {
    const posts = blogData.map(post => 
    <blogPost 
        title={post.title} 
        subTitle={post.subTitle} 
        author={post.author} 
        date={post.date} 
    />)
    return (
        <div className="App">
            <Header />
            <blogPost />
        </div>
    )
}

export default App;