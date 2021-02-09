// import './App.css';
import React from "react"
import blogData from "./blogdata"
import Header from "./header"
import {BlogList,BlogPost} from "./bloglist"
import Footer from "./footer"

function App() {
    const posts = blogData.map(post => 
    <BlogPost 
        title={post.title} 
        subTitle={post.subTitle} 
        author={post.author} 
        date={post.date} 
    />)

    return (
        <div>
            <Header />
            {posts}
            <Footer />
        </div>
    )
}

export default App;