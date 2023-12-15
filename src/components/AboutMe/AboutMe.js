import React from "react";
import profileImage from "../../images/marlon-nunez.png";
import "./AboutMe.css";
import { useHistory } from "react-router-dom";

function AboutMe() {
  let history = useHistory();
  const handleEducationLink = () => {
    history.push("/education");
  };
  const handleCodingLink = () => {
    history.push("/code");
  };
  return (
    <section className="about-me">
      <div>
        <h2 className="about-me__title">A teacher, turned project manager, turned full-stack engineer...</h2>
      </div>
      <div className="about-me__container">
        <div>
          <p className="about-me__text">
            In 2018, I embarked on my professional journey as a teacher after graduating from Tulane University. The pursuit of education led me to Boston
            University, where in 2020, I earned my master's degree in education. However, it became evident that my true calling extended beyond the confines of
            the classroom. This realization prompted my exploration into the realm of project management.
          </p>
          <p className="about-me__text">
            During this period, I had the unique opportunity to shadow and collaborate closely with professionals across various domains, including ops, product
            managers, designers, data analyts, and engineers. This exposure sparked a profound passion for the world of innovation, technology, and data-driven
            decision-making. Fueled by newfound curiosity, I delved into programming languages like Python, finding their capabilities captivating. This marked
            the turning point in my career trajectory, and I decided it was time to wholeheartedly commit to a future in technology.
          </p>
          <p className="about-me__text">
            After thorough exploration, I opted to enroll in a 10-month-long software engineering bootcamp. The journey that followed was characterized by
            unwavering dedication and countless hours of study. Today, a mere 10 months later, I find myself designing full-stack applications, proficient in a
            range of languages, frameworks, stacks, and tools.
          </p>
          <p className="about-me__text">
            As a lifelong learner who has explored diverse fields such as neuroscience, public health, education, and project management, I've cultivated an
            attitude of embracing challenges, resilience, growth, and, above all, failure. Each obstacle encountered is viewed as an opportunity for continuous
            personal and professional development.
          </p>
        </div>
        <img className="about-me__image" src={profileImage} alt="Marlon Nunez"></img>
      </div>
      <div className="about-me__container-buttons">
        <button className="about-me__button" type="button" onClick={handleEducationLink}>
          Education
        </button>
        <button className="about-me__button" type="button" onClick={handleCodingLink}>
          Skills and Languages
        </button>
      </div>
    </section>
  );
}

export default AboutMe;
