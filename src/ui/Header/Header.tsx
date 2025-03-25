import classes from './Header.module.scss';
import Avatar from './Avatar/Avatar.tsx';
import CustomButton from '../CustomButton/CustomButton.tsx';
import { Message, Call } from '../../shared/svg.module.tsx';
const imageUrl = `${process.env.PUBLIC_URL}/images/banner_image.png`;

interface HeaderProps {
  name: string;
}

const Header = ({ name }: HeaderProps) => {
  const avatar = require('./Avatar/avatar.jpg');
  const openLink = (to: string): void => {
    window.open(to, '_blank');
  };

  return (
    <header className={classes.header}>
      <div
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
        className={classes.picture}
      ></div>
      <div className={classes.bio}>
        <Avatar image={avatar} />
        <div className={classes.info}>
          <h1>{name}</h1>
          <div className={classes.buttons}>
            <CustomButton
              svg={<Message />}
              text={'Message'}
              onClick={() => openLink('mailto:ex@mail.com')}
            />
            <CustomButton
              svg={<Call />}
              text={'Call'}
              onClick={() => openLink('tel:89998880909')}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
