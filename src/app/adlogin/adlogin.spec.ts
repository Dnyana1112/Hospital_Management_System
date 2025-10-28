import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Adlogin } from './adlogin';

describe('Adlogin', () => {
  let component: Adlogin;
  let fixture: ComponentFixture<Adlogin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Adlogin]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Adlogin);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
