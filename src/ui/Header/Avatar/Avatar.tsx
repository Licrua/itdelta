import React from 'react';
import classes from './Avatar.module.scss';

interface AvatarProps {
  image: string;
}

const Avatar = ({ image }: AvatarProps) => {
  return (
    <div className={classes.avatar}>
      <img src={image} alt="avatar" />
    </div>
  );
};

export default Avatar;
