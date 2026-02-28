import { Menu, X } from "lucide-react";
import { Button } from "../components/Button";
import { useEffect, useState } from "react";

const navLink=[
    {href:"#summary", label:"About"},
    {href:"#skills", label:"Skills"},
    {href:"#projects", label:"Projects"},
    {href:"#experience", label:"Experience"},
];

export const Navbar=()=>{
    const [isMobOpen, setMobMenu]=useState(false);
    const [isScrolled, setIsScrolled]=useState(false);

    useEffect(()=>{
        const handle=()=>setIsScrolled(window.scrollY>50);

        window.addEventListener('scroll',handle);

        return ()=>window.removeEventListener("scroll", handle);
    }, []);
    return(
    <header className={`fixed top-0 left-0 right-0 ${isScrolled? "bg-background py-3": "bg-transparent py-5"} z-50`}>
        <nav className="container mx-auto px-6 flex items-center justify-between">
            <a href="#" className="text-xl font-bold tracking-tight hover:text-primary">
                <span className="text-primary">AM<span className="text-foreground">.</span></span></a>
            <div className="hidden md:flex items-center gap-1 bg-background border border-yellow-500 rounded-full">
                <div className="glass px-2 py-1 flex item-center gap-1">
                    {navLink.map((link, key)=>
                        <a href={link.href} key={key} className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground ">{link.label}</a>
                    )}
                </div>
            </div>
            <div className="hidden md:block border border-primary/80 bg-background rounded-full hover:border-none">
                <a href="#contact"><Button size="sm" >Contact</Button></a>
            </div>

            <button className="md:hidden p-2 text-foreground cursor-pointer" onClick={()=>setMobMenu((prev)=>!prev)}>
                {isMobOpen ?<X size={24}></X>:<Menu size={24}></Menu>}
            </button>
        </nav>

        {isMobOpen && (
        <div className="md:hidden glass strong animate-fade-in bg-background">
            <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
                    {navLink.map((link, key)=>
                        <a href={link.href} key={key} className="text-lg text-muted-foreground hover:text-foreground py-2">{link.label}</a>
                    )}

                    <a href="#contact"><Button size="sm" >Contact</Button></a>
                </div>
        </div>
        )}
    </header>);
}