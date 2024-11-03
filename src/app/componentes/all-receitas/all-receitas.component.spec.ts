import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllReceitasComponent } from './all-receitas.component';

describe('AllReceitasComponent', () => {
  let component: AllReceitasComponent;
  let fixture: ComponentFixture<AllReceitasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AllReceitasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllReceitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
