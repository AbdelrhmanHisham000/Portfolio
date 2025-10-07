export default function ProjectsCard({
  title,
  description,
  img,
  viewProject,
  sourceCode,
}) {
  return (
    <div className="flex flex-col lg:flex-row items-center lg:space-x-8 space-y-6 lg:space-y-0 bg-[#1e1d1d] rounded-xl p-6 shadow-lg hover:shadow-2xl transition">
      {/* Text Section */}
      <section className="flex flex-col space-y-4 lg:w-1/2">
        <h1 className="text-2xl font-bold text-yellow-400 uppercase">
          {title}
        </h1>
        <p className="text-gray-300 text-sm leading-relaxed">{description}</p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 mt-4">
          {viewProject && (
            <a
              href={viewProject}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-400 text-black font-semibold py-2 px-6 rounded-lg shadow hover:bg-yellow-500 transition"
            >
              View Project
            </a>
          )}
          {sourceCode && (
            <a
              href={sourceCode}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-700 text-white font-semibold py-2 px-6 rounded-lg shadow hover:bg-gray-600 transition"
            >
              Source Code
            </a>
          )}
        </div>
      </section>

      {/* Image Section */}
      <section className="lg:flex-1 w-full">
        <img
          src={img}
          alt={title}
          className="rounded-xl object-cover w-full h-full shadow-md"
        />
      </section>
    </div>
  );
}
