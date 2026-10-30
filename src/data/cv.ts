// All biographical claims need a source. Do not substitute template CV data.
export const cv = {
  name: "Mehdi Rostami",
  alias: "Mirko",
  role: "Software Architect & Technical Lead",
  github: "https://github.com/mirkoii",
  introduction:
    "Software architecture. Technical leadership. A hands-on connection to code.",
  about:
    "I’m Mehdi Rostami, also known as Mirko — a Software Architect and Technical Lead. This is a window into my public work: from web experiments to C# problem-solving and testing.",
  education: [] as {
    title: string;
    institution: string;
    period: string;
    source: string;
  }[],
  // Public repository evidence is not an independently validated issuer credential.
  certifications: [
    {
      title: "Software Engineer",
      issuer: "HackerRank",
      note: "Certificate shared in my public repository.",
      source:
        "https://github.com/mirkoii/Software-Enginner-Certificate-Hackerrank/blob/main/images/certificate-se.png",
    },
  ],
  expertise: [
    {
      title: "Architecture & leadership",
      text: "Software Architect and Technical Lead.",
      tags: ["Software architecture", "Technical leadership"],
      source: "owner",
    },
    {
      title: "C# & problem-solving",
      text: "Public C# challenge solutions and a shared Software Engineer certificate.",
      tags: ["C#", "Algorithms", "Data structures"],
      source: "certificate",
    },
    {
      title: "Web development",
      text: "An Angular–Firebase library system and browser window placement experiments.",
      tags: ["Angular", "Firebase", "Browser APIs"],
      source: "github",
    },
    {
      title: "Software testing",
      text: "A public repository exploring unit tests with Microsoft Visual Studio.",
      tags: ["Unit testing", "Visual Studio"],
      source: "github",
    },
  ],
  projects: [
    {
      name: "AngularFireLibrary",
      category: "Web",
      year: "2014",
      description:
        "An Angular–Firebase library system. An early exploration of connected web applications.",
      tags: ["Angular", "Firebase"],
      url: "https://github.com/mirkoii/AngularFireLibrary",
      source: "https://api.github.com/repos/mirkoii/AngularFireLibrary",
      fork: false,
    },
    {
      name: "UnitTest",
      category: "C#",
      year: "2017",
      description:
        "Unit testing with Microsoft Visual Studio 2015. A focused repository for testing fundamentals.",
      tags: ["C#", "Unit testing"],
      url: "https://github.com/mirkoii/UnitTest",
      source: "https://api.github.com/repos/mirkoii/UnitTest",
      fork: false,
    },
    {
      name: "Window placement demo",
      category: "Web",
      year: "2020",
      description:
        "A browser window placement demo, published as a standalone public repository.",
      tags: ["HTML", "Browser APIs"],
      url: "https://github.com/mirkoii/window-placement-demo",
      source: "https://api.github.com/repos/mirkoii/window-placement-demo",
      fork: false,
    },
    {
      name: "C# challenges",
      category: "C#",
      year: "2025",
      description:
        "HackerRank challenge solutions covering algorithms, data structures and problem-solving, with a shared certificate.",
      tags: ["C#", "HackerRank"],
      url: "https://github.com/mirkoii/Software-Enginner-Certificate-Hackerrank",
      source:
        "https://api.github.com/repos/mirkoii/Software-Enginner-Certificate-Hackerrank",
      fork: false,
    },
  ],
  timeline: [
    {
      year: "2025",
      title: "C# challenges & certification",
      text: "Published a repository for HackerRank solutions and a Software Engineer certificate.",
      source:
        "https://github.com/mirkoii/Software-Enginner-Certificate-Hackerrank",
    },
    {
      year: "2020",
      title: "Browser experimentation",
      text: "Published the window-placement-demo repository.",
      source: "https://github.com/mirkoii/window-placement-demo",
    },
    {
      year: "2017",
      title: "Testing fundamentals",
      text: "Published UnitTest, a C# unit testing repository.",
      source: "https://github.com/mirkoii/UnitTest",
    },
    {
      year: "2014",
      title: "Connected web applications",
      text: "Published AngularFireLibrary, an Angular–Firebase library system.",
      source: "https://github.com/mirkoii/AngularFireLibrary",
    },
  ],
} as const;
