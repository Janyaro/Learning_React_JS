import React from 'react';
import { FaReact, FaNodeJs, FaCss3Alt, FaJs, FaGitAlt } from 'react-icons/fa';
import { SiFlutter } from 'react-icons/si'; // ✅ Flutter icon

export default function SkillCard() {
    return (
        <div className="container my-5">
            <div className="row">
                {/* Card 1 */}
                <div className="col-md-4 mb-4">
                    <div className="card p-4 shadow-lg h-100">
                        <FaReact size={60} color="#61DBFB" className="mb-3" />
                        <h4>React JS</h4>
                        <p>Building fast and interactive UIs with components and hooks.</p>
                    </div>
                </div>
                {/* Card 2 */}
                <div className="col-md-4 mb-4">
                    <div className="card p-4 shadow-lg h-100">
                        <FaNodeJs size={60} color="#3C873A" className="mb-3" />
                        <h4>Node.js</h4>
                        <p>Creating scalable backend services and REST APIs.</p>
                    </div>
                </div>
                {/* Card 3 */}
                <div className="col-md-4 mb-4">
                    <div className="card p-4 shadow-lg h-100">
                        <FaJs size={60} color="#F0DB4F" className="mb-3" />
                        <h4>JavaScript</h4>
                        <p>Dynamic web development and logic implementation.</p>
                    </div>
                </div>
                {/* Card 4 */}
                     <div className="col-md-4 mb-4">
                    <div className="card p-4 shadow-lg h-100">
                        <SiFlutter size={60} color="#02569B" className="mb-3" />
                        <h4>Flutter</h4>
                        <p>Developing beautiful, cross-platform apps from a single codebase.</p>
                    </div>
                </div>

                {/* Card 5 */}
                <div className="col-md-4 mb-4">
                    <div className="card p-4 shadow-lg h-100">
                        <FaCss3Alt size={60} color="#264de4" className="mb-3" />
                        <h4>CSS3</h4>
                        <p>Styling responsive and visually appealing layouts.</p>
                    </div>
                </div>
                {/* Card 6 */}
                <div className="col-md-4 mb-4">
                    <div className="card p-4 shadow-lg h-100">
                        <FaGitAlt size={60} color="#F1502F" className="mb-3" />
                        <h4>Git</h4>
                        <p>Version control for tracking changes and collaboration.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
