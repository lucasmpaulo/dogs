import React from 'react';
import { UserContext } from '../../UserContext';
import PhotoCommentsForm from './PhotoCommentsForm';
import styles from './PhotoComments.module.css';

const PhotoComments = (props) => {
  const [comments, setComments] = React.useState(() => props.comments);
  const commentsSection = React.useRef(null);
  const { login } = React.useContext(UserContext);

  // Efeito de scroll nos comentários da foto
  React.useEffect(() => {
    commentsSection.current.scrollTop = commentsSection.current.scrollHeight;
  },[comments])

  return (
    <>
      <ul ref={commentsSection} className={styles.comments}>
        {comments.map(comment => <li key={comment.comment_ID}>
          <b>{comment.comment_author}: {comment.comment_content}</b>
        </li>)}
      </ul>
      {login &&  <PhotoCommentsForm id={props.id} setComments={setComments} /> }
    </>
  );
};

export default PhotoComments;
