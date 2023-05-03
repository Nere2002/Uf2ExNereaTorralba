import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificaCorreuComponent } from './modifica-correu.component';

describe('ModificaCorreuComponent', () => {
  let component: ModificaCorreuComponent;
  let fixture: ComponentFixture<ModificaCorreuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificaCorreuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModificaCorreuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
