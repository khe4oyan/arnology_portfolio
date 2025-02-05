// styles
import classes from './styles.module.css';

export default function AboutPage() {
  return (
    <div className={classes.root}>
      <div className={`container ${classes.container}`}>
        <p>
          Back in 2020, I decided to try my hand at creating interactive web
          applications and plunged headfirst into the rabbit hole of coding and
          web development. Fast forward to today: I have the honor of creating
          software for{" "}
          <a href="https://picsartacademy.am/" target="_blank" rel="noreferrer">
            Picsart Academy{" "}
          </a>
          {"— "}
          <a href="https://chessnoor.khechoyan.xyz//" target="_blank" rel="noreferrer">
            Chessnoor
          </a>.
        </p>
        <p>
          Now I am focused on creating accessible user interfaces. I most enjoy
          creating software where design and engineering meet — things that look
          good but are also well-constructed under the hood.
        </p>
        <p>
          When I'm not at the computer, I usually spend my time reading, hanging
          out with friends, and spending time with family.
        </p>
      </div>
    </div>
  )
}