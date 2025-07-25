const steps = [
    {
        step: "01",
        title: "Discover & Define",
        description: "I start by understanding the core problem, defining project goals, and mapping out the technical requirements for both the system architecture and the AI model."
    },
    {
        step: "02",
        title: "Design & Develop",
        description: "This phase involves iterative development—building APIs, designing the user interface, and training the initial models. I focus on clean, modular code and continuous testing."
    },
    {
        step: "03",
        title: "Deploy & Refine",
        description: "Once the core product is stable, I deploy it using containerization and CI/CD pipelines. I then monitor performance, gather feedback, and refine the models and features."
    }
]

export default function MethodologySection() {
    return (
        <section id="methodology" className="responsive-padding">
            <div className="full-width-container">
                <p className="section-title mb-20 text-center">03 // My Process</p>
                <div className="grid md:grid-cols-3 gap-16 text-center">
                    {steps.map((item) => (
                        <div key={item.step} className="border border-dashed border-border/50 p-12 rounded-lg">
                           <div className="mb-10">
                               <span className="font-headline font-bold responsive-heading text-accent">{item.step}</span>
                           </div>
                            <h4 className="font-bold font-headline responsive-subheading mt-10 mb-8 uppercase tracking-wider">{item.title}</h4>
                            <p className="responsive-body text-muted-foreground max-w-lg mx-auto font-mono leading-relaxed">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
