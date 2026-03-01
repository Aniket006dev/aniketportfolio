import { ArrowRightCircle, Code, DownloadIcon, Github, Linkedin } from "lucide-react";
import { Button } from "../components/Button";
import Highlight from "../components/Highlights";


export const Hero = () => {

    return (
        <section className="relative min-h-screen flex items-center overflow-hidden">
            {/* <div className="absolute inset-0">
                <img src="/hero-bg.jpg" alt="hero-img" className="w-full h-full object-cover opacity-15" />
            </div>
            <div
                className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/30 to-background"
            /> */}
            {/* content */}
            <div className="container mx-auto px-6 pt-32 md:py-28 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* left column -text content */}
                    <div className="space-y-8">
                        <div className="animate-fade-in">
                            <span className="inline-flex border border-primary/30 bg-background items-center gap-2 px-4 py-2 rounded-full text-sm ">
                                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" /> Software Developer cum Engineer
                            </span>
                        </div>
                        <div className="space-y-4">
                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                                Building <span className="text-primary glow-text">digital</span>
                                <br />
                                <span className="text-primary glow-text">experiences</span> with
                                <br />
                                <span className="font-serif italic font-normal text-white">precision</span>
                                <span className="block text-lg sm:text-xl md:text-2xl font-serif italic font-normal text-muted-foreground mt-3">
                                    Engineering Ideas into Impact.
                                </span>
                            </h1>
                            <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                                Full-stack developer and problem solver exploring AI to build scalable, real-world solutions.</p>
                        </div>
                        <div className="flex flex-wrap gap-4 animate-fade-in animation delay-300">
                            <a href="/Aniket_resume (4).pdf"><Button size="lg" className="border md:mx-2">
                                See Resume<DownloadIcon className="w-5 h-5"></DownloadIcon>
                            </Button></a>
                            <a href="#contact"><Button size="lg" className="border md:hidden">
                                Get-in-Toch<ArrowRightCircle className="w-5 h-5"></ArrowRightCircle>
                            </Button></a>
                        </div>
                        <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
                            <span className="text-sm text-muted-foreground">Reach me:</span>
                            {[
                                { icon: Linkedin, href: "https://www.linkedin.com/in/aniket-mishra-8390a4253/" },
                                { icon: Github, href: "https://github.com/Aniket006dev" },
                                { icon: Code, href: "https://leetcode.com/u/Aniket_dev/" }

                            ].map((socials, idx) => (
                                <a key={idx} href={socials.href} className="border border-muted-foreground text-muted-foreground rounded-full p-2 hover:text-primary hover:border-primary">{<socials.icon className="w-5 h-5" />}</a>
                            ))}
                        </div>
                    </div>
                    {/* right-column -profile image */}
                    <Highlight />
                </div>
            </div>
        </section>
    );
}