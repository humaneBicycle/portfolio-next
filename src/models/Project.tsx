export class Project {
  name: string;
  description: string;
  techStack: string[];
  github: string;
  image_url: string;
  bullets: string[];
  testimonials: Testimonial[];
  url:string;
  constructor(
    name: string,
    description: string,
    techStack: string[],
    github: string,
    image_url:string,
    bullets: string[],
    testimonials: Testimonial[],
    url:string
  ) {
    this.name = name;
    this.description = description;
    this.techStack = techStack;
    this.github = github;
    this.image_url=image_url;
    this.bullets = bullets;
    this.testimonials = testimonials;
    this.url = url;
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
