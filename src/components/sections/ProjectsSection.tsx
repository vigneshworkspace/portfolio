"use client";

import { PROJECTS } from '@/lib/data';
import { ProjectCard } from './ProjectCard';

export default function ProjectsSection() {
    return (
        <section id="projects" className="responsive-padding">
            <div className="text-center mb-24">
                <p className="section-title mb-8">04 // Featured Creations</p>
                <h2 className="responsive-heading font-bold font-headline uppercase tracking-wider">My Universe</h2>
                <div className="w-40 h-3 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mt-8" />
            </div>
            
            <div className="grid lg:grid-cols-3 gap-12">
                {PROJECTS.map((project, index) => (
                    <ProjectCard key={project.id} project={project} index={index} />
                ))}
            </div>
        </section>
    );
}
