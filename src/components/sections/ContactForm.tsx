"use client";

import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function ContactForm() {
    const { toast } = useToast();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // This is a dummy handler. In a real app, you'd send this data.
        toast({
            title: "Message Sent!",
            description: "Thanks for reaching out. I'll get back to you soon.",
        });
        (e.target as HTMLFormElement).reset();
    };

    return (
        <Card className="p-12 bg-card/50 backdrop-blur-sm border border-dashed border-border/50 group-hover:border-primary transition-all duration-300">
            <h3 className="responsive-subheading font-bold font-headline mb-10 text-center uppercase tracking-wider">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-10">
                <div className="space-y-4">
                    <Input type="text" placeholder="Your Name" required className="h-16 bg-muted/50 font-mono responsive-body"/>
                </div>
                <div className="space-y-4">
                    <Input type="email" placeholder="Your Email" required className="h-16 bg-muted/50 font-mono responsive-body"/>
                </div>
                <div className="space-y-4">
                    <Textarea placeholder="Your Message" rows={8} required className="bg-muted/50 font-mono responsive-body"/>
                </div>
                <Button type="submit" className="w-full h-16 font-headline uppercase responsive-text tracking-widest group/btn">
                    Send Message
                    <Send className="ml-4 h-6 w-6 group-hover/btn:translate-x-1 transition-transform"/>
                </Button>
            </form>
        </Card>
    );
}
