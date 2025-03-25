// import classes from './Loader.module.scss';

// const Loader = () => {
//   return (
//     <div className={classes.wrap}>
//       <div className={classes.loader}>
//         <div className={classes.box1}></div>
//         <div className={classes.box2}></div>
//         <div className={classes.box3}></div>
//       </div>
//     </div>
//   );
// };

// export default Loader;

import classes from './Loader.module.scss'; // Импортируем файл с CSS Modules

const Loader = () => {
  return (
    <div className={classes.loaderWrapper}>
      <div className={classes.loader}></div>
    </div>
  );
};

export default Loader;
