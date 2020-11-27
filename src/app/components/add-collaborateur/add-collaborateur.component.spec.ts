import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCollaborateur } from './add-collaborateur.component';

describe('RegisterComponent', () => {
  let component: AddCollaborateur;
  let fixture: ComponentFixture<AddCollaborateur>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCollaborateur ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCollaborateur);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
