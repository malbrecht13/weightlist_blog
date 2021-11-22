import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEditSinglePostComponent } from './admin-edit-single-post.component';

describe('AdminEditSinglePostComponent', () => {
  let component: AdminEditSinglePostComponent;
  let fixture: ComponentFixture<AdminEditSinglePostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminEditSinglePostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEditSinglePostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
