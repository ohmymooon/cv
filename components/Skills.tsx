import { cvData } from "@/data/cvData";

export default function Skills() {
  const { skills } = cvData;
  return (
    <section className="section-container">
      <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
        Skills & Knowledge
      </h2>
      <div>
        <div className="space-y-4">
          {skills.map((skill, index) => (
            <div key={index}>
              <h3 className="font-semibold mb-2">{skill.category}</h3>
              <p>{skill.items}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
