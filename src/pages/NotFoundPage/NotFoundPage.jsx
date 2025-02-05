// libs
import { useNavigate } from 'react-router-dom';

// styles
import classes from './styles.module.css';

export default function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div className={classes.root}>
      <div>
        <p><span>404</span> | page not found</p>
        <button onClick={() => navigate(-1)}>back</button>
      </div>
    </div>
  )
}