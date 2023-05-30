import {Component} from 'react'
import './index.css'
import {comment} from 'postcss'
import {v4 as uuidv4} from 'uuid'
import CommentItem from '../CommentItem'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here
class Comments extends Component {
  state = {
    commentsArray: [],
    name: '',
    Comment: '',
    commentsCount: 0,
    isLiked: false,
  }

  onChangeName = event => {
    const inputValue = event.target.value
    this.setState(prevState => ({
      commentsArray: prevState.commentsArray,
      name: inputValue,
      Comment: prevState.Comment,
      commentsCount: prevState.commentsCount,
      isLiked: prevState.isLiked,
    }))
  }

  onChangeComment = event => {
    const inputValue = event.target.value
    this.setState(prevState => ({
      commentsArray: prevState.commentsArray,
      name: prevState.name,
      Comment: inputValue,
      commentsCount: prevState.commentsCount,
    }))
  }

  onSubmitFunction = event => {
    event.preventDefault()
    console.log('onSubmitFunction')
    this.setState(prevState => ({
      commentsArray: [
        ...prevState.commentsArray,
        {
          name: prevState.name,
          Comment: prevState.Comment,
          id: uuidv4(),
          isLiked: false,
        },
      ],
      name: '',
      Comment: '',
      commentsCount: prevState.commentsCount + 1,
    }))
  }

  onClickLikeBtn = id => {
    console.log(id)
    this.setState(prevState => ({
      commentsArray: prevState.commentsArray.map(each => {
        if (each.id === id) {
          return {...each, isLiked: !each.isLiked}
        }
        return each
      }),
      name: prevState.name,
      Comment: prevState.Comment,
      commentsCount: prevState.commentsCount,
    }))
  }

  onClickDeleteBtn = id => {
    console.log('delete button is clicked')
    this.setState(prevState => ({
      commentsArray: prevState.commentsArray.filter(each => each.id !== id),
      name: prevState.name,
      Comment: prevState.Comment,
      commentsCount: prevState.commentsCount - 1,
    }))
  }

  render() {
    const {commentsArray, name, Comment, commentsCount} = this.state
    return (
      <div className="bg-container">
        <div className="firstDiv">
          <div className="firstChild1">
            <h1>Comments</h1>
            <form onSubmit={this.onSubmitFunction} className="formContainer">
              <p>say something about 4.0 technologies</p>
              <input
                onChange={this.onChangeName}
                placeholder="Your Name"
                type="text"
                value={name}
              />
              <textarea
                onChange={this.onChangeComment}
                rows="5"
                placeholder="Your Comment"
                value={Comment}
              />
              <div>
                <button type="submit">Add Comment</button>
              </div>
            </form>
          </div>
          <div className="firstChild2Comments">
            <div className="imageContiner">
              <img
                className="image"
                alt="comments"
                src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              />
            </div>
          </div>
        </div>
        <ul className="secondDiv">
          <hr />
          <li className="secondChild1">
            <div className="innerSecondChild1">
              <span>{commentsCount}</span>
              <p> Comments</p>
            </div>
          </li>
          {commentsArray.map(eachItem => (
            <CommentItem
              key={eachItem.id}
              onClickDeleteBtn={this.onClickDeleteBtn}
              onClickLikeBtn={this.onClickLikeBtn}
              classList={initialContainerBackgroundClassNames}
              details={eachItem}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default Comments
