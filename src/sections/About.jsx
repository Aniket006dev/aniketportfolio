import { Brain, Code, Group, Lightbulb, User, User2 } from "lucide-react";

export const About = () => {

    const features = [
        {
            title: "Project-Driven Learning",
            desc: "I focus on building real-world projects to understand concepts deeply, not just theoretically.",
            icon: Code
        },
        {
            title: "Problem-Solving Mindset",
            desc: "I enjoy breaking down complex problems into simple, structured solutions.",
            icon: Brain
        },
        {
            title: "Collaborative & Community-Oriented",
            desc: "Active in hackathons, peer teaching, and student tech communities to grow together.",
            icon: Group
        },
        {
            title: "Continuous Growth",
            desc: "I consistently upskill by exploring new technologies, tools, and industry trends.",
            icon: Lightbulb
        }
    ];

    return (
        <section id="summary" className="py-22 md:py-32 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* left column */}
                    <div className="space-y-8">
                        <div className="animate-fade-in">
                            <span className="text-primary text-sm font-medium tracking-wider uppercase">Meet Me</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-semibold leading-tight animate-fade-in animation-delay-100 text-white/60">Hello there, <span className="font-serif strong font-bold text-primary ">I'm Aniket Mishra</span>
                        </h2>
                        <div className="space-y-4 text-muted-foreground animate-fade-in animation -delay-200">
                            <p>Ambitious Computer Science student experienced in JavaScript, Java, and SQL, with a growing focus on Generative AI and LLM technologies.</p> 
                            <p>Driven to solve real-world problems using machine learning and strong computational thinking. Passionate about transforming ideas into structured, scalable digital solutions.</p>
                        </div>
                        <div className="border rounded-2xl p-2 border-primary animate-fade-in animation-delay-300">
                            <p className="text-lg font-medium italic text-foreground text-center">Build • Learn • Optimize • Scale</p>
                        </div>
                    </div>
                    {/* right column for above tablet */}
                    <div className="hidden md:grid md:grid-cols-2 gap-6">
                        {features.map((item, idx)=>(
                            <div key={idx} className="border border-heighlight p-6  rounded-2xl animate-fade-in " style={{animationDelay: `${(idx+1)*100}ms`}}>
                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                                <item.icon/>
                            </div>
                            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                            <p className="text-sm text-muted-foreground">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>);
}