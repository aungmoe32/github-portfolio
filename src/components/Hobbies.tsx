import { Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const Hobbies = () => {
  const hobbies = [
    {
      name: "Fingerstyle Guitar",
      emoji: "🎸",
    },
    {
      name: "Video Games",
      emoji: "🎮",
    },
    {
      name: "Building meaningful connections",
      emoji: "🤝",
    },
  ];

  return (
    <>
      <h2 className="text-xl font-bold mb-4">Hobbies & Interests</h2>
      <Card>
        <CardContent className="pt-6">
          <ul className="space-y-2">
            {hobbies.map((hobby, i) => (
              <li key={i} className="flex items-center space-x-2">
                <span className="text-lg text-muted-foreground">
                  {hobby.emoji}
                </span>
                <span className="text-sm text-muted-foreground">
                  {hobby.name}
                </span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </>
  );
};
