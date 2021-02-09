import React from "react"

const BlogList = () => (
    <BlogPost />
)

const BlogPost = (props) => {
    return (
    <div>
        <p>{props.title}</p>
        <p>{props.subTitle}</p>
        <p>{props.author}</p>
        <p>{props.date}</p>
    </div>
)}

export {BlogList,BlogPost}