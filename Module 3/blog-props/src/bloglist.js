import React from "react"

const BlogList = () => (
    <BlogPost />
)

const BlogPost = (props) => {
    return (
    <div>
        <h2>{props.title}</h2>
        <h3>{props.subTitle}</h3>
        <p className="posted">Posted by <a href="#">{props.author}</a> on {props.date}</p>
        <hr />
    </div>
)}

export {BlogList,BlogPost}