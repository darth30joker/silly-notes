import { TestBed, inject } from '@angular/core/testing';

import { NotesService } from './notes.service';

describe('NotesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NotesService]
    });
  });

  it('should be created', inject([NotesService], (service: NotesService) => {
    expect(service).toBeTruthy();
  }));

  it('should be nothing for list', inject([NotesService], (service: NotesService) => {
    service.loadList().subscribe(list => {
      expect(list).toBe([]);
    })
  }));
});
