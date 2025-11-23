import Header from "@/components/Headers";
import Experience from "@/components/Experiences";
import Education from "@/components/Educations";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="container mx-auto px-6">
        <Experience />
        <Education />
        <Skills />
      </div>
      <footer className="py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          {/* <p>{`© ${new Date().getFullYear()} Imam Syuhada. All rights reserved.`}</p> */}
        </div>
      </footer>
    </main>
  );
}
