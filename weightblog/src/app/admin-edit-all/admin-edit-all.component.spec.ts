import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEditAllComponent } from './admin-edit-all.component';

describe('AdminEditAllComponent', () => {
  let component: AdminEditAllComponent;
  let fixture: ComponentFixture<AdminEditAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminEditAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEditAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
