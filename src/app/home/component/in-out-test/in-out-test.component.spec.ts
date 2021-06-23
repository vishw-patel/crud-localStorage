import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InOutTestComponent } from './in-out-test.component';

describe('InOutTestComponent', () => {
  let component: InOutTestComponent;
  let fixture: ComponentFixture<InOutTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InOutTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InOutTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
