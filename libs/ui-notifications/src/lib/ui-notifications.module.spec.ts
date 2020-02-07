import { async, TestBed } from '@angular/core/testing';
import { UiNotificationsModule } from './ui-notifications.module';

describe('UiNotificationsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [UiNotificationsModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(UiNotificationsModule).toBeDefined();
  });
});
