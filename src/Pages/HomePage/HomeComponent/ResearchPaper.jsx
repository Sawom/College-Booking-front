import React from "react";

const ResearchPaper = () => {
  // Sample data
  const researchPapers = [
    {
      title: "AI in Healthcare",
      authors: "John Doe, Jane Smith",
      abstract:
        "This paper explores the use of artificial intelligence in healthcare, including diagnosis, treatment planning, and patient care.",
      link: "https://example.com/ai-healthcare",
    },
    {
      title: "Quantum Computing: The Future",
      authors: "Alice Brown, Bob White",
      abstract:
        "An introduction to quantum computing and its potential impact on various industries.",
      link: "https://example.com/quantum-computing",
    },
    {
      title: "Blockchain Technology and Security",
      authors: "Charlie Green, Dave Black",
      abstract:
        "A detailed look into blockchain technology and its applications in cybersecurity and data integrity.",
      link: "https://example.com/blockchain-security",
    },
    {
      title: "The Future of Autonomous Vehicles",
      authors: "Emma Red, Fred Blue",
      abstract:
        "Research on autonomous vehicle technology and its integration into urban mobility systems.",
      link: "https://example.com/autonomous-vehicles",
    },
    {
      title: "Renewable Energy Innovations",
      authors: "Grace Yellow, Harry Pink",
      abstract:
        "A comprehensive study on renewable energy technologies and their impact on the environment.",
      link: "https://example.com/renewable-energy",
    },
    {
      title: "Robotics in Agriculture",
      authors: "Ivy Violet, Jack Orange",
      abstract:
        "An exploration of how robotics is transforming agriculture through automation and precision farming.",
      link: "https://example.com/robotics-agriculture",
    },
  ];

  return (
    <div className="container mx-auto">
      <div className="my-10 px-4">
        <h2 className="text-center text-3xl font-bold mb-8">Research Papers</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {researchPapers.map((paper, index) => (
            <div
              key={index}
              className="max-w-sm rounded-lg shadow-lg border border-gray-200 overflow-hidden"
            >
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{paper.title}</h3>
                <p className="text-gray-500 mb-2">Authors: {paper.authors}</p>
                <p className="text-gray-700 mb-4">{paper.abstract}</p>
                <a
                  href={paper.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Read Full Paper
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResearchPaper;
