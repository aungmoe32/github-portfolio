import Link from "next/link";
import { cn } from "@/lib/utils";

import { ExternalLink } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

export const projects = [
  {
    title: "ManageX - Modern Content Management System API",
    description:
      "A powerful, feature-rich RESTful API for content management systems built with Laravel, providing comprehensive tools for managing posts, comments, users, media files, and more.",
    tech: "Laravel",
    link: "https://managex-swagger-ui.vercel.app/",
    github: "https://github.com/aungmoe32/managex",
    demo: "https://managex-swagger-ui.vercel.app/",
  },
  {
    title: "MyanTech E-Commerce & Logistics Management System",
    description:
      "A comprehensive e-commerce and logistics management platform that handles the complete lifecycle of retail operations, from customer orders through delivery management.",
    tech: "React + Laravel",
    link: "https://kyaone-frontend-lbad.vercel.app",
    github: "https://github.com/aungmoe32/myantech",
    demo: "https://youtu.be/yrzfl9UrwCo?si=fvXEvkRfsl4-X5NL",
  },
  {
    title: "Passport OAuth Server",
    description:
      "An OAuth 2.0 authentication server built with Laravel Passport and Laravel Filament, providing secure login and token management.",
    tech: "Laravel",
    link: "#",
    github: "https://github.com/aungmoe32/passport-server",
    demo: "https://youtu.be/I_8JTz8vass?si=7bpvZc2AQ1d8m_Wc",
  },
  {
    title: "TALL Stack Chat App",
    description:
      "A real-time chat application built with the TALL stack that enables instant messaging with comprehensive conversation management features.",
    tech: "TALL Stack",
    link: "#",
    github: "https://github.com/aungmoe32/livewire-chat",
    demo: "#",
  },
  {
    title: "LMS (Learning Management System)",
    description:
      "A comprehensive system for online learning and course management with role-based permissions.",
    tech: "Laravel + Vue",
    link: "#",
    github: "https://github.com/aungmoe32/lms",
    demo: "https://youtu.be/a6o9gL58PYc?si=dXAeuJTCtZ6jkFf_",
  },
  {
    title: "PAM (Tiny PHP MVC Framework)",
    description:
      "A custom lightweight PHP MVC framework inspired by Laravel for clean architecture web development.",
    tech: "PHP",
    link: "#",
    github: "https://github.com/aungmoe32/pam",
    demo: "https://youtu.be/sj7AaQjmhCY?si=4nTvnt8kY7Mc5WtL",
  },
  {
    title: "University Campus Management System (UCMS)",
    description:
      "A web application that simplifies campus operations with timetable management, event notifications, and administrative functions.",
    tech: "React + Next.js",
    link: "https://ucms-orpin.vercel.app",
    github: "https://github.com/aungmoe32/ucms",
    demo: "https://youtu.be/hMfTZC_9hsQ?si=m6pDT8P4goit4Vib",
  },
  {
    title: "Clean Blog",
    description:
      "A modern blog application built with clean architecture principles, providing a robust and maintainable platform for content creation and management.",
    tech: "React + Next.js",
    link: "#",
    github: "https://github.com/aungmoe32/clean-blog",
    demo: "#",
  },
];

const techColors = {
  Laravel: "bg-red-500",
  "React + Laravel": "bg-blue-500",
  "TALL Stack": "bg-purple-500",
  "Laravel + Vue": "bg-green-500",
  PHP: "bg-yellow-500",
  "React + Next.js": "bg-cyan-500",
  React: "bg-blue-500",
  "React Native": "bg-green-500",
  "Vue.js": "bg-purple-500",
  Python: "bg-yellow-500",
};

export const Projects = () => {
  return (
    <>
      <h2 className="text-xl font-bold mb-4">Featured Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {projects.map((p, i) => (
          <Card key={i}>
            <CardContent className="pt-6 h-full">
              <div className="flex flex-col h-full">
                <Link
                  href={p.link}
                  className="font-semibold text-primary hover:underline"
                >
                  {p.title}
                </Link>
                <p className="text-sm text-muted-foreground mt-1 mb-4">
                  {p.description}
                </p>
                <div className="mt-auto flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div
                      className={cn(
                        "size-4 rounded-full",
                        techColors[p.tech as keyof typeof techColors]
                      )}
                    />
                    <span className="text-xs font-medium text-muted-foreground">
                      {p.tech}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    {p.github !== "#" && (
                      <Link
                        href={p.github}
                        className="flex items-center gap-1 text-xs text-primary hover:underline"
                      >
                        GitHub
                        <ExternalLink className="inline-block size-3" />
                      </Link>
                    )}
                    {p.demo !== "#" && (
                      <Link
                        href={p.demo}
                        className="flex items-center gap-1 text-xs text-primary hover:underline ml-2"
                      >
                        Demo
                        <ExternalLink className="inline-block size-3" />
                      </Link>
                    )}
                    {p.link !== "#" && (
                      <Link
                        href={p.link}
                        className="flex items-center gap-1 text-xs text-primary hover:underline ml-2"
                      >
                        Live
                        <ExternalLink className="inline-block size-3" />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
};
