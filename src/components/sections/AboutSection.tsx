import { SKILLS } from '@/lib/data';

export default function AboutSection() {
    return (
        <section id="about" className="responsive-padding">
            <div className="full-width-container">
                <p className="section-title mb-16 text-center">01 // About</p>
                <div className="grid lg:grid-cols-3 gap-16 items-baseline">
                    <div className="lg:col-span-1">
                        <h3 className="font-bold font-headline responsive-subheading uppercase tracking-wider mb-8">My Philosophy</h3>
                    </div>
                    <div className="lg:col-span-2">
                        <p className="responsive-body text-muted-foreground leading-relaxed font-mono">
                            I see technology as a bridge between data and human experience. My passion lies at the intersection of full-stack engineering and artificial intelligence—building robust backends, intuitive frontends, and integrating intelligent models that solve real-world problems. I believe in a holistic approach, where every line of code contributes to a product that is not only functional but also elegant and efficient.
                        </p>
                    </div>
                </div>
                 <div className="grid lg:grid-cols-3 gap-16 mt-24 items-baseline">
                    <div className="lg:col-span-1">
                        <h3 className="font-bold font-headline responsive-subheading uppercase tracking-wider mb-8">Competencies</h3>
                    </div>
                    <div className="lg:col-span-2 space-y-10">
                        {SKILLS.map((skill) => (
                             <div key={skill.title}>
                                <h4 className="font-headline responsive-text font-bold mb-6 uppercase tracking-wider">{skill.title}</h4>
                                <p className="responsive-body text-muted-foreground leading-relaxed font-mono">{skill.technologies}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
