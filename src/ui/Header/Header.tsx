import classes from './Header.module.scss';
import Avatar from './Avatar/Avatar.tsx';
import CustomButton from '../CustomButton/CustomButton.tsx';
import { Message, Call } from '@assets/icons/svg.module.tsx';
import avatar from '@assets/icons/avatar.jpg';
const imageUrl = `${process.env.PUBLIC_URL}/images/banner_image.png`;

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
              onClick={() => openLink('mailto:example@mail.com')}
            />
            <CustomButton
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
