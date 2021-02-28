import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressBarCanvasComponent } from './progress-bar-canvas.component';

describe('ProgressBarCanvasComponent', () => {
  let component: ProgressBarCanvasComponent;
  let fixture: ComponentFixture<ProgressBarCanvasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgressBarCanvasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressBarCanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
