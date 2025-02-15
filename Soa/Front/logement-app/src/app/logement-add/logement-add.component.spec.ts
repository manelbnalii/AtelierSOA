import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogementAddComponent } from './logement-add.component';

describe('LogementAddComponent', () => {
  let component: LogementAddComponent;
  let fixture: ComponentFixture<LogementAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LogementAddComponent]
    });
    fixture = TestBed.createComponent(LogementAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
