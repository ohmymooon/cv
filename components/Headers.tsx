import { cvData } from "@/data/cvData";
export default function Header() {
  const { personal, summary } = cvData;
  return (
    <header className="py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-2">{personal.name}</h1>
        <p className="text-xl md:text-2xl mb-4">{personal.title}</p>
        <div className="flex flex-wrap gap-4 text-sm">
          <a
            href={`mailto:${personal.email}`}
            className="flex items-center gap-2 hover:text-blue-800 transition"
          >
            {personal.email}
          </a>
          <a
            href={`https://${personal.website}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-blue-800 transition"
          >
            {personal.website}
          </a>
          <p rel="noopener noreferrer" className="flex items-center gap-2 ">
            {personal.location}
          </p>
        </div>
        <br />
        <div>
          <p className="text-justify">{summary}</p>
        </div>
      </div>
    </header>
  );
}
