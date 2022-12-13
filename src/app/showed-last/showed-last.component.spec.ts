import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowedLastComponent } from './showed-last.component';

describe('ShowedLastComponent', () => {
  let component: ShowedLastComponent;
  let fixture: ComponentFixture<ShowedLastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowedLastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowedLastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
