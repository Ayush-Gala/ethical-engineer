"use client";

import Link from "next/link";
import { FaLightbulb, FaShieldAlt, FaUsers, FaCode, FaExclamationTriangle, FaChartLine, FaBookOpen, FaHandshake } from "react-icons/fa";

export default function AboutTEE() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4 transition-colors duration-200">
          About the ethical-engineering blog
        </h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          A platform dedicated to preserving and promoting ethical engineering principles in the age of AI
        </p>
      </div>

      {/* Mission Statement */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-8 mb-12 border border-blue-200 dark:border-blue-800">
        <div className="flex items-start gap-4">
          <FaLightbulb className="text-3xl text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0" />
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Mission</h2>
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
              With the rapid rise of AI and automation, we&apos;re witnessing a concerning trend: the erosion of fundamental engineering principles. 
              The ethical-engineering blog exists to combat this by providing insights, case studies, and practical guidance that empowers developers to make 
              better decisions when building engineering solutions for the world.
            </p>
          </div>
        </div>
      </div>

      {/* The Problem */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
          <FaExclamationTriangle className="text-red-500 dark:text-red-400" />
          The Challenge We Face
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-6 border border-red-200 dark:border-red-800">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">Rising Technical Debt</h3>
            <p className="text-gray-700 dark:text-red-300">
              Large software organizations are accumulating technical debt at an alarming rate, 
              leading to delayed timelines and compromised system reliability.
            </p>
          </div>
          <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-6 border border-red-200 dark:border-red-800">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">Legacy Infrastructure Crisis</h3>
            <p className="text-gray-700 dark:text-red-300">
              Critical legacy systems are being neglected, creating vulnerabilities that could 
              lead to catastrophic failures in global software infrastructure.
            </p>
          </div>
        </div>
      </div>

      {/* What We Cover */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
          <FaBookOpen className="text-blue-500 dark:text-blue-400" />
          What We Cover
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
            <FaCode className="text-2xl text-blue-500 dark:text-blue-400 mb-3" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Ethical AI Development</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Best practices for developing AI systems that are fair, transparent, and accountable.
            </p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
            <FaShieldAlt className="text-2xl text-green-500 dark:text-green-400 mb-3" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Sustainable Software</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Building software that&apos;s maintainable, scalable, and environmentally conscious.
            </p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
            <FaChartLine className="text-2xl text-purple-500 dark:text-purple-400 mb-3" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Performance & Scalability</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Engineering solutions that can handle growth while maintaining efficiency.
            </p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
            <FaUsers className="text-2xl text-orange-500 dark:text-orange-400 mb-3" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Team Collaboration</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Effective communication, code reviews, and collaborative development practices.
            </p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
            <FaHandshake className="text-2xl text-teal-500 dark:text-teal-400 mb-3" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Process & Methodology</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Proven development methodologies that lead to better outcomes and reduced risk.
            </p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
            <FaLightbulb className="text-2xl text-yellow-500 dark:text-yellow-400 mb-3" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Problem Solving</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Systematic approaches to identifying, analyzing, and solving complex technical challenges.
            </p>
          </div>
        </div>
      </div>

      {/* Our Approach */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Our Approach</h2>
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="bg-blue-100 dark:bg-blue-900/30 rounded-full p-3 flex-shrink-0">
              <span className="text-blue-600 dark:text-blue-400 font-bold text-lg">1</span>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Real-World Case Studies</h3>
              <p className="text-gray-700 dark:text-gray-300">
                We analyze actual scenarios from the industry, examining both successes and failures to extract 
                valuable lessons and actionable insights.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="bg-blue-100 dark:bg-blue-900/30 rounded-full p-3 flex-shrink-0">
              <span className="text-blue-600 dark:text-blue-400 font-bold text-lg">2</span>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Practical Guidance</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Beyond theory, we provide concrete, implementable strategies and best practices that 
                developers can apply immediately in their projects.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="bg-blue-100 dark:bg-blue-900/30 rounded-full p-3 flex-shrink-0">
              <span className="text-blue-600 dark:text-blue-400 font-bold text-lg">3</span>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Community Building</h3>
              <p className="text-gray-700 dark:text-gray-300">
                We foster a community of developers committed to ethical engineering practices, 
                encouraging knowledge sharing and collaborative problem-solving.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-xl p-8 text-center border border-green-200 dark:border-green-800">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Join the Movement</h2>
        <p className="text-gray-700 dark:text-gray-300 text-lg mb-6 max-w-2xl mx-auto">
          Whether you&apos;re a seasoned developer or just starting your journey, there&apos;s a place for you 
          in building a more ethical and sustainable future for software engineering.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/" 
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
          >
            Explore Our Blog
          </Link>
          <Link 
            href="/about" 
            className="bg-gray-600 hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
          >
            Meet the Author
          </Link>
        </div>
      </div>

      {/* Footer Quote */}
      <div className="text-center mt-12">
        <blockquote className="text-xl italic text-gray-700 dark:text-gray-300">
          &ldquo;The best code isn&apos;t just functional, it&apos;s ethical and built with the future in mind.&rdquo;
        </blockquote>
      </div>
    </div>
  );
} 