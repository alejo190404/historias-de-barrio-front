import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContarHistoriaComponent } from './contar-historia.component';

describe('ContarHistoriaComponent', () => {
  let component: ContarHistoriaComponent;
  let fixture: ComponentFixture<ContarHistoriaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContarHistoriaComponent]
    });
    fixture = TestBed.createComponent(ContarHistoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
