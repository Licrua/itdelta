import classes from './CardItem.module.scss';

interface CardItemProps {
  id: number;
  url: string;
  onPhotoClick: (id: number, url: string) => void;
}

const CardItem = ({ id, url, onPhotoClick }: CardItemProps) => {
  return (
    <figure className={classes.cardItem}>
      <img
        loading="lazy"
		width={431}
		height={216}
        src={url}
        alt={`Img ${id}`}
        onClick={() => onPhotoClick(id, url)}
      />
      <figcaption className={classes.cardDescription}>id: {id}</figcaption>
    </figure>
  );
};

export default CardItem;
