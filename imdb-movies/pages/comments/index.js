import React, {Component, useState, useEffect} from "react";
import CommentCard from '../components/comments/CommentCard';


const Comments = () => {

    const [comments, setComments] = useState([]);

    const fetchComments = async () => {
        const r = await fetch(
            "http://localhost:3000/api/comments",
        );
        const data = await r.json();
        setComments(data.data)
    };


    useEffect(() => {
        console.log("debug")
        fetchComments();
    }, [])

    return(
        <div>
            {comments.map((comment) =>
           <CommentCard comment={comment} key={comment._id} fetchComments={fetchComments()}/>
            )}
        </div>

    )

}

export default Comments;