import { CERTIFICATIONS } from '@/lib/data';
import { Card } from '@/components/ui/card';
import CertificationIcon from '@/components/icons/CertificationIcon';
import { ArrowRight } from 'lucide-react';

export default function CertificationsSection() {
    return (
        <section id="certifications" className="responsive-padding relative">
            <div className="full-width-container">
                <p className="section-title mb-20 text-center">06 // Certifications</p>
                <div className="grid md:grid-cols-2 gap-10">
                    {CERTIFICATIONS.map((cert) => (
                        <a 
                            key={cert.title} 
                            href={cert.link} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="group relative block"
                        >
                            <Card className="h-full bg-card/50 backdrop-blur-sm border-dashed border border-border/50 transition-all duration-300 group-hover:bg-muted/50">
                                <div className="p-10 flex items-center justify-between">
                                    <div className="flex items-center gap-10">
                                        <div className="flex-shrink-0">
                                            <CertificationIcon title={cert.title} />
                                        </div>
                                        <div>
                                            <h4 className="font-headline responsive-text uppercase tracking-wider text-foreground group-hover:text-primary transition-colors duration-300">{cert.title}</h4>
                                            <p className="font-headline responsive-body text-muted-foreground">{cert.issuer}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 text-muted-foreground group-hover:text-primary transition-colors duration-300">
                                       <span className="responsive-small font-mono hidden sm:inline">View</span>
                                       <ArrowRight className="h-6 w-6 transform transition-transform duration-300 group-hover:translate-x-1" />
                                    </div>
                                </div>
                            </Card>
                             {/* Animated borders */}
                            <span className="absolute bottom-0 left-0 h-0 w-1 bg-primary transition-all duration-300 group-hover:h-full"></span>
                            <span className="absolute bottom-0 left-0 h-1 w-0 bg-primary transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
