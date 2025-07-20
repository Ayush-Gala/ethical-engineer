"use client";

import Image from "next/image";
import { FaGithub, FaLinkedin, FaEnvelope, FaGraduationCap, FaCode, FaServer, FaCloud, FaBrain, FaGamepad, FaMicrochip, FaGlobe, FaQuoteLeft, FaAws, FaFileAlt } from "react-icons/fa";
import { SiCplusplus, SiGo, SiPython, SiRust, SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiDocker, SiKubernetes, SiTensorflow, SiPytorch, SiUnity, SiBlender, SiFigma, SiArduino, SiRaspberrypi } from "react-icons/si";

export default function About() {
  const handleResumeClick = () => {
    // Open resume in new tab
    window.open('/resume.pdf', '_blank');
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      {/* Banner / Mission Statement */}
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-2 transition-colors duration-200">
          Engineering for Impact.
        </h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mt-4">
          Hi! I&apos;m Ayush Gala, a software engineer with a passion for building robust and ethical technology that empowers people and communities.
        </p>
      </div>

      {/* Profile & Journey */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-10">
        {/* Profile Picture */}
        <div className="flex-shrink-0">
          <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden bg-gray-200 dark:bg-gray-700 border-4 border-blue-400 dark:border-blue-600 shadow-lg mx-auto md:mx-0">
            <Image
              src="/images/profile_placeholder.jpeg"
              alt="Profile Picture"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 192px"
            />
          </div>
        </div>
        {/* Journey & Mission */}
        <div className="flex-1 text-justify">
          <div className="flex items-center gap-2 mb-2">
            <FaQuoteLeft className="text-blue-500 dark:text-blue-400 text-xl" />
            <span className="text-gray-800 dark:text-gray-200 text-lg font-medium">
              &ldquo;Technology is most powerful when it is responsible and accessible.&rdquo;
            </span>
          </div>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            My journey began with a curiosity for how things work and a drive to solve real-world problems. I focus on building scalable, efficient, and reliable software systems. My curiosity lies at the intersection of software engineering, AI, and sustainable computing. I believe that maintainable infrastructure and thoughtful design can reduce energy use, drive long-term value, and create a positive impact.
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            I&apos;m passionate about distributed systems, high-performance computing, and backend development. My goal is to engineer solutions that are robust, ethical, and future-ready. I&apos;m always learning, always building.
          </p>
        </div>
      </div>

      {/* Resume Button */}
      <div className="text-center mb-10">
        <button
          onClick={handleResumeClick}
          className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
        >
          <FaFileAlt className="text-xl" />
          <span className="text-lg">View my resume</span>
        </button>
      </div>

      {/* Education */}
      <div className="mb-10">
        <h2 className="flex items-center gap-2 text-2xl font-bold text-gray-900 dark:text-white mb-4">
          <FaGraduationCap className="text-blue-500 dark:text-blue-400" /> Education
        </h2>
        <div className="space-y-4">
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <span className="font-semibold text-lg text-gray-900 dark:text-white">NC State University</span>
                <span className="ml-2 text-blue-600 dark:text-blue-400 font-medium">(MS, Computer Science, 2024–2026)</span>
                <span className="ml-2 text-xs bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 px-2 py-0.5 rounded">GPA: 4.0</span>
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400 mt-2 md:mt-0">Top 1% in Graduate Division</div>
            </div>
            <div className="text-sm text-gray-700 dark:text-gray-300 mt-2">
              <span className="font-medium">Relevant Courses:</span> Parallel Systems, Architecture of Parallel Computers, Software Engineering, Operating Systems, Automated Learning & Data Analysis, Neural Networks
            </div>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <span className="font-semibold text-lg text-gray-900 dark:text-white">Pune University (PICT)</span>
                <span className="ml-2 text-blue-600 dark:text-blue-400 font-medium">(BE, Computer Engineering, 2020–2024)</span>
                <span className="ml-2 text-xs bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300 px-2 py-0.5 rounded">GPA: 3.75</span>
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400 mt-2 md:mt-0">Honors: AI & ML</div>
            </div>
            <div className="text-sm text-gray-700 dark:text-gray-300 mt-2">
              <span className="font-medium">Activities:</span> Pictoreal, ACM Student Chapter, Debate Society, GameDevUtopia, TEDxPICT
            </div>
          </div>
        </div>
      </div>

      {/* Tech Stack */}
      <div className="mb-10">
        <h2 className="flex items-center gap-2 text-2xl font-bold text-gray-900 dark:text-white mb-4">
          <FaCode className="text-blue-500 dark:text-blue-400" /> Tech Stack
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700 flex flex-col items-center">
            <FaServer className="text-2xl text-blue-500 dark:text-blue-400 mb-1" />
            <span className="font-semibold text-gray-900 dark:text-white">Systems & HPC</span>
            <div className="flex flex-wrap gap-2 mt-2 text-lg">
              <SiCplusplus title="C/C++" /> <SiGo title="Go" /> <SiRust title="Rust" /> <SiPython title="Python" />
            </div>
            <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">CUDA, MPI, OpenMP, Slurm</div>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700 flex flex-col items-center">
            <FaCloud className="text-2xl text-blue-500 dark:text-blue-400 mb-1" />
            <span className="font-semibold text-gray-900 dark:text-white">Web & DevOps</span>
            <div className="flex flex-wrap gap-2 mt-2 text-lg">
              <SiJavascript title="JavaScript" /> <SiTypescript title="TypeScript" /> <SiReact title="React" /> <SiNextdotjs title="Next.js" /> <SiDocker title="Docker" /> <SiKubernetes title="Kubernetes" /> <FaAws title="AWS" />
            </div>
            <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">Linux, Git, Jenkins</div>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700 flex flex-col items-center">
            <FaBrain className="text-2xl text-blue-500 dark:text-blue-400 mb-1" />
            <span className="font-semibold text-gray-900 dark:text-white">AI / ML</span>
            <div className="flex flex-wrap gap-2 mt-2 text-lg">
              <SiTensorflow title="TensorFlow" /> <SiPytorch title="PyTorch" />
            </div>
            <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">Keras, Scikit-learn, DeepFilterNet3</div>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700 flex flex-col items-center">
            <FaGamepad className="text-2xl text-blue-500 dark:text-blue-400 mb-1" />
            <span className="font-semibold text-gray-900 dark:text-white">Game Dev & Creative</span>
            <div className="flex flex-wrap gap-2 mt-2 text-lg">
              <SiUnity title="Unity" /> <SiBlender title="Blender" /> <SiFigma title="Figma" />
            </div>
            <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">Photoshop, LÖVE2D</div>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700 flex flex-col items-center">
            <FaMicrochip className="text-2xl text-blue-500 dark:text-blue-400 mb-1" />
            <span className="font-semibold text-gray-900 dark:text-white">IoT & Embedded</span>
            <div className="flex flex-wrap gap-2 mt-2 text-lg">
              <SiArduino title="Arduino" /> <SiRaspberrypi title="Raspberry Pi" />
            </div>
            <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">ESP32, Embedded C, Python</div>
          </div>
        </div>
      </div>


      {/* Skills & Languages */}
      <div className="mb-10">
        <h2 className="flex items-center gap-2 text-2xl font-bold text-gray-900 dark:text-white mb-4">
          <FaGlobe className="text-blue-500 dark:text-blue-400" /> Skills & Languages
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
            <span className="font-semibold text-gray-900 dark:text-white">Programming & Design:</span>
            <div className="text-gray-700 dark:text-gray-300 mt-2">
              C, C++, Go, Python, Java, JavaScript, TypeScript, Lua, SQL, HTML/CSS, Embedded C, x86 Assembly<br />
              Figma, Photoshop, Illustrator, Blender, Canva
            </div>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
            <span className="font-semibold text-gray-900 dark:text-white">Languages & Communication:</span>
            <div className="text-gray-700 dark:text-gray-300 mt-2">
              English, Hindi, Marathi, Gujarati, French<br />
              Public Speaking, Debates, Compeering, Panel Discussions
            </div>
          </div>
        </div>
      </div>

      {/* Contact & Socials */}
      <div className="mb-10 text-center">
        <h2 className="flex items-center justify-center gap-2 text-2xl font-bold text-gray-900 dark:text-white mb-4">
          <FaEnvelope className="text-blue-500 dark:text-blue-400" /> Let’s Connect
        </h2>
        <div className="flex justify-center gap-6 mb-2">
          <a href="https://github.com/Ayush-Gala" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white text-3xl transition-colors duration-200">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/ayush-gala" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-blue-700 dark:text-blue-400 hover:text-blue-900 dark:hover:text-white text-3xl transition-colors duration-200">
            <FaLinkedin />
          </a>
          <a href="mailto:ayushgala2@gmail.com" aria-label="Email" className="text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-white text-3xl transition-colors duration-200">
            <FaEnvelope />
          </a>
        </div>
        <div className="text-gray-600 dark:text-gray-400 text-sm">ayushgala2@gmail.com</div>
      </div>

      {/* Footer Quote */}
      <div className="text-center mt-8">
        <p className="italic text-lg text-gray-700 dark:text-gray-300">
          Always building, always learning. Let’s talk systems, scale, and speed!
        </p>
      </div>
    </div>
  );
} 