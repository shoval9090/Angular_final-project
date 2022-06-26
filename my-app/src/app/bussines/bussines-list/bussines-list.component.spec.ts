import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BussinesListComponent } from './bussines-list.component';

describe('BussinesListComponent', () => {
  let component: BussinesListComponent;
  let fixture: ComponentFixture<BussinesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BussinesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BussinesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
