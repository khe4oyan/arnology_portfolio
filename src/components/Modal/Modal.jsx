import ReactDOM from 'react-dom'

// styles
import classes from './styles.module.css';

export default function Modal({ children, closeHandle }) {
  return ReactDOM.createPortal(
    <div className={classes.root}>
      <div className={classes.content}>
        <button className={classes.closeButton} onClick={closeHandle}>x</button>
        {children}
      </div>
    </div>,
    document.getElementById("modal")
  )
}