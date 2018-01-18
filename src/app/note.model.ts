import { NoteMeta } from './note-meta.model';

export class Note {
  meta: NoteMeta;
  content: string;

  constructor(meta: NoteMeta,
              content: string) {
    this.meta = meta;
    this.content = content;
  }
}
