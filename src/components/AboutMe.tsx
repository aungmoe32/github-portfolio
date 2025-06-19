"use client";
import { Card, CardTitle, CardHeader, CardContent } from "@/components/ui/card";
import ThemeSwitcher from "@/components/ui/ThemeSwitcher";
import useMediaQuery from "@/hook/useMediaQuery";

export const AboutMe = () => {
  const isDesktopOrLaptop = useMediaQuery("(min-width: 1224px)");
  return (
    <Card className="mb-6">
      <CardHeader className="flex flex-row justify-between items-baseline">
        <CardTitle>About Me</CardTitle>
        {isDesktopOrLaptop && <ThemeSwitcher />}
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">
          Highly motivated full-stack web developer with strong front-end and
          back-end expertise. Skilled in building responsive and dynamic web
          applications through personal and academic projects. Proficient in
          database management and experienced with Git for version control.
          Committed to continuous learning and excited to contribute innovative
          solutions to real-world challenges. <br />
          Currently expanding my knowledge in software architecture and design
          patterns.
        </p>
      </CardContent>
    </Card>
  );
};
