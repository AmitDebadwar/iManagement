import { TestBed } from '@angular/core/testing';

import { FetchSetExamQuestionsService } from './fetch-set-exam-questions.service';

describe('FetchSetExamQuestionsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FetchSetExamQuestionsService = TestBed.get(FetchSetExamQuestionsService);
    expect(service).toBeTruthy();
  });
});
