import { Review } from '@/interfaces/interfaces'
import './commentBox.css'
import { useEffect, useState } from 'react';

interface CommentBoxProps {
    review: Review;
}

export default function Comment(props: CommentBoxProps) {
    const { review } = props
    const [date,setDate] = useState<String>("")

    return (
        <div className="comment">
            <div className='user-comment-info'>
                <p>{review.fk_user}</p>
                <p>{review.date}</p>
            </div>

            <div>
                <p>{review.commentary}</p>
            </div>

            <div>
                <p>Rating: {review.stars}</p>
            </div>
        </div>
    )
}
