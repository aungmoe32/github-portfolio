import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Updated skills from CV
const skills = [
  // Languages
  "JavaScript",
  "TypeScript",
  "PHP",

  // Frameworks/Libraries
  "Laravel",
  "Next.js",
  "React",
  "Vue.js",
  "React Native",
  "TailwindCSS",

  // Databases
  "PostgreSQL",
  "MySQL",

  // Expertise
  "RESTful API",
  "MVC",
  "Responsive Design",
];

export const Skills = () => {
  return (
    <Card className="mt-6">
      <CardHeader>
        <CardTitle>Skills</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {skills.map((s, i) => (
            <Badge key={i} variant="secondary">
              {s}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
