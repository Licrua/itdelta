import classes from './Loader.module.scss';

const Loader = () => {
  return (
    <div className={classes.loaderWrapper}>
      <div className={classes.loader}></div>
    </div>
  );
};

export default Loader;
