import { Project } from "@/types/Project";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="p-6 bg-gray-800 rounded-xl shadow-lg hover:scale-105 transform transition-all">
      <img src={project.image} alt={project.title} className="w-full h-40 object-cover rounded-lg mb-4"/>
      <h3 className="text-2xl font-semibold">{project.title}</h3>
      <p className="mt-2 text-gray-300">{project.description}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {project.techStack.map((tech) => (
          <span key={tech} className="bg-indigo-600 px-2 py-1 rounded-full text-sm">{tech}</span>
        ))}
      </div>
    </div>
  );
}
