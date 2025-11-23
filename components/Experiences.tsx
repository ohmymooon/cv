import { cvData } from "@/data/cvData";

export default function Experience() {
  const { experience } = cvData;

  return (
    <section className="section-container py-4">
      <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
        Professional Experience
      </h2>
      <div className="space-y-4">
        {experience.map((exp, index) => (
          <div key={index}>
            <div className="flex items-start justify-between mb-2">
              <h3 className="text-xl font-semibold">{exp.title}</h3>
              <span className="text-sm">{exp.period}</span>
            </div>
            <p className="mb-4">
              {exp.company} • {exp.location}
            </p>
            <ul className="space-y-2">
              {exp.responsibilities.map((responsibility, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span>•</span>
                  <span>{responsibility}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
