import ProjectsCard from "../ProjectsCard";

export default function Projects() {
  return (
    <div className="container mx-auto py-12">
      <section className=" space-y-10">
        {/* Section Title */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-5 text-yellow-400">My Projects</h2>
          <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Here are some of the projects I’ve built — showcasing my skills in
            React, Next.js, and modern frontend development.
          </p>
        </div>

        {/* Project Cards */}
        <div className=" max-w-5xl mx-auto space-y-8">
          <ProjectsCard
            title={"BlackLuxe-Store"}
            description={
              "A visually striking, dark-themed e-commerce web application featuring a luxury aesthetic, user-friendly shopping experience, and a powerful admin dashboard"
            }
            img={"/BlackLuxe.png"}
            viewProject={"https://blackluxe.vercel.app/"}
            sourceCode={"sff"}
          />
           <ProjectsCard
            title={"Quran App V2 "}
            description={
              "An upgraded and modernized Quran web application built with React, adding advanced features and improved user experience."
            }
            img={"/Quran-App-V2.png"}
            viewProject={"https://quran-app-v2.vercel.app/"}
            sourceCode={"https://github.com/AbdelrhmanHisham000/Quran--App--v2"}
          />
          <ProjectsCard
            title={"Quran App "}
            description={
              "A responsive, feature-rich Quran reading app with audio recitation, Tafseer, and Hadith integration"
            }
            img={"/Quran-App.png"}
            viewProject={"https://qurann1.netlify.app/"}
            sourceCode={"https://github.com/AbdelrhmanHisham000/Quran--App"}
          />
       
          {/* Add more cards as needed */}
        </div>
      </section>
    </div>
  );
}
