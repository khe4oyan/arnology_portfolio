// data
import projects from '../../data/projects';

// styles
import classes from './styles.module.css';

export default function ProjectsPage() {
  return (
    <div className={`container ${classes.root}`}>
      {projects.map((projectData, ind) =>
        <div key={ind} className={classes.project}>
          <p className={classes.title}>{projectData.title}</p>
          <p className={classes.whatIs}>{projectData.whatIs}</p>
          <a href={projectData.link}>demo</a>
        </div>
      )}
    </div>
  )
}