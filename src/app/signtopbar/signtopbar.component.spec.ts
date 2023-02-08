import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigntopbarComponent } from './signtopbar.component';

describe('SigntopbarComponent', () => {
  let component: SigntopbarComponent;
  let fixture: ComponentFixture<SigntopbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SigntopbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SigntopbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
