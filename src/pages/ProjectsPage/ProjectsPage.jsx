// data
import projects from '../../data/projects';

// styles
import classes from './styles.module.css';

export default function ProjectsPage() {
  return (
    <div className={classes.root}>
      <div className={`container ${classes.container}`}>
        {projects.map((projectData, ind) =>
          <div key={ind} className={classes.project}>
            <p className={classes.title}>{projectData.title}</p>
            <p className={classes.whatIs}>{projectData.whatIs}</p>
            <a href={projectData.link} target='_blank'>demo</a>
          </div>
        )}
      </div>
    </div>
  )
}