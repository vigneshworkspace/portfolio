"use client";
import { EXPERIENCE } from '@/lib/data';
import { useEffect, useRef } from 'react';

export default function ExperienceSection() {
    const companiesToHighlight = ["Novitech R&D pvt ltd", "EK technolegies"];
    const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-in');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
        );

        itemsRef.current.forEach((item) => {
            if (item) {
                observer.observe(item);
            }
        });

        return () => {
            itemsRef.current.forEach((item) => {
                if (item) {
                    observer.unobserve(item);
                }
            });
        };
    }, []);

    return (
        <section id="experience" className="responsive-padding">
            <div className="full-width-container">
                <p className="section-title mb-20 text-center">02 // Experience</p>
                <div className="relative">
                    {/* Vertical line */}
                    <div className="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 bg-border border-dashed"></div>

                    <div className="space-y-24">
                        {EXPERIENCE.map((exp, index) => {
                            const isLeft = index % 2 === 0;
                            return (
                                <div
                                    key={index}
                                    ref={(el) => {
                                        itemsRef.current[index] = el;
                                    }}
                                    className={`fade-in-up flex items-center ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}
                                >
                                    {/* Card Content */}
                                    <div className={`w-1/2 ${isLeft ? 'pr-12 text-right' : 'pl-12 text-left'}`}>
                                        <div className="p-10 bg-card/50 backdrop-blur-sm border border-dashed border-border/50 rounded-lg group transition-all duration-300 hover:border-primary hover:shadow-2xl hover:-translate-y-1">
                                            <p className="font-headline responsive-small text-muted-foreground">{exp.date}</p>
                                            <h3 className="font-bold font-headline responsive-subheading mt-3 uppercase tracking-wider">
                                                {companiesToHighlight.includes(exp.company) ? (
                                                    <span className="text-primary">{exp.company}</span>
                                                ) : (
                                                    exp.company
                                                )}
                                            </h3>
                                            <h4 className="font-headline responsive-text uppercase tracking-wider text-muted-foreground/80">{exp.title}</h4>
                                            <p className="text-muted-foreground mt-6 responsive-body leading-relaxed font-mono">{exp.description}</p>
                                        </div>
                                    </div>
                                    {/* Timeline Dot */}
                                    <div className="relative z-10">
                                        <div className="h-8 w-8 bg-primary rounded-full border-4 border-background ring-4 ring-primary/20 shadow-lg"></div>
                                    </div>
                                    {/* Spacer */}
                                    <div className="w-1/2"></div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
