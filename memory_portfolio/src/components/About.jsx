import photo from "../assets/Image.jpeg";


export default function About() {
  return (
    <section id="about" className="about">
      <div className="about-content">
        <h2>À <span>Propos *</span></h2>

        <p>
          Passionnée par le développement et la cybersécurité, j’aime comprendre comment les choses fonctionnent, créer des solutions utiles et améliorer mes projets au fil de mes apprentissages.<br></br>

        <br></br>Curieuse et autonome, j’avance en testant, en explorant de nouvelles idées et en gardant une approche à la fois rigoureuse et créative.<br></br>

        <br></br> Ce qui me démarque : je m’investis vraiment dans ce que je fais, avec l’envie d’apprendre et de progresser à chaque étape !!
        </p>

      </div>

      <div className="about-img">
        <img src={photo} alt="About Image" />
      </div>

    </section>
  );
}
