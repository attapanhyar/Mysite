export default function Home() {
  return (
    <div className="font-sans min-h-screen flex flex-col bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 text-gray-900 p-0">
      {/* Creative Contact Info Bar */}
      <div className="w-full bg-white/90 border-b border-purple-200 py-3 px-6 flex flex-wrap justify-between items-center text-base font-medium shadow-sm">
        <div className="flex items-center gap-6">
          
          <span className="flex items-center gap-2 text-blue-800">
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.026-3.063-1.867-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.838-1.563 3.036 0 3.598 2.001 3.598 4.601v5.595z"/></svg>
            <a href="https://www.linkedin.com/in/iamattapanhyar/" target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn</a>
          </span>
        </div>
        <div className="flex items-center gap-4">
          <a href="mailto:attapanhyar@quest.edu.pk" className="bg-purple-600 text-white px-4 py-1 rounded-full shadow hover:bg-purple-700 transition">Email Me</a>
          <a href="tel:+923331971110" className="bg-blue-600 text-white px-4 py-1 rounded-full shadow hover:bg-blue-700 transition">Call</a>
        </div>
      </div>
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-extrabold mb-2 text-purple-700 drop-shadow-lg">Atta Muhammad</h1>
        <p className="mt-4 text-base sm:text-lg text-blue-800 font-semibold tracking-wide bg-blue-200 rounded-lg px-4 py-2 inline-block shadow-md">
          Assistant Professor &mdash; Department of Artificial Intelligence
        </p>
        <p className="mt-4 text-base sm:text-lg text-blue-800 font-semibold tracking-wide bg-blue-200 rounded-lg px-4 py-2 inline-block shadow-md">
          Quaid-e-Awam University of Engineering Science &amp; Technology, Nawabshah
        </p>
        <nav className="mt-4 flex flex-wrap justify-center gap-6 sm:gap-8 text-base font-medium">
          <a href="#about" className="hover:underline text-purple-700 hover:text-pink-600">About</a>
          <a href="#experience" className="hover:underline text-purple-700 hover:text-pink-600">Experience</a>
          <a href="#projects" className="hover:underline text-purple-700 hover:text-pink-600">Projects</a>
          <a href="#education" className="hover:underline text-purple-700 hover:text-pink-600">Education</a>
          <a href="#skills" className="hover:underline text-purple-700 hover:text-pink-600">Skills</a>
          <a href="#certifications" className="hover:underline text-purple-700 hover:text-pink-600">Certifications</a>
          <a href="#publications" className="hover:underline text-purple-700 hover:text-pink-600">Publications</a>
          <a href="#contact" className="hover:underline text-purple-700 hover:text-pink-600">Contact</a>
        </nav>
      </header>

      <main className="max-w-3xl mx-auto flex flex-col gap-16">
        <section id="about" className="rounded-2xl shadow-xl p-8 border-l-8 border-purple-400 bg-white/80 flex items-center gap-6">
          <div className="flex-shrink-0 text-purple-500">
            <svg width="40" height="40" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-2 text-purple-700">About Me</h2>
            <p className="text-gray-800">
              Hello! I am <span className="font-bold text-pink-700">Atta Muhammad</span>, Python Developer with a strong academic background and 7+ years of experience in teaching, research, and software development. Proficient in designing and implementing backend systems, automation workflows, and data-driven applications using Python, SQL, LangChain, and modern frameworks such as FastAPI and Django. Led certified programming courses and hands-on workshops, equipping learners with market-driven development skills. Passionate about solving real-world problems using clean, scalable code and integrating AI tools for automation and optimization.
            </p>
          </div>
        </section>
        <section id="experience" className="rounded-2xl shadow-xl p-8 border-l-8 border-blue-400 bg-white/80">
          <div className="flex items-center gap-3 mb-2">
            <svg width="32" height="32" fill="currentColor" className="text-blue-500" viewBox="0 0 24 24"><path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zm0-13H5V5h14v1z"/></svg>
            <h2 className="text-2xl font-bold text-blue-700">Professional Experience</h2>
          </div>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-lg">Assistant Professor</h3>
              <p className="text-gray-700">Department of Artificial Intelligence, Quaid-e-Awam University of Engineering Science and Technology</p>
              <p className="text-sm text-gray-500">April 2017 – Present | Nawabshah, Pakistan</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Designed and taught undergraduate-level courses in Python, software engineering, and AI.</li>
                <li>Led workshops and certification programs on Python development and automation.</li>
                <li>Supervised student projects involving data pipelines, chatbots, and web applications.</li>
                <li>Integrated research and practical applications, including LLM-powered solutions.</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg">Lecturer</h3>
              <p className="text-gray-700">Quaid-e-Awam University of Engineering Science and Technology</p>
              <p className="text-sm text-gray-500">March 2016 – April 2017</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Taught courses on programming and telecommunication engineering.</li>
                <li>Conducted hands-on labs and trained students in technical writing and development.</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg">Functional Team Lead</h3>
              <p className="text-gray-700">Sukkur IBA</p>
              <p className="text-sm text-gray-500">July 2013 – March 2016</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Developed web-based solutions including Sukkur IBA Online Testing Service (SOTS).</li>
                <li>Built a complaint management system and graduate directory platform using C# and SQL.</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg">Software Engineering Intern</h3>
              <p className="text-gray-700">Sukkur IBA</p>
              <p className="text-sm text-gray-500">Jan 2012 – June 2013</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Participated in the development of ERP modules and internal university systems.</li>
              </ul>
            </div>
          </div>
        </section>
    <section id="technical-skills" className="rounded-2xl shadow-xl p-8 border-l-8 border-gray-400 bg-white/80">
      <div className="flex items-center gap-3 mb-2">
        <svg width="32" height="32" fill="currentColor" className="text-gray-500" viewBox="0 0 24 24">
          <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 17.93V20h-2v-.07A8.001 8.001 0 014 12h2a6 6 0 0012 0h2a8.001 8.001 0 01-7 7.93zM12 4a8 8 0 017.93 7H20v2h-.07A8.001 8.001 0 0112 20a8.001 8.001 0 01-7.93-7H4v-2h.07A8.001 8.001 0 0112 4z"/>
        </svg>
        <h2 className="text-2xl font-bold text-gray-700">Technical Skills</h2>
      </div>
      <div className="space-y-4">
        <div>
          <span className="font-semibold text-gray-800">Languages:</span>
          <span className="ml-2 text-gray-700">Python, Java, C#.NET, MATLAB, Julia, C++, C</span>
        </div>
        <div>
          <span className="font-semibold text-gray-800">Frameworks &amp; Tools:</span>
          <span className="ml-2 text-gray-700">FastAPI, Django, Langchain, Flask, PyCharm, Visual Studio, Git</span>
        </div>
        <div>
          <span className="font-semibold text-gray-800">Databases:</span>
          <span className="ml-2 text-gray-700">SQL, MongoDB, PostgreSQL</span>
        </div>
        <div>
          <span className="font-semibold text-gray-800">Others:</span>
          <span className="ml-2 text-gray-700">Docker, REST APIs, MS Office, LaTeX, Zotero, GitHub, GitLab</span>
        </div>
        <div>
          <span className="font-semibold text-gray-800">Cloud/Deployment:</span>
          <span className="ml-2 text-gray-700">Streamlit Cloud, Heroku, Render (basic exposure)</span>
        </div>
      </div>
    </section>
      <section id="projects" className="rounded-2xl shadow-xl p-8 border-l-8 border-pink-400 bg-white/80">
        <div className="flex items-center gap-3 mb-2">
          <svg width="32" height="32" fill="currentColor" className="text-pink-500" viewBox="0 0 24 24"><path d="M12 2l-5.5 9h11zM2 20h20v-2H2z"/></svg>
          <h2 className="text-2xl font-bold text-pink-700">Projects</h2>
        </div>
        <div className="space-y-6">
          <div>
            <h3 className="font-bold text-lg">LLM-Based QUEST Rule Book Chatbot (2021)</h3>
            <p className="text-gray-700">Python, Langchain</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Created a chatbot interface that answers legal queries using document parsing and LLMs.</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg">Talk-show Detection System (2015)</h3>
            <p className="text-gray-700">Java, WEKA</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Developed a system that identifies talk shows in videos using audio-visual and grammatical patterns.</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg">Sukkur IBA Online Testing Service (SOTS) (2014)</h3>
            <p className="text-gray-700">C#.NET, SQL</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Built an online recruitment testing portal for university-wide use.</li>
            </ul>
          </div>
        </div>
      </section>
        <section id="education" className="rounded-2xl shadow-xl p-8 border-l-8 border-green-400 bg-white/80">
          <div className="flex items-center gap-3 mb-2">
            <svg width="32" height="32" fill="currentColor" className="text-green-500" viewBox="0 0 24 24"><path d="M12 3L2 9l10 6 10-6-10-6zm0 13c-4.97 0-9 2.16-9 4v2h18v-2c0-1.84-4.03-4-9-4z"/></svg>
            <h2 className="text-2xl font-bold text-green-700">Education</h2>
          </div>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-lg">MS in Computer Science</h3>
              <p className="text-gray-700">Sukkur IBA University</p>
              <p className="text-sm text-gray-500">GPA: 3.5/4.0 (Silver Medalist)</p>
              <p className="mt-2 text-gray-600">
                <span className="font-semibold">Thesis:</span> Automated talk-shows detection using machine learning
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg">BE in Telecommunication Engineering</h3>
              <p className="text-gray-700">Sukkur IBA University</p>
              <p className="text-sm text-gray-500">GPA: 3.0/4.0</p>
              <p className="mt-2 text-gray-600">
                <span className="font-semibold">Thesis:</span> ICI reduction in OFDM systems using frequency offset reduction
              </p>
            </div>
          </div>
        </section>
        <section id="skills" className="rounded-2xl shadow-xl p-8 border-l-8 border-yellow-400 bg-white/80">
          <div className="flex items-center gap-3 mb-2">
            <svg width="32" height="32" fill="currentColor" className="text-yellow-500" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
            <h2 className="text-2xl font-bold text-yellow-700">Skills</h2>
          </div>
          <div className="flex flex-wrap gap-4">
            <span className="bg-gray-200 px-3 py-1 rounded-full">React</span>
            <span className="bg-gray-200 px-3 py-1 rounded-full">Next.js</span>
            <span className="bg-gray-200 px-3 py-1 rounded-full">TypeScript</span>
            <span className="bg-gray-200 px-3 py-1 rounded-full">Tailwind CSS</span>
            <span className="bg-gray-200 px-3 py-1 rounded-full">Node.js</span>
            <span className="bg-gray-200 px-3 py-1 rounded-full">Python</span>
            <span className="bg-gray-200 px-3 py-1 rounded-full">Machine Learning</span>
            <span className="bg-gray-200 px-3 py-1 rounded-full">Deep Learning</span>
            <span className="bg-gray-200 px-3 py-1 rounded-full">FastAPI</span>
            <span className="bg-gray-200 px-3 py-1 rounded-full">Django</span>
            <span className="bg-gray-200 px-3 py-1 rounded-full">SQL</span>
            <span className="bg-gray-200 px-3 py-1 rounded-full">LangChain</span>
            <span className="bg-gray-200 px-3 py-1 rounded-full">Docker</span>
            <span className="bg-gray-200 px-3 py-1 rounded-full">Git</span>
            <span className="bg-gray-200 px-3 py-1 rounded-full">REST APIs</span>
            <span className="bg-gray-200 px-3 py-1 rounded-full">Automation</span>
          </div>
        </section>
        <section id="certifications" className="rounded-2xl shadow-xl p-8 border-l-8 border-indigo-400 bg-white/80">
          <div className="flex items-center gap-3 mb-2">
            <svg width="32" height="32" fill="currentColor" className="text-indigo-500" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
            <h2 className="text-2xl font-bold text-indigo-700">Certifications &amp; Awards</h2>
          </div>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <span className="font-bold">Silver Medalist</span> – MS Computer Science (Second Position)
            </li>
            <li>
              <span className="font-bold">PM Scholarship Program</span> – Full tuition waiver
            </li>
            <li>
              <span className="font-bold">Sindh Endowment Scholarship</span> – Awarded during undergraduate studies
            </li>
          </ul>
        </section>
        <section id="publications" className="rounded-2xl shadow-xl p-8 border-l-8 border-red-400 bg-white/80">
          <div className="flex items-center gap-3 mb-2">
            <svg width="32" height="32" fill="currentColor" className="text-red-500" viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zm0-13H5V5h14v1z"/></svg>
            <h2 className="text-2xl font-bold text-red-700">Publications</h2>
          </div>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <span className="font-bold">Temperature and strain sensing with hybrid interferometer</span>, 2021
            </li>
            <li>
              <span className="font-bold">Video genre identification using clustering-based shot detection algorithm</span>, 2019
            </li>
            <li>
              <span className="font-bold">Content-based identification of talk show videos using audio visual features</span>, 2016
            </li>
          </ul>
        </section>
        <section id="contact" className="rounded-2xl shadow-xl p-8 border-l-8 border-blue-400 bg-white/80">
          <div className="flex items-center gap-3 mb-2">
            <svg width="32" height="32" fill="currentColor" className="text-blue-500" viewBox="0 0 24 24"><path d="M21 8V7l-3 2.29V7c0-1.1-.9-2-2-2H8C6.9 5 6 5.9 6 7v1l-3-2.29V8l9 6.5L21 8z"/></svg>
            <h2 className="text-2xl font-bold text-blue-700">Contact</h2>
          </div>
          <form className="flex flex-col gap-4">
            <input type="text" placeholder="Atta Muhammad" className="border rounded px-3 py-2" />
            <input type="email" placeholder="attapanhyar@quest.edu.pk" className="border rounded px-3 py-2" />
            <textarea placeholder="Your Message" className="border rounded px-3 py-2" rows={4} />
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Send</button>
          </form>
        </section>
        <section id="links" className="bg-white rounded-xl shadow p-8">
          <h2 className="text-2xl font-semibold mb-4">Links &amp; CV</h2>
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <a
              href="https://www.linkedin.com/in/iamattapanhyar/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded hover:bg-blue-200 transition"
            >
              <svg width="20" height="20" fill="currentColor" className="inline-block" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.026-3.063-1.867-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.838-1.563 3.036 0 3.598 2.001 3.598 4.601v5.595z"/></svg>
              LinkedIn
            </a>
            <a
              href="https://github.com/attapanhyar"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gray-100 text-gray-800 px-4 py-2 rounded hover:bg-gray-200 transition"
            >
              <svg width="20" height="20" fill="currentColor" className="inline-block" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.757-1.333-1.757-1.089-.745.083-.729.083-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.332-5.466-5.93 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.371.823 1.102.823 2.222v3.293c0 .322.218.694.825.576 4.765-1.585 8.2-6.082 8.2-11.385 0-6.627-5.373-12-12-12z"/></svg>
              GitHub
            </a>
            <a
              href="/AttaMuhammad_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded hover:bg-green-200 transition"
            >
              <svg width="20" height="20" fill="currentColor" className="inline-block" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zm0 2l6 6h-6zm-2 14h-2v-2h2zm0-4h-2v-6h2z"/></svg>
              Download CV
            </a>
          </div>
        </section>
      </main>

      <footer className="mt-16 text-center text-gray-500">
        &copy; {new Date().getFullYear()} Atta Muhammad. All rights reserved.
      </footer>
    </div>
  );
}
