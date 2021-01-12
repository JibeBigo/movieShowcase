import React, {useEffect, useState} from "react";
import CommentCard from "../../pages/components/comments/CommentCard";

const Comments = (props) => {

    const [comments, setComments] = useState(null);
    const [newComment, setNewComment] = useState(null);

    const fetchComments = () => {
            fetch(
            "http://localhost:3000/api/comments",
        ).then(response => response.json()).then(data => {
                setComments(data.data)
            });

    };


    const addNewComment = async () => {
        await fetch(
            "http://localhost:3000/api/comments", {
                method: 'POST',
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({
                    comment : newComment,
                    user_id : "5ffb0af4a8303d29f747504b",
                    movie_id: props.movieId
                }),
            },
        );
        fetchComments();
    }


    useEffect(() => {
        console.log("USE EFFECT")
        fetchComments();
    }, [])

    return comments !== null ? (
<div>
<div className=" flex mx-auto items-center justify-center shadow-lg mt-10 mx-8 mb-4 max-w-lg ">
    <div className="w-full max-w-xl bg-white rounded-lg px-4 pt-2">
        <div className="flex flex-wrap -mx-3 mb-6">
            <h2 className="px-4 pt-3 pb-2 text-gray-800 text-lg">Add a new comment</h2>
            <div className="w-full md:w-full px-3 mb-2 mt-2">
                <textarea onChange={e => {
                    setNewComment(e.target.value)
                }} className="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white" name="body" placeholder='Type Your Comment' required />
            </div>
            <div className="w-full md:w-full flex items-start md:w-full px-3">
                <div className="-mr-1">
                    <button onClick={addNewComment}
                        className="bg-transparent 2xl:group-hover:bg-yellow-500 text-red-500 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:bg-green-500 hover:border-transparent rounded-full mr-2">
                        Post my comment
                    </button>

                </div>
            </div>
        </div>
    </div>
</div>
                {comments.map((comment) =>
                    <CommentCard comment={comment} movieId={props.movieId} key={comment._id} fetchComments={fetchComments}/>
                )}
</div>
) : (
        <div>Loading Comments</div>
    );
}

export default Comments;