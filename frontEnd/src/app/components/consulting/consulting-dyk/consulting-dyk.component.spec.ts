import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultingDykComponent } from './consulting-dyk.component';

describe('ConsultingDykComponent', () => {
  let component: ConsultingDykComponent;
  let fixture: ComponentFixture<ConsultingDykComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultingDykComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultingDykComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
