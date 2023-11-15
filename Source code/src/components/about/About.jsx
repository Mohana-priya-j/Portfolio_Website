import "./about.css";
import Award from "../../img/award.png";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src="https://img.freepik.com/premium-photo/beautiful-model-takes-photo-with-analog-camera_320358-26.jpg"
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
        An adept designer and coder seamlessly blending creativity with precision, crafting visually compelling narratives and architecting seamless digital experiences
        </p>
        <p className="a-desc">
        Fusing creativity and code, I'm a dynamic force in UI/UX design and web development. 
        With a passion for visual aesthetics and a knack for cutting-edge technologies, I craft immersive digital experiences that resonate. 
        From captivating designs to seamless, high-performance websites, I specialize in turning visions into a compelling online reality. 
        Let's collaborate to elevate your brand and create a digital landscape that stands out.
        </p>
        <div className="a-award">
          <img src={Award} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">International Design Awards 2021</h4>
            <p className="a-award-desc">
            My portfolio proudly boasts multiple international design awards, highlighting my skill in creating visually stunning and award-winning digital experiences. 
            Each project reflects a perfect blend of creativity and functionality, earning recognition from global design communities. 
            I'm dedicated to innovation and aesthetic excellence, evident in every detail of my work.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
