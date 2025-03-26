import classes from './ModalWindow.module.scss';
import useFetchData from '@src/hooks/useFetchData.tsx';
import CommentList from '../CommentList/CommentList.tsx';
import Loader from '@src/ui/Loader/Loader.tsx';
import CustomButton from '@src/ui/CustomButton/CustomButton.tsx';

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

  if (loading) return <Loader />;
  if (error) return <p>Ошибка: {error}</p>;

  return (
    <div
      className={`${classes.modalWindow} ${show ? classes.show : ''}`}
      onClick={handleClose}
    >
      <div className={classes.content} onClick={(e) => e.stopPropagation()}>
        <img src={data?.image} loading="lazy" alt={`img ${id}`} />
        <form action="">
          <label htmlFor="comment">Комментарии</label>
          <textarea name="comment" id="comment"></textarea>
          <strong>Введите комментарий</strong>
          <CustomButton className="violet" text="Сохранить" onClick={handleClose} />
        </form>
        {data && <CommentList comments={data.comments} />}
      </div>
    </div>
  );
};

export default ModalWindow;
