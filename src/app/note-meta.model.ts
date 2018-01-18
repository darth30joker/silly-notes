export class NoteMeta {
  id: string;
  title: string;
  created: Date;
  updated: Date;

  constructor(id: string,
              title: string) {
    this.id = id;
    this.title = title;

    this.created = this.updated = new Date();
  }
}
