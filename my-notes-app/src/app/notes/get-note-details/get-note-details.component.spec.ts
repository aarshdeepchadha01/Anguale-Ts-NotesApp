import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetNoteDetailsComponent } from './get-note-details.component';

describe('GetNoteDetailsComponent', () => {
  let component: GetNoteDetailsComponent;
  let fixture: ComponentFixture<GetNoteDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetNoteDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetNoteDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
