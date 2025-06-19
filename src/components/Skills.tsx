import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Updated skills from CV
const skills = [
  // Languages
  "JavaScript",
  "TypeScript",
  "PHP",
  "Java",
  "SQL",

  // Frameworks/Libraries
  "Laravel",
  "Next.js",
  "React",
  "Vue.js",
  "React Native",
  "Laravel Filament",
  "Livewire",
  "Passport",
  "TailwindCSS",
  "React Query",
  "React Hook Form",
  "Zod",
  "Framer Motion",
  "Vite",
  "Webpack",

  // Tools
  "Git",
  "Github",
  "Postman",
  "Laravel Sail",
  "Vercel",

  // Databases
  "PostgreSQL",
  "MySQL",
  "S3",

  // Expertise
  "RESTful API",
  "Web APIs",
  "Web Push",
  "WebRTC",
  "MVC",
  "Firebase",
  "Supabase",
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
