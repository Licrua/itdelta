import classes from './ModalWindow.module.scss';
import useFetchData from '@src/hooks/useFetchData.tsx';
import CommentList from '../CommentList/CommentList.tsx';
import Loader from '@src/ui/Loader/Loader.tsx';
import CustomButton from '@src/ui/CustomButton/CustomButton.tsx';
import { useState } from 'react';

interface Comment {
  id: number;
  text: string;
}

interface PhotoDetails {
  id: number;
  image: string;
  comments: Comment[];
}

type ModalWindowProps = {
  id: number;
  show: boolean;
  handleClose: () => void;
};

const ModalWindow = ({ id, show, handleClose }: ModalWindowProps) => {
  const url = `http://test-backend.itdelta.agency/api/image/${id}`;
  const { data, loading, error } = useFetchData<PhotoDetails>(url);
  console.log('data', data);

  const [comment, setComment] = useState<string>('');

  const handleCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
  };

  const handleCommentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!comment) return;

    try {
      const response = await fetch(
        `http://test-backend.itdelta.agency/api/image/${id}/comments`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ comment }),
        }
      );

      if (response.status === 204) {
        setComment('');
        handleClose();
      } else {
        console.error('Не удалось сохранить комментарий');
      }
    } catch (error) {
      console.error('Ошибка при отправке комментария:', error);
    }
  };

  if (loading) return <Loader />;
  if (error) return <p>Ошибка: {error}</p>;

  return (
    <div
      className={`${classes.modalWindow} ${show ? classes.show : ''}`}
      onClick={handleClose}
    >
      <div className={classes.content} onClick={(e) => e.stopPropagation()}>
        <img src={data?.image} loading="lazy" alt={`img ${id}`} />
        <form onSubmit={handleCommentSubmit}>
          <label htmlFor="comment">Комментарии</label>
          <textarea
            name="comment"
            id="comment"
            value={comment}
            onChange={handleCommentChange}
            placeholder="Введите комментарий"
          />
          <CustomButton type={'submit'} className="violet" text="Сохранить" />
        </form>
        {data && <CommentList comments={data.comments} />}
      </div>
    </div>
  );
};

export default ModalWindow;
