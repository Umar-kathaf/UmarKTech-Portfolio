import RevealOnScroll from "../RevealOnScroll";

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border bordwer-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px-8px-rgba(59,30,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">
                Food Delivery Website (MERN Stack)
              </h3>
              <p className="text-gray-400 mb-4">
                Developed a responsive full-stack web application for online
                food ordering and delivery.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["MongoDB", "Express.JS", "React.JS", "Node.JS"].map(
                  (tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition cursor-pointer"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://food-delivery-web-frontend-0u3f.onrender.com/"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View project →
                </a>
              </div>
            </div>

            <div className="p-6 rounded-xl border bordwer-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px-8px-rgba(59,30,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">Login Application</h3>
              <p className="text-gray-400 mb-4">
                I developed a Login/Sign-up application server using NodeJS,
                ExpressJS, configuring it to handle HTTP requests.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["HTML", "CSS", "Node.JS", "Express.JS"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition cursor-pointer"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href=""
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View project →
                </a>
              </div>
            </div>

            <div className="p-6 rounded-xl border bordwer-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px-8px-rgba(59,30,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">Image Search Engine</h3>
              <p className="text-gray-400 mb-4">
                I designed and implemented a web-based Image Search Engine,
                utilizing a responsive front-end built with HTML, CSS, and
                JavaScript. Integrated with an API to fetch and display search
                results dynamically
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["HTML", "CSS", "JavaScript", "Image API"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition cursor-pointer"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://umar-kathaf.github.io/Image-Search-Engine/"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View project →
                </a>
              </div>
            </div>

            <div className="p-6 rounded-xl border bordwer-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px-8px-rgba(59,30,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">Weather Application</h3>
              <p className="text-gray-400 mb-4">
                I developed a responsive Weather Application using React.js and
                integrated it with a third-party Weather API
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React.JS"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition cursor-pointer"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://storied-sprite-fcdbb1.netlify.app/"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View project →
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Projects;
