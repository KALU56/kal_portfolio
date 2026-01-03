"use client";

import { useQuery } from "@tanstack/react-query";
import { projects } from "@/data/projects-data";
import ProjectCard from "@/components/ProjectCard";

export default function Projects() {
  const { data } = useQuery({
    queryKey: ["projects"],       // ✅ query key
    queryFn: () => projects,       // ✅ function returning the data
  });

  return (
    <section className="py-20 bg-gray-900 text-white">
      <h2 className="text-4xl font-bold text-center mb-10">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {data?.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
