import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import WorkExperience from "../components/WorkExperience";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import ContactMe from "../components/ContactMe";
import {Experience, PageInfo, Project, Skill, Social} from "../typings";
import {fetchExperiences} from "../utils/fetchExperiences";
import {fetchSocials} from "../utils/fetchSocials";
import {fetchSkills} from "../utils/fetchSkills";
import {fetchPageInfo} from "../utils/fetchPageInfo";
import {fetchProjects} from "../utils/fetchProjects";


export default async function Home() {
  const pageInfo = await fetchPageInfo();
  const experiences = await fetchExperiences();
  const skills = await fetchSkills();
  const projects = await fetchProjects();
  const socials = await fetchSocials();

  return (
    <div className="zoom-67">
      <Header socials={socials}/>

      {/* Hero Section */}
      <section id="hero" className="snap-start">
        <Hero pageInfo={pageInfo} />
      </section>

      {/* About Section */}
      <section id="about" className="snap-center">
        <About pageInfo={pageInfo} />
      </section>

      {/* Experience Section */}
      <section id="experience" className="snap-center">
        <WorkExperience experiences={experiences} />
      </section>

      {/* Skills Section */}
      <section id="skills" className="snap-start">
        <Skills skills={skills} />
      </section>

      {/* Projects Section */}
      <section id="projects" className="snap-start">
        <Projects projects={projects} />
      </section>

      {/* Contact Section */}
      <section id="contact" className="snap-start">
        <ContactMe />
      </section>
    </div>
  );
}


