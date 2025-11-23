import { cvData } from "@/data/cvData";

export default function edu() {
  const { education } = cvData;

  return (
    <section className="section-container py-4">
      <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
        Education
      </h2>
      <div className="space-y-4">
        {education.map((edu, index) => (
          <div key={index}>
            <div className="flex items-start justify-between mb-2">
              <h3 className="text-xl font-semibold">{edu.university}</h3>
              <span className="text-sm">{edu.period}</span>
            </div>
            <p className="text-lg mb-1">{edu.degree}</p>
            <p className="font-semibold mb-4">GPA: {edu.gpa}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
