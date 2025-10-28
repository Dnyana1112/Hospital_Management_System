import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Doctlogin } from './doctlogin';

describe('Doctlogin', () => {
  let component: Doctlogin;
  let fixture: ComponentFixture<Doctlogin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Doctlogin]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Doctlogin);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
