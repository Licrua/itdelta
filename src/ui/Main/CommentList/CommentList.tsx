import classes from './CommentList.module.scss';



type Comment = {
  id: number;
  text: string;
};

type CommentListProps = {
  comments: Comment[];
};

const CommentList = ({ comments }: CommentListProps) => {
  return (
    <div className={classes.commentList}>
      <h3>All comments:</h3>
      <ul>
        {comments.length > 0 ? (
          comments.map((comment) => <li key={comment.id}>{comment.text}</li>)
        ) : (
          <p>комментариев пока нет</p>
        )}
      </ul>
    </div>
  );
};

export default CommentList;
