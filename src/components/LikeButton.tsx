import { useLikes } from '../context/LikesContext'

function LikeButton() {
  const { likes, addLike } = useLikes()

  return (
    <button type="button" className="btn" onClick={addLike}>
      💜 Like ({likes})
    </button>
  )
}

export default LikeButton