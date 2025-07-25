export default function Footer() {
    return (
        <footer className="border-t border-border">
            <div className="full-width-container h-40 flex justify-center items-center">
                <p className="font-headline responsive-small text-muted-foreground">&copy; {new Date().getFullYear()} VIGNESHWARAN. ALL RIGHTS RESERVED.</p>
            </div>
        </footer>
    );
}
