import {AiOutlineDelete} from 'react-icons/ai'

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
        <img src={imageUrl} className="image" />
        <div className="genreContainer">
          <h1 className="heading">{name}</h1>
          <p className="describe">{genre}</p>
        </div>
      </div>
      <div className="durationAndDeleteContainer">
        <h1 className="heading">{duration}</h1>
        <button type="button" onClick={deleteTrack} className="deleteBtn">
          <AiOutlineDelete size={20} />
        </button>
      </div>
    </li>
  )
}
export default PlaylistItem
