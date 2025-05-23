import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentManagementComponent } from './documents-management.component';

describe('DocumentsManagementComponent', () => {
  let component: DocumentManagementComponent;
  let fixture: ComponentFixture<DocumentManagementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DocumentManagementComponent]
    });
    fixture = TestBed.createComponent(DocumentManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
