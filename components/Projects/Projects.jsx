import Link from "next/link";
import React from "react";
import Head from "../Head/Head";
import Project from "../Project/Project";
import styles from "./projects.module.css";
const Projects = ({ projects }) => {
  return (
    <div className={styles.projects}>
      <Head title="Some Things I’ve Built" />
      <div className={styles.projects_main}>
        {projects.map((item) => {
          return <Project key={item._id} project={item} />;
        })}
        <div className={styles.see_all_btn}>
          <Link href="https://github.com/agasefamircan" target="_blank">
            <button type="button">See All</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Projects;
