import classes from './Header.module.scss';
import Avatar from './Avatar/Avatar.tsx';
import CustomButton from '../CustomButton/CustomButton.tsx';
import { Message, Call } from '@assets/icons/svg.module.tsx';
import avatar from '@assets/icons/avatar.jpg';
import banner from '@assets/icons/banner_image.png';

interface HeaderProps {
  name: string;
}

const Header = ({ name }: HeaderProps) => {
  const openLink = (to: string): void => {
    window.open(to, '_blank');
  };

  return (
    <header className={classes.header}>
      <div
        style={{
          backgroundImage: `url(${banner})`,
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
              type="button"
              svg={<Message />}
              text={'Message'}
              onClick={() => openLink('mailto:example@mail.com')}
            />
            <CustomButton
              type="button"
              svg={<Call />}
              text={'Call'}
              onClick={() => openLink('tel:89451455443')}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
