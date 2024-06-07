import { MdPostAdd, MdMessage } from 'react-icons/md';


import classes from '../styles/MainHeader.module.css';

function MainHeader({ onCreatePost }) {
  
  return (
    <header className={classes.header}>
      <h1 className={classes.logo}>
        <MdMessage />
        React Poster
      </h1>
      <p>
        <button className={classes.button} onClick={onCreatePost}>
          <MdPostAdd size={18} />
          Nueva Nota
        </button>
      </p>
    </header>
  );
}

export default MainHeader;