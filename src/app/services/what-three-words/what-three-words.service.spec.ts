/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { WhatThreeWordsService } from './what-three-words.service';

describe('Service: WhatThreeWords', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WhatThreeWordsService]
    });
  });

  it('should ...', inject([WhatThreeWordsService], (service: WhatThreeWordsService) => {
    expect(service).toBeTruthy();
  }));
});
