import { ArrowUpRight, Link } from "lucide-react";
import { useEffect, useState } from "react";

const Carousel = () => {

  const highlights = [
        { img: "/az-aniket-img.png", desc: "Info session on DSA and CP", link: "https://www.linkedin.com/posts/aniket-mishra-8390a4253_azcampusconnectionprogram-azccp-leadershipjourney-activity-7415800804818755584-kzTS" },
        { img: "/code-charades-img.jpeg", desc: "Code-Charades Competition Presentation", link: "https://www.linkedin.com/posts/aniket-mishra-8390a4253_geeksforgeeksabrsrmcem-webdevelopment-hackathon-activity-7330555463140331520--DSs" },
        { img: "/highlight.png", desc: "Leetcode 100days of Problem Solving", link: "https://www.linkedin.com/posts/aniket-mishra-8390a4253_leetcode-dsa-100daysofcode-activity-7399042950682464256-CpEE" },
        { img: "/code-charades-win-img.jpeg", desc: "Code-Charades Competition Prize ceremony", link: "https://www.linkedin.com/posts/aniket-mishra-8390a4253_geeksforgeeksabrsrmcem-webdevelopment-hackathon-activity-7330555463140331520--DSs" },
        { img: "/az-onboard-img.png", desc: "AlgoZenith Srmcem Lead Onboarding Letter", link: "https://www.linkedin.com/posts/aniket-mishra-8390a4253_algozenith-leadership-onboarding-activity-7361642057448247296-WU0B" },
        { img: "/algoarena-img.jpeg", desc: "AlgoArena Contest with AZ Team", link: "https://www.linkedin.com/feed/update/urn:li:activity:7422675830671196161" },
        { img: "/ms-beta-img.jpeg", desc: "MLSA Beta certification", link: "https://www.linkedin.com/posts/aniket-mishra-8390a4253_microsoftstudentambassadors-github-workshop-activity-7290366431630704640-i1Qz" },
        // { img: "/az-lead-img.jpeg", desc: "AlgoZenith Srmcem Lead announcement Post at ", link: "https://www.linkedin.com/posts/aniket-mishra-8390a4253_azcampusconnectionprogram-azccp-leadershipjourney-activity-7415800804818755584-kzTS" },
    ] 

  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % highlights.length);
    }, 2500); // change speed here

    return () => clearInterval(interval);
  }, [highlights.length]);

  return (
  <div className="pt-22 md:py-0">
 
<div className="text-center max-w-3xl mx-auto md:hidden">

    <span className="text-primary text-sm font-medium tracking-wider uppercase animate-fade-in">
                        MileStones
                    </span>
</div>
  <div
    className="w-full h-[420px] sm:h-[460px] lg:h-[520px]
               flex justify-center items-center
               relative overflow-hidden"
  >
    {/* ===== Modern Glow Background ===== */}
    <div
      className="absolute w-[280px] h-[280px]
      sm:w-[380px] sm:h-[380px]
      lg:w-[450px] lg:h-[450px]
      bg-primary/15 blur-[120px]
      rounded-full z-0"
    ></div>

    {highlights.map((item, index) => {
      const offset = index - active;

      const normalized =
        offset < -1
          ? offset + highlights.length
          : offset > 1
          ? offset - highlights.length
          : offset;

      let style = "";

      if (normalized === 0) {
        style =
          "scale-100 sm:scale-105 lg:scale-110 opacity-100 z-20 translate-x-0";
      } else if (normalized === -1) {
        style =
          "scale-90 opacity-50 sm:opacity-60 z-10 -translate-x-10 sm:-translate-x-34";
      } else if (normalized === 1) {
        style =
          "scale-90 opacity-50 sm:opacity-60 z-10 translate-x-10 sm:translate-x-34";
      } else {
        style = "scale-75 opacity-0 z-0";
      }

      return (
        <div
          key={index}
          className={`absolute transition-all duration-700 ease-in-out ${style}`}
        >
          <div
            className="relative z-10
                       w-[260px] sm:w-[300px] lg:w-[340px]
                       border border-primary/40
                       py-4 px-4
                       rounded-2xl
                       bg-background backdrop-blur-md
                       shadow-2xl
                       shadow-primary/25 hover:scale-110
                       transition-all duration-500 animate-fade-in animation-delay-100"
          >
            <img
              src={item.img}
              alt={item.desc}
              className="mx-auto mb-3
                         h-[200px] sm:h-[230px] lg:h-[260px]
                         w-full object-cover rounded-lg"
            />

            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-sm text-muted-foreground"
            >
              {item.desc}
              <ArrowUpRight className="ml-2 w-4 h-4" />
            </a>
          </div>
        </div>
      );
    })}
  </div>
   </div>
);
};

export default Carousel;
