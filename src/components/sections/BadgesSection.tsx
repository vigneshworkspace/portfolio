import { BADGES } from '@/lib/badges';
import { Badge } from '@/components/ui/badge';

export default function BadgesSection() {
    return (
        <section id="badges" className="responsive-padding relative">
            <div className="full-width-container">
                <p className="section-title mb-20 text-center">05 // Skills & Achievements</p>
                <div className="border border-dashed border-border/50 p-12 rounded-lg">
                    <div className="flex flex-wrap justify-center gap-6">
                        {BADGES.map((badgeText, index) => (
                            <Badge 
                                key={index}
                                variant="secondary"
                                className="responsive-text font-headline px-8 py-4 transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
                            >
                                {badgeText}
                            </Badge>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
