export default function About() {
  return (
    <section id="home" className="about">
      <div className="about-content">
        <h1>Hey!, I'm <span>Apiqueen ^-^</span></h1>
        <h2>Étudiante en informatique</h2>

        <p>
          En première année d'informatique, je me concentre sur les domaines qui m'intéressent le plus : la cybersécurité, l'IA, la data et le développement web.
        </p>

        <div className="social-icons">
          <a href="https://github.com/celiacml"><i className="bx bxl-github"></i></a>
          <a href="https://www.linkedin.com/in/c%C3%A9lia-marie-louise-7b38283a0/"><i className="bx bxl-linkedin"></i></a>
          {/* <a href="#"><i className="bx bx-envelope"></i></a> */}
        </div>
      </div>

    </section>
  );
}
