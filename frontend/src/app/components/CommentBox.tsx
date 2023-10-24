import { Review } from '@/interfaces/interfaces'
import Comment from './Comment'
import './commentBox.css'

interface CommentBoxProps {
    reviews: Review[];
}

export default function CommentBox({ reviews }: CommentBoxProps) {
    return (
        <div className="comment-box-container">
            <div>
                <h2>Comments</h2>
            </div>

            <div className='comment-list'>
                {reviews.map(e => <Comment review={e} key={e.id} />)}
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
