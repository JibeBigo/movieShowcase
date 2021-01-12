import {useState} from "react";

const CommentCard = (props) => {

    const [edit, showEdit] = useState(false);
    const [input, setInput] = useState('');

    const comment = props.comment;

    const handleDelete = async () => {
        await fetch(`http://localhost:3000/api/comments/${comment._id}`, {method: 'DELETE'})
        props.fetchComments;
    }

    const handleEdit = async() => {
        const r = await fetch(`http://localhost:3000/api/comments/${comment._id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                comment : input,
                user_id : comment.user_id,
                movie_id: comment.movie_id
            }),
        })
        showEdit(false);
        props.fetchComments;
    }


    return(
    <div className="ml-4 max-w-5xl relative">
        <div  className="border-2 border-blue-200 bg-blue-50 rounded-lg p-3  flex flex-col justify-center items-center md:items-start shadow-inner mb-4">
            <div className="flex justify-between w-full   mr-2">
                <div className="flex items-center">
                    <img alt="avatar" width="48" height="48" className="rounded-full w-10 h-10 mr-4 shadow-lg mb-4" src="https://cdn1.iconfinder.com/data/icons/technology-devices-2/100/Profile-512.png"/>
                    {/*TODO Regler bug avec le username (probablement problème lors de l'edit, à voir)*/}
                    {/*<h3 className="text-purple-600 font-semibold text-lg text-center md:text-left ">{comment.user[0].username}</h3>*/}
                    <h3 className="text-purple-600 font-semibold text-lg text-center md:text-left ">Username</h3>
                </div>
                <div className="flex items-center">
                <svg onClick={handleDelete} className="w-8 h-8 hover:text-indigo-500 " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
                <svg onClick={e => {showEdit(true)}} className="w-8 h-8 hover:text-indigo-500 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                </svg>
                </div>
            </div>
            <p className="text-gray-600 text-lg text-center md:text-left "> {comment.comment} </    p>
        </div>

        { edit &&
        <div className="bg-gray-900 bg-opacity-50 fixed w-full h-full inset-0 pt-20 z-30">
            <div className="h-screen w-full absolute flex items-center justify-center bg-modal">
            <div className="bg-white rounded-2xl shadow p-8 m-4 max-w-xs max-h-full text-center">
                <div className="mb-4">
                    <h1 >Edit your comment :</h1>
                </div>
                <div className="mb-8">
                    <input onChange={e => setInput(e.target.value)} type={'text'} defaultValue={comment.comment} className="border-2"/>

                </div>
                <div className="flex justify-center">
                    <button onClick={e => {
                        handleEdit()
                    }} className="flex-no-shrink text-white py-2 px-4 rounded bg-blue-600 hover:bg-green-600">Edit !</button>
                </div>
            </div>
        </div>
    </div>}

    </div>
    )

}


export default CommentCard;





