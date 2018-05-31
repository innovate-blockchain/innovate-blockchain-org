import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPageGroupsComponent } from './landing-page-groups.component';

describe('LandingPageGroupsComponent', () => {
  let component: LandingPageGroupsComponent;
  let fixture: ComponentFixture<LandingPageGroupsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingPageGroupsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingPageGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
