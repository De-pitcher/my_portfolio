import { Button } from "@/components/ui/Button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Section } from "@/components/ui/Section";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Section className="min-h-[80vh] flex items-center">
        <div className="max-w-4xl">
          <Badge className="mb-4">Full-Stack Developer</Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Hi, I'm Noel 👋
          </h1>
          <p className="text-xl md:text-2xl text-foreground/60 mb-8 max-w-2xl">
            Full-Stack Software Engineer specializing in{" "}
            <span className="text-foreground font-semibold">Enterprise SaaS</span>,{" "}
            <span className="text-foreground font-semibold">Cross-Platform Mobile Apps</span>, and{" "}
            <span className="text-foreground font-semibold">IoT Integration</span>.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg">View Projects</Button>
            <Button variant="outline" size="lg">
              Contact Me
            </Button>
          </div>
        </div>
      </Section>

      {/* Test Components Section */}
      <Section className="bg-foreground/5">
        <h2 className="text-3xl font-bold mb-8">Component Preview</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>React & Next.js</CardTitle>
              <CardDescription>Modern web development</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-foreground/60">
                Building scalable applications with the latest frameworks.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Flutter</CardTitle>
              <CardDescription>Cross-platform mobile</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-foreground/60">
                Beautiful, performant apps for iOS and Android.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Node.js & Python</CardTitle>
              <CardDescription>Backend development</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-foreground/60">
                Robust APIs and microservices architecture.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          <Badge>React</Badge>
          <Badge variant="secondary">TypeScript</Badge>
          <Badge variant="outline">Flutter</Badge>
          <Badge>Node.js</Badge>
          <Badge variant="secondary">Python</Badge>
          <Badge variant="outline">MongoDB</Badge>
        </div>
      </Section>
    </div>
  );
}
