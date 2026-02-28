import { ArrowUpRight, ArrowUpRightFromCircle, Download, Github, View } from "lucide-react"
import { Button } from "../components/Button"

export const Projects = () => {
    const projects = [
        {
            title: "TraveX-  Smart Travel Discovery Platform ",
            desc: "Travex is a full-stack travel platform, supports secure media uploads, and provides a streamlined booking system with automated notifications.",
            image: "/Travex-proj-img.jpeg",
            tags: ["Node.js", "Express.js", "MongoDB Atlas", "Cloudinary"],
            link: "https://travex-y6a6.onrender.com/",
            github: "https://github.com/Aniket006dev/TraveX"
        },
        {
            title: "Post_it — Smart Notes & Sharing Platform",
            desc: "Post_it is a lightweight web platform for creating, organizing, and sharing notes efficiently through a clean and intuitive interface.",
            image: "/postit-proj-img.png",
            tags: ["Express.js", "Node.js", "JavaScript"],
            link: "https://post-it-backend-web-app-u7jg.onrender.com/",
            github: "https://github.com/Aniket006dev/Post-it"
        },
        {
            title: "Virtual Practicals — Online Lab Platform",
            desc: "Virtual Practicals is a web-based platform that enables students to perform and submit computer science lab assignments digitally, reducing dependency on physical lab infrastructure.",
            image: "/virpract-proj-img.png",
            tags: ["HTML", "CSS", "JavaScript"],
            link: "https://aniket006dev.github.io/vir-practs/",
            github: "https://github.com/Aniket006dev/vir-practs"
        },

        {
            title: "Ask_it — Domain-Based Q&A Platform",
            desc: "Ask_it is an interactive learning platform that presents domain-specific, time-bound questions to promote focused and productive learning.",
            image: "/askit-proj-img.png",
            tags: ["Flask", "Sql-lite", "Python"],
            link: "https://askit-ev1r.onrender.com/",
            github: "https://github.com/Aniket006dev/AskIt"
        }

    ]
    return (
        <section id="projects" className="pt-22 md:py-32 relative overflow-hidden">
            {/* bg-blur  */}

            <div className="container mx-auto px-6 relative z-10">
                {/* section header */}
                <div className="text-center mx-auto mb-16">
                    <span className="text-heighlight text-sm font-medium tracking-wider uppercase animate-fade-in">Featured Work</span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-primary">
                        Projects that <span className="font-serif italic font-normal text-white">make an impact</span>
                    </h2>
                    <p className="text-muted-foreground animate-fade-in animation-delay-200">some of the featured projects...</p>
                </div>
                {/* projects grid */}
                <div className="grid md:grid-cols-2 gap-8 md:gap-12 md:mx-12">
                    {projects.map((proj, idx) => (
                        <div key={idx} className="group border rounded-2xl overflow-hidden animate-fade-in md:row-span-1" style={{ animationDelay: `${(idx + 1) * 100}ms` }}>
                            <div className="relative overflow-hidden aspect-video">
                                <img src={proj.image}
                                    alt={proj.title}
                                    className="w-full h-full object-cover transition-transform  duration-700 group-hover:scale-110" />

                                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60" />
                                {/* overlay links */}
                                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <a href={proj.link} className="p-3 bg-muted rounded-full hover:bg-primary hover:text-primary-foreground transition-all"><ArrowUpRightFromCircle className="w-5 h-5" /></a>
                                    <a href={proj.github} className="p-3 bg-muted rounded-full hover:bg-primary hover:text-primary-foreground transition-all"><Github className="w-5 h-5" /></a>
                                </div>
                            </div>

                            {/* content */}

                            <div className="p-6 space-y-4"> 
                                <div className="flex items-start justify-between">
                                    <h3 className="text-xl font-semibold group-hover:text-primarytransitiona-all">{proj.title}</h3>
                                    <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:translate-y-1 transition-all"/>
                                </div>
                                <p className="text-muted-foreground text-sm ">{proj.desc}</p>
                                <div className="flex flex-wrap gap-2">{proj.tags.map((tag, idx)=>(
                                    <span key={idx} className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50  gover:text-primary transition-all duration-300">{tag}</span>
                                ))}</div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mt-12 animate-fade-in animation-delay-500 text-center">
                <a href="https://github.com/Aniket006dev">
                    <Button size="lg" className="border" >View All Projects
                        <Github className="w-5 h-5"/>
                    </Button>
                </a>    
                </div>
            </div>
        </section>
    )
}