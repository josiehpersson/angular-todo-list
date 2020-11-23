import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextfilterComponent } from './textfilter.component';

describe('TextfilterComponent', () => {
  let component: TextfilterComponent;
  let fixture: ComponentFixture<TextfilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextfilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextfilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
