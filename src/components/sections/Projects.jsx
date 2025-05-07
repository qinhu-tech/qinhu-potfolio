import { RevealOnScroll } from "../RevealOnScroll"

export const Projects = () => {
    return (
        <section
            id="projects"
            className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
                <div className="max-w-5xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                        Featured Projects
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30
                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                            <h3 className="text-xl font-bold mb-2"> E-Commerce application for selling coffee </h3>
                            <p className="text-gray-400 mb-4">
                                Implemented responsive and user-friendly UI screens using Flutter as a frontend developer.
                            </p>

                            <div>
                                {["Flutter"].map((tech, key) => (
                                    <span
                                        key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30
                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                            <h3 className="text-xl font-bold mb-2"> Flight booking web </h3>
                            <p className="text-gray-400 mb-4">
                                Built and styled frontend pages; integrated features and ensured responsive design.
                            </p>

                            <div>
                                {["Angular", "HTML", "CSS"].map((tech, key) => (
                                    <span
                                        key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                                        {tech}
                                    </span>
                                ))}
                            </div>

                        </div>

                        <div
                            className="
                                    glass p-6 rounded-xl border border-white/10 
                                    hover:-translate-y-1 hover:border-blue-500/30
                                    hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
                                    transition-all">
                            <h3 className="text-xl font-bold mb-2"> Coffee ordering website </h3>
                            <p className="text-gray-400 mb-4">
                                Developed UI components, implemented shopping features.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["C#", ".NET"].map(
                                    (tech) => (
                                        <span
                                            key={tech}
                                            className="
                                                    bg-blue-500/10 text-blue-500 py-1 px-3 
                                                    rounded-full text-sm
                                                    transition
                                                    hover:bg-blue-500/20 hover:-translate-y-0.5
                                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]">
                                            {tech}
                                        </span>
                                    )
                                )}
                            </div>
                        </div>

                        <div
                            className="
                                    glass p-6 rounded-xl border border-white/10 
                                    hover:-translate-y-1 hover:border-blue-500/30
                                    hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
                                    transition-all">
                            <h3 className="text-xl font-bold mb-2"> Online bookstore </h3>
                            <p className="text-gray-400 mb-4">
                                Integrated product listings, search functionality, and shopping cart UI.
                                Collaborated with backend developers to ensure smooth data binding and routing.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["C#", ".NET"].map((tech, key) => (
                                    <span
                                        key={key}
                                        className="
                                                bg-blue-500/10 text-blue-500 py-1 px-3 
                                                rounded-full text-sm
                                                transition
                                                hover:bg-blue-500/20 hover:-translate-y-0.5
                                                hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    )
}
