import Image from 'next/image';
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero" id="home">
      <div className="hero__content">
      import Image from 'next/image';

        <Image src="/jayanth.png" alt="me" width={160} height={160} className="hero__image" />

        <div>
          <h1>Hey, I&rsquo;m Jayanth 👋</h1>
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