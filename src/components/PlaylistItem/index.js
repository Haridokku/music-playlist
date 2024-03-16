/* eslint-disable jsx-a11y/control-has-associated-label */
import {AiOutlineDelete} from 'react-icons/ai'
import {RiDeleteBin7Line} from 'react-icons/ri'

import './index.css'

const PlaylistItem = props => {
  const {details, onDeletePlayListItem} = props
  const {id, imageUrl, genre, name, duration} = details
  const deleteTrack = () => {
    onDeletePlayListItem(id)
  }

  return (
    <li className="list-item">
      <div className="imgAndGenreContainer">
        <img src={imageUrl} alt="track" className="image" />
        <div className="genreContainer">
          <p className="heading">{name}</p>
          <p className="describe">{genre}</p>
        </div>
      </div>
      <div className="durationAndDeleteContainer">
        <p className="heading">{duration}</p>
        <button
          type="button"
          onClick={deleteTrack}
          className="deleteBtn"
          data-testid="delete"
        >
          <AiOutlineDelete size={20} />
        </button>
      </div>
    </li>
  )
}
export default PlaylistItem
