export default function Skills() {
  return (
    <section id="skills" className="skills">
      <h1 className="section-title">Compétences</h1>

      <div className="skills-grid">

        <div className="project-card">
            <h3>Frontend</h3>
            <ul>
              <li>React</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
            </ul>
          </div>

          <div className="project-card">
            <h3>Backend</h3>
            <ul>
              <li>Python</li>
              <li>SQL</li>
              <li>Node.js</li>
              <li>PHP</li>
            </ul>
          </div>

          <div className="project-card">
            <h3>Outils</h3>
            <ul> 
              <li>Git</li>
              <li>Github</li>
              <li>VsCode</li>
              <li>Lm studio/Ollama</li>
            </ul>
          </div>

        </div>
      
      <br></br>
      <h1 className="section-title">Diplômes</h1>

      <div className="project-card">
        <h3>Bachelor en Cybersécurité</h3>
        <p>Aujourd’hui en Bachelor informatique, j’explore le développement, la cybersécurité et la data, un parcours qui me permet de combiner logique, créativité et analyse.</p>
      </div>

        <br></br>
      <div className="project-card">
        <h3>Baccalauréat Technologique</h3>
        <p>J’ai obtenu un bac STMG spécialité gestion‑finance, où j’ai développé une vraie rigueur, le sens de l’organisation et une bonne compréhension des enjeux économiques.</p>
      </div>

    </section>
  );
}
