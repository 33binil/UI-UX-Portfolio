import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

const UiDesign = () => {
    const [scrollProgress, setScrollProgress] = useState(0);
    const [showUnavailableModal, setShowUnavailableModal] = useState(false);
    
    const projects = [
        {
            id: 1,
            title: "Virtual Reality Experience Environment",
            description: "Virtual reality takes you beyond the limits of the physical world, immersing you in stunning, interactive environments. With lifelike visuals, seamless motion, and 360° audio, it transforms how you play, learn, and explore, making every experience unforgettable.",
            tags: ["UI/UX Design", "Study Project"],
            image: "/img/vr.png",
            liveLink: "nil",
            designLink: "https://www.figma.com/design/922eoan0Qald9c21xZ8MqV/VR?node-id=0-1&t=hmBeBeXnY0y5MDix-1"
        },
        {
            id: 2,
            title: "Personal Diary App",
            description: "A smart personal diary application that allows users to store memories through voice, text, and images. Featuring secure login, personal timelines, and seamless media storage, it enables users to relive moments effortlessly and maintain their journal in a more expressive, natural way.",
            tags: ["Web application", "UI/UX Design", "Own-Projects"],
            image: "/img/diary-2.jpg",
            liveLink: "https://personal-diary-frontend.onrender.com/",
            designLink: "https://www.figma.com/design/G3G0joPJIgDPOyoBE2SNuD/Diary?node-id=0-1&t=ak6RRZ0e485DIc9k-1"
        },
        {
            id: 3,
            title: "Pixel Junkie Creative Studios",
            description: "A full-service creative studio offering branding, web development, digital marketing, motion graphics, app development, and business scaling solutions. Focused on delivering visually striking designs and functional digital experiences that help brands grow and stand out.",
            tags: ["Branding", "Web Development", "Creative Studio", "Digital Marketing"],
            image: "/img/pixeljunkiestudio.png",
            liveLink: "https://pixeljunkiestudio.in/",
            designLink: "https://www.figma.com/design/ERVzWMRNCy08LKCIvrMrLU/Pixel-Junkie-Ver-2?node-id=35-102&t=AkC5eQvafZTyI1zl-1",
        },
        {
            id: 4,
            title: "Omniblend – Gourmet Spice Mix",
            description: "A single-product D2C brand offering a premium all-natural dual-texture seasoning crafted for rich aroma, balanced flavor, and versatility in cooking. Designed for online sales with a fully branded website, currency-based pricing, reviews, and seamless purchase flow.",
            tags: ["Brand Development", "E-Commerce", "D2C Product", "Food & Spice Brand"],
            image: "/img/omniblend.png",
            liveLink: "https://omniblend-v2-1.vercel.app/",
            designLink: "https://www.figma.com/design/4swxgW70N5mRofrmZA03Qo/Omniblend-2.1?node-id=0-1&t=Fhp7KcsFQ4xU25HB-1"
        },
        {
            id: 5,
            title: "PMD – Thrift Clothing Store",
            description: "A stylish thrift clothing website designed to promote sustainable fashion through curated pre-loved apparel collections. Focused on clean UI, lightweight navigation, and visually engaging product presentation to deliver an affordable yet premium shopping experience.",
            tags: ["UI/UX Design", "Thrift Store", "Sustainable Fashion", "E-Commerce"],
            image: "/img/pmd.png",
            liveLink: "nil",
            designLink: "https://www.figma.com/design/7p998IaovMjY7YTq3IxKg7/PMD?node-id=0-1&t=f0hVZbhO2DaSb9M8-1"
        },
        {
            id: 6,
            title: "Nano Robotics & Embed Technologies (NRET)",
            description: "A robotics and embedded systems training initiative providing hands-on learning experiences, real-time project development, and robotics-based innovation. Focused on empowering students and tech enthusiasts with practical skills in electronics, automation, and embedded programming.",
            tags: ["Robotics", "Embedded Systems", "Training Program", "Tech Innovation"],
            image: "/img/nret.png",
            liveLink: "https://nret.vercel.app/",
            designLink: "https://www.figma.com/design/XXnuWJvGP75t6Pe1nLkRo5/NRET?node-id=0-1&t=A2N4s919E5mhQWmN-1"
        },
        {
            id: 6,
           title: "Golden Crown Events",
          description: "An event design and management team specializing in weddings, birthdays, private gatherings, and premium celebrations. Focused on elegant styling, seamless coordination, and visually captivating experiences that turn special moments into unforgettable memories.",
          tags: ["Event Design", "Weddings & Celebrations", "Branding & Website", "Creative Planning"],
          image: "/img/golden.png",
          liveLink: "nil",
          designLink: "https://www.figma.com/design/vfAA8uNEYg0Qz8X93rDXeo/Event-Work-UI?node-id=0-1&t=SQYlfDRiLVayyDR5-1"
        }
    ];

    useEffect(() => {
        AOS.init({
            duration: 800,
            easing: "ease-in-out",
            once: true,
        });

        const handleScroll = () => {
            const section = document.getElementById("ui-design-section");
            if (section) {
                const rect = section.getBoundingClientRect();
                const windowHeight = window.innerHeight;
                const progress = Math.min(
                    Math.max(
                        (windowHeight - rect.top) / (rect.height + windowHeight),
                        0
                    ),
                    1
                );
                setScrollProgress(progress);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section
            id="ui-design-section"
            className="relative min-h-[80vh] w-full overflow-hidden py-12 px-4 sm:px-6 lg:px-8"
        >
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <motion.h2
                        className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent"
                        data-aos="fade-up"
                    >
                        UI/UX Design Work
                    </motion.h2>
                    <motion.p
                        className="text-gray-400 max-w-2xl mx-auto text-lg"
                        data-aos="fade-up"
                        data-aos-delay="100"
                    >
                        A collection of my UI/UX design projects and case studies
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-[#a855f7]/50 transition-all duration-300 h-full flex flex-col"
                            data-aos="fade-up"
                            data-aos-delay={200 + (index * 50)}
                        >
                            <div className="aspect-video bg-gradient-to-br from-[#6366f1]/20 to-[#a855f7]/20 rounded-lg mb-4 overflow-hidden flex-shrink-0 relative">
                                {typeof project.image === 'string' && project.image.startsWith('/') ? (
                                    <img 
                                        src={project.image} 
                                        alt={project.title}
                                        className="w-full h-full object-cover"
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center text-gray-500">
                                        {project.image}
                                    </div>
                                )}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                    <span className="text-white text-sm font-medium">View Project</span>
                                </div>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                            <p className="text-gray-400 text-sm mb-4">
                                {project.description}
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags.map((tag, tagIndex) => (
                                    <span 
                                        key={tagIndex}
                                        className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#a855f7]/20 text-[#d8b4fe]"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <div className="space-y-3 mt-auto">
                                <button
                                    onClick={(e) => {
                                        if (project.liveLink === 'nil') {
                                            e.preventDefault();
                                            setShowUnavailableModal(true);
                                        }
                                    }}
                                    className={`w-full inline-flex items-center justify-center px-4 py-2.5 border text-sm font-medium rounded-md ${
                                        project.liveLink === 'nil' 
                                            ? 'border-gray-600 text-gray-400 bg-gray-800/50 cursor-not-allowed' 
                                            : 'border-transparent text-white bg-gradient-to-r from-[#6366f1] to-[#a855f7] hover:opacity-90'
                                    } transition-opacity`}
                                >
                                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
View Live Project
                                </button>
                                <button
                                    onClick={(e) => {
                                        if (project.designLink === 'nil') {
                                            e.preventDefault();
                                            setShowUnavailableModal(true);
                                        }
                                    }}
                                    className={`w-full inline-flex items-center justify-center px-4 py-2.5 border text-sm font-medium rounded-md ${
                                        project.designLink === 'nil' 
                                            ? 'border-gray-600 text-gray-400 bg-gray-800/50 cursor-not-allowed' 
                                            : 'border-transparent text-white bg-gradient-to-r from-[#6366f1] to-[#a855f7] hover:opacity-90'
                                    } transition-opacity`}
                                >
                                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
View UI Design
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Unavailable Modal */}
            {showUnavailableModal && (
                <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
                    <div className="bg-gray-900 rounded-xl p-6 max-w-md w-full border border-white/10">
                        <div className="flex justify-between items-start mb-4">
                            <h3 className="text-xl font-semibold text-white">Project Unavailable</h3>
                            <button 
                                onClick={() => setShowUnavailableModal(false)}
                                className="text-gray-400 hover:text-white"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <p className="text-gray-300 mb-6">
                            This project is currently unavailable for viewing. Please check back later or contact me for more details.
                        </p>
                        <div className="flex justify-end">
                            <button
                                onClick={() => setShowUnavailableModal(false)}
                                className="px-4 py-2 bg-[#a855f7] text-white rounded-md hover:bg-[#9333ea] transition-colors"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default UiDesign;
