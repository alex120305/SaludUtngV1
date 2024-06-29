import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JustificanteComponent } from './justificante.component';

describe('JustificanteComponent', () => {
  let component: JustificanteComponent;
  let fixture: ComponentFixture<JustificanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JustificanteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JustificanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
