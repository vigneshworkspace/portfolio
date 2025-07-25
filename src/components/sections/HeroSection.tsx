"use client";

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import FadeInSection from '../animations/FadeInSection';

export default function HeroSection() {
    return (
        <section id="home" className="min-h-screen flex flex-col justify-center relative">
            <div className="responsive-padding relative z-10 full-width-container">
              <FadeInSection>
                  <h1 className="responsive-heading font-headline tracking-widest uppercase font-bold">
                      Vigneshwaran
                  </h1>
              </FadeInSection>
               <FadeInSection>
                <p className="mt-12 max-w-6xl responsive-body text-muted-foreground font-headline tracking-wider leading-relaxed">
                    Full Stack & AI Developer crafting intelligent, end-to-end solutions.
                </p>
               </FadeInSection>
                <FadeInSection>
                  <div className="mt-16 flex flex-col sm:flex-row justify-start gap-8">
                      <Button asChild size="lg" className="font-headline uppercase responsive-text tracking-widest px-12 py-8 h-auto">
                          <Link href="#projects">View Projects</Link>
                      </Button>
                       <Button asChild variant="outline" size="lg" className="font-headline uppercase responsive-text tracking-widest px-12 py-8 h-auto">
                          <Link href="#contact">Get In Touch</Link>
                      </Button>
                  </div>
                </FadeInSection>
            </div>
        </section>
    );
}
