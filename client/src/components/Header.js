import React from 'react'
import { Link } from 'react-router-dom';
export default function Header() {
    return (
        <div>
           <Link to = "/" >All Posts</Link> 
           <Link to = "/add-post">Add Post</Link>
        </div>
    )
}
