import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevisionDocumentalComponent } from './revision-documental.component';

describe('RevisionDocumentalComponent', () => {
  let component: RevisionDocumentalComponent;
  let fixture: ComponentFixture<RevisionDocumentalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RevisionDocumentalComponent]
    });
    fixture = TestBed.createComponent(RevisionDocumentalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
