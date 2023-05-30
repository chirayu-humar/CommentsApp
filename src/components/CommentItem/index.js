// Write your code here
import './index.css'
import {formatDistanceToNow} from 'date-fns'

const CommentItem = props => {
  const {details, classList, onClickLikeBtn, onClickDeleteBtn} = props
  const {name, Comment, commentsCount, isLiked, id} = details
  const {initialContainerBackgroundClassNames} = classList

  const onClickLike = () => {
    onClickLikeBtn(id)
  }

  const onClickDelete = () => {
    onClickDeleteBtn(id)
  }
  return (
    <li className="outer">
      <div className="firstChild">
        <div className="profileContainer">
          <span>{name[0]}</span>
        </div>
        <div className="firstChild2">
          <div className="inner">
            <h1>{name}</h1>
            <p>{formatDistanceToNow(new Date())}</p>
          </div>
          <p>{Comment}</p>
        </div>
      </div>
      <div className="secondChild">
        <div>
          {!isLiked && (
            <img
              alt="like"
              onClick={onClickLike}
              src="https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png"
            />
          )}
          {isLiked && (
            <img
              alt="liked"
              onClick={onClickLike}
              src="https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png"
            />
          )}
          <button onClick={onClickLike} type="button">
            like
          </button>
        </div>
        <div>
          <button onClick={onClickDelete} type="button" data-testid="delete">
            <img
              alt="delete"
              src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            />
          </button>
        </div>
      </div>
    </li>
  )
}

export default CommentItem
