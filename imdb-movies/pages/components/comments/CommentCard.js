const CommentCard = (props) => {


    const comment = props.comment;
    const handleDelete = async () => {
        await fetch(`http://localhost:3000/api/comments/${comment._id}`, {method: 'DELETE'})
        props.fetchComments;
    }

    const handleEdit = async() => {
        console.log("EDIT")
        const r = await fetch(`http://localhost:3000/api/comments/${comment._id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                comment : "Essai edit",
                user_id : comment.user_id,
                movie_id: comment.movie_id
            }),
        })
        console.log(await r.json())
        props.fetchComments;
    }

    return(
    <div className="ml-4 max-w-5xl relative">
        <div  className="border-2 border-blue-200 bg-blue-50 rounded-lg p-3  flex flex-col justify-center items-center md:items-start shadow-inner mb-4">
            <div className="flex justify-between mr-2">
                <div className="flex items-center">
                    <img alt="avatar" width="48" height="48" className="rounded-full w-10 h-10 mr-4 shadow-lg mb-4" src="https://cdn1.iconfinder.com/data/icons/technology-devices-2/100/Profile-512.png"/>
                    <h3 className="text-purple-600 font-semibold text-lg text-center md:text-left ">{comment.user[0].username}</h3>
                </div>

            </div>
            <div className="flex justify-between">
            <p className="text-gray-600 text-lg text-center md:text-left "> {comment.comment} </    p>
            <svg onClick={handleDelete} className="w-8 h-8 hover:text-indigo-500 " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
            <svg onClick={handleEdit} className="w-8 h-8 hover:text-indigo-500 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
            </svg>
            </div>
        </div>
    </div>
    )
}

export default CommentCard;