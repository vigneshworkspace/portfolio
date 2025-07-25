import { Button } from "@/components/ui/button";
import { GITHUB_URL, LINKEDIN_URL } from "@/lib/data";
import { Github, Linkedin, Mail } from "lucide-react";
import { Card } from "@/components/ui/card";
import ContactForm from "./ContactForm";

export default function ContactSection() {
    const email = "vignesh.aidev@gmail.com";
    return (
        <section id="contact" className="responsive-padding">
            <div className="full-width-container">
                <div className="text-center mb-24">
                    <p className="section-title mb-8">07 // Get In Touch</p>
                    <h2 className="responsive-heading font-bold font-headline uppercase tracking-wider">Let's Connect</h2>
                    <p className="max-w-4xl mx-auto text-muted-foreground mt-8 responsive-body font-mono">
                        Have a question or want to work together? I'd love to hear from you.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-20 items-start">
                    <div className="group">
                        <Card className="p-12 bg-card/50 backdrop-blur-sm border border-dashed border-border/50 group-hover:border-primary transition-all duration-300">
                            <h3 className="responsive-subheading font-bold font-headline mb-10 text-center uppercase tracking-wider">Contact Info</h3>
                            <div className="space-y-10">
                                <a href={`mailto:${email}`} className="flex items-center gap-8 group/item p-6 rounded-lg hover:bg-muted/50 transition-colors">
                                    <Button variant="outline" size="icon" className="h-20 w-20 flex-shrink-0">
                                        <Mail className="h-8 w-8"/>
                                    </Button>
                                    <div>
                                        <p className="font-headline text-muted-foreground responsive-small">Email</p>
                                        <p className="font-mono responsive-body group-hover/item:text-primary transition-colors">{email}</p>
                                    </div>
                                </a>
                                <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-8 group/item p-6 rounded-lg hover:bg-muted/50 transition-colors">
                                    <Button variant="outline" size="icon" className="h-20 w-20 flex-shrink-0">
                                    <Github className="h-8 w-8"/>
                                    </Button>
                                    <div>
                                        <p className="font-headline text-muted-foreground responsive-small">GitHub</p>
                                        <p className="font-mono responsive-body group-hover/item:text-primary transition-colors">{GITHUB_URL.replace('https://', '')}</p>
                                    </div>
                                </a>
                                <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-8 group/item p-6 rounded-lg hover:bg-muted/50 transition-colors">
                                    <Button variant="outline" size="icon" className="h-20 w-20 flex-shrink-0">
                                        <Linkedin className="h-8 w-8"/>
                                    </Button>
                                    <div>
                                        <p className="font-headline text-muted-foreground responsive-small">LinkedIn</p>
                                        <p className="font-mono responsive-body group-hover/item:text-primary transition-colors">{LINKEDIN_URL.replace('https://www.', '')}</p>
                                    </div>
                                </a>
                            </div>
                        </Card>
                    </div>
                    <div className="group">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </section>
    );
}
