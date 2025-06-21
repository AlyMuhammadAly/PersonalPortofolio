import { ArrowRight, ExternalLink, Github } from "lucide-react";
import StarBackground from "./StarBackground";

function ProjectsSection() {
  const projects = [
    {
      title: "",
      description: "",
      image: "",
      stack: ["React", "Python"],
      gitHubUrl: "",
      demoUrl: "",
    },
    {
      title: "",
      description: "",
      image: "",
      stack: ["React", "Python"],
      gitHubUrl: "",
      demoUrl: "",
    },
    {
      title: "",
      description: "",
      image: "",
      stack: ["React", "Python"],
      gitHubUrl: "",
      demoUrl: "",
    },
    {
      title: "",
      description: "",
      image: "",
      stack: [],
      gitHubUrl: "",
      demoUrl: "",
    },
    {
      title: "",
      description: "",
      image: "",
      stack: [],
      gitHubUrl: "",
      demoUrl: "",
    },
  ];

  return (
    <section id="projects" className="py-24 px-4 relative">
      <StarBackground />
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured<span className="text-primary"> Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          I create stellar web experiences with modern technologies.
          Specializing in front-end development, I build interfaces that are
          both beautiful and functional.
        </p>

        <div className="grid grid-cols-1 md:grid-col-2 lg:grid-cols-3">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.stack.map((technology) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {technology}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.title}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.gitHubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com"
          >
            Check My GitHub <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
