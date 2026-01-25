import Link from "next/link";

const skills = [
  { id: "1", name: "Dart", proficiency: 5 },
  { id: "2", name: "Swift", proficiency: 4 },
  { id: "3", name: "TypeScript", proficiency: 3 },
  { id: "4", name: "Python", proficiency: 3 },
];

function First() {
  return (
    <div>
      <h1 style={{color: "red", fontSize: "24px"}}>First画面</h1>
      {skills.map((skill) => (
        <p>
          <Link
            href={{
              pathname: `/second/${skill.id}`,
              query: {
                id: skill.id,
                name: skill.name,
                proficiency: skill.proficiency,
              },
            }}
          >
            {skill.name}
          </Link>
        </p>
      ))}
    </div>
  );
}

export default First;