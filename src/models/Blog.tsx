export class Blog {
  name: string;
  description: string;
  date: string;
  url:string;
  constructor(name: string, description: string, date: string,url:string) {
    this.name = name;
    this.description = description;
    this.date = date;
    this.url=url;
  }
}
