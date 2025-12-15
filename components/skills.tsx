"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useInView } from "@/hooks/use-in-view"
import { useRef } from "react"
import { Code2, Database, Wrench, Brain, Users, Target } from "lucide-react"

const skillCategories = [
  {
    category: "Programming Languages",
    icon: Code2,
    skills: ["Java", "Python", "C", "SQL", "HTML", "CSS", "JavaScript", "TypeScript", "Golang"],
  },
  {
    category: "Backend & APIs",
    icon: Database,
    skills: ["Golang", "Node.js", "WebSocket", "REST APIs", "PostgreSQL", "Firebase"],
  },
  {
    category: "Frontend Development",
    icon: Wrench,
    skills: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Responsive Design"],
  },
  {
    category: "AI & Data Science",
    icon: Brain,
    skills: ["Machine Learning", "LSTM", "Python", "Pandas", "NumPy", "Scikit-learn"],
  },
  {
    category: "Tools & Platforms",
    icon: Wrench,
    skills: ["Git", "VS Code", "Postman", "Figma", "AWS Cognito", "Power BI"],
  },
  {
    category: "Soft Skills",
    icon: Users,
    skills: ["Problem Solving", "Team Leadership", "Time Management", "Adaptability", "Communication"],
  },
]

const interests = [
  "Full Stack Application Development",
  "Artificial Intelligence and Machine Learning",
  "Web Development and UI/UX Design",
  "Backend Programming",
  "Mobile Application Development",
  "Data Analysis and Visualization",
]

export function Skills() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref)

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <div
          className={`space-y-12 transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div>
            <div className="flex items-center gap-4 mb-6">
              <span className="text-primary font-mono text-xl">04.</span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Skills & Expertise</h2>
              <div className="flex-1 h-px bg-border" />
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {skillCategories.map((category, index) => {
              const Icon = category.icon
              return (
                <Card
                  key={index}
                  className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg group"
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <Icon className="h-5 w-5" />
                      </div>
                      <CardTitle className="text-lg">{category.category}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, i) => (
                        <Badge key={i} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          <Card className="border-2">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <Target className="h-5 w-5" />
                </div>
                <CardTitle className="text-lg">Areas of Interest</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid sm:grid-cols-2 gap-3">
                {interests.map((interest, i) => (
                  <div key={i} className="flex gap-2 items-start">
                    <span className="text-primary text-xs mt-1">▹</span>
                    <span className="text-sm text-muted-foreground">{interest}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
