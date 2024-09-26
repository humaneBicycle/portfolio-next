export class Project {
  name: string;
  description: string;
  techStack: string[];
  github: string;
  url: string;
  bullets: string[];
  testimonials: Testimonial[];
  constructor(
    name: string,
    description: string,
    techStack: string[],
    github: string,
    url:string,
    bullets: string[],
    testimonials: Testimonial[]

  ) {
    this.name = name;
    this.description = description;
    this.techStack = techStack;
    this.github = github;
    this.url=url;
    this.bullets = bullets;
    this.testimonials = testimonials;
  }
}
class Testimonial{
    name: string;
    url: string;
    constructor(name: string, url: string) {
        this.name = name;
        this.url = url;
    }
}
