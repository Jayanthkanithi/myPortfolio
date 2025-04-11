import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero" id="home">
      <div className="hero__content">
        <img
          src="/jayanth.png"
          alt="Kanithi Jayanth Babu"
          className="hero__image"
        />
        <div>
          <h1>Hey, I'm Jayanth 👋</h1>
          <p>
            Full Stack Web Developer | Passionate about building responsive
            UIs, scalable apps, and solving real-world problems.
          </p>
          <a href="/Resume-KanithiJayanthBabu.pdf" download className="resume-button">
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
export default HeroSection;