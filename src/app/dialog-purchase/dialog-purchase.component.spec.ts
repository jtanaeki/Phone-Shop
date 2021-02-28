import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogPurchaseComponent } from './dialog-purchase.component';

describe('DialogPurchaseComponent', () => {
  let component: DialogPurchaseComponent;
  let fixture: ComponentFixture<DialogPurchaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogPurchaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogPurchaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
