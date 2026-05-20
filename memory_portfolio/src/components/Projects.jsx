import { useState, useEffect } from "react";  

// Liste des repos GitHub à afficher — seule ligne à modifier pour ajouter/supprimer un projet
const repos = [
  "celiacml/Eliza-Projet-Epitech",
  "celiacml/Alice-In-Wonderland-Projet-Epitech",
  "celiacml/Nextbuy-Projet-Epitech",
  "celiacml/Tardis-Projet-Epitech",
  "celiacml/Yowl-Projet-Epitech",
  "celiacml/Hack-Juice-Projet-Epitech",
  "celiacml/Etodo-Projet-Epitech",
  "celiacml/Portfolio1-Projet-Epitech",
];

export default function Projects() {
  // Stocke les projets récupérés depuis l'API GitHub
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      // Fetch tous les repos en parallèle
      const results = await Promise.all(
        repos.map(async (repo) => {
          const res = await fetch(`https://api.github.com/repos/${repo}`, {
            headers: {
              // Header nécessaire pour récupérer les topics GitHub
              Accept: "application/vnd.github.mercy-preview+json",
            },
          });
          const data = await res.json();

          // On extrait uniquement les champs utiles pour l'affichage
          return {
            id: data.id,
            title: data.name?.toUpperCase(),        // Nom du repo en majuscules
            description: data.description || "",    // Description renseignée dans "About"
            tags: data.topics || [],                // Topics renseignés dans "About"
            github: data.html_url,                  // Lien vers le repo
          };
        })
      );

      setProjects(results);
    };

    fetchProjects();
  }, []); // [] = exécuté une seule fois au chargement de la page

  return (
    <section id="projects" className="projects">
      <h1 className="section-title">Mes Projets</h1>
      <div className="projects-grid">

        {/* Une carte par projet récupéré */}
        {projects.map((project) => (
          <div className="project-card" key={project.id}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>

            {/* Tags générés depuis les topics GitHub */}
            <div className="tags">
              {project.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>

            {/* Lien vers le repo GitHub */}
            <div className="project-links">
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <i className="bx bxl-github"></i>
              </a>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}