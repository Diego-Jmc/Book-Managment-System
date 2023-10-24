
import Comment from './Comment'
import './commentBox.css'

export default function CommentBox() {
    return (
        <div className="comment-box-container">
            <div>
                <h2>Comments</h2>
            </div>

            <div className='comment-list'>
                <Comment></Comment>
                <Comment></Comment>
                <Comment></Comment>

            </div>

            <div className='make-comment-box'>

                <h2>Make a comment about this book</h2>

                <form>

                    <textarea className='make-comment-ta'></textarea>

                    <input type='number'></input>

                    <div>
                        <button className='btn btn-dark'>Comment</button>
                    </div>

                </form>

            </div>


        </div>


    )
}