import { Code2, Server, Palette, Brain, Wrench } from "lucide-react";
import {
    SiReact,
    SiJavascript,
    SiHtml5,
    SiTailwindcss,
    SiBootstrap,
    SiRedux,
    SiNodedotjs,
    SiExpress,
    SiMongodb,
    //   SiJava,
    SiPython,
    SiGit,
    SiGithub,
    SiFigma,
    SiCanva,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

export const Skills = () => {

    const skillsData = [
        {
            title: "Frontend",
            icon: Code2,
            skills: [
                { name: "React", icon: SiReact },
                { name: "JavaScript", icon: SiJavascript },
                { name: "HTML", icon: SiHtml5 },
                { name: "Tailwind CSS", icon: SiTailwindcss },
                { name: "Bootstrap", icon: SiBootstrap },
                { name: "Redux Toolkit", icon: SiRedux },
            ],
        },
        {
            title: "Backend",
            icon: Server,
            skills: [
                { name: "Node.js", icon: SiNodedotjs },
                { name: "Express.js", icon: SiExpress },
                { name: "MongoDB", icon: SiMongodb },
            ],
        },
        {
            title: "Problem Solving",
            icon: Brain,
            skills: [
                { name: "Java", icon: FaJava },
                { name: "Python", icon: SiPython },
                { name: "DSA", icon: FaJava },
            ],
        },
        {
            title: "Design",
            icon: Palette,
            skills: [
                { name: "Figma", icon: SiFigma },
                { name: "Canva", icon: SiCanva },
                { name: "UI/UX Tools", icon: Palette },
            ],
        },
        {
            title: "Tools",
            icon: Wrench,
            skills: [
                { name: "Git", icon: SiGit },
                { name: "GitHub", icon: SiGithub },
                { name: "AI/ML Tools", icon: Brain },
            ],
        },
    ];

    return (<section id="skills" className="py-22 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">

            
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-primary text-sm font-medium tracking-wider uppercase animate-fade-in">
                        Technical Expertise
                    </span>
                    <h1 className=" text-center text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-primary">Technologies I <span className="text-5xl text-red-500">&hearts;</span><span className="font-serif italic font-normal text-white"> to work with</span> </h1>
                    <p className="text-muted-foreground animate-fade-in animation-delay-200">
            My technical toolkit for crafting efficient and user-focused solutions.
          </p>

                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillsData.map((category, index) => {
                        const Icon = category.icon;

                        return (
                            <div
                                key={index}
                                className="bg-background border border-muted rounded-2xl p-6 shadow-md hover:shadow-xl transition duration-300 animate-fade-in animation-delay-300" style={{ boxShadow: "0px 0px 8px orange" }}
                            >
                                {/* Header */}
                                <div className="flex items-center gap-3 mb-6">
                                    <Icon className="text-primary/80" size={24} />
                                    <h3 className="text-xl font-semibold font-serif text-muted-foreground/90">{category.title}</h3>
                                </div>

                                {/* Skill Tags */}
                                <div className="flex flex-wrap gap-3">
                                    {category.skills.map((skill, idx) => {
                                        const SkillIcon = skill.icon;

                                        return (
                                            <div
                                                key={idx}
                                                className="border border-primary flex items-center gap-2 bg-primary/10 px-3 py-2 rounded-full text-sm hover:bg-muted hover:border-none transition"
                                            >
                                                <SkillIcon size={16} />
                                                <span>{skill.name}</span>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        );
                    })}
                </div>

        </div>
    </section>);

}
