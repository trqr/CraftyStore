import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoutContainerComponent } from './logout-container.component';

describe('LogoutContainerComponent', () => {
  let component: LogoutContainerComponent;
  let fixture: ComponentFixture<LogoutContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogoutContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogoutContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
