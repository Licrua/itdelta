import classes from './Avatar.module.scss';

interface AvatarProps {
  image: string;
}

const Avatar = ({ image }: AvatarProps) => {
  return (
    <div className={classes.avatar}>
      <img src={image} width={128} height={128} alt="avatar" />
    </div>
  );
};

export default Avatar;
