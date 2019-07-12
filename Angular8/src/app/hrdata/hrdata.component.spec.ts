import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrdataComponent } from './hrdata.component';

describe('HrdataComponent', () => {
  let component: HrdataComponent;
  let fixture: ComponentFixture<HrdataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HrdataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
