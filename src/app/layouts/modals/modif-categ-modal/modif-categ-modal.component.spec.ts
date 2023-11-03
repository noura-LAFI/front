import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifCategModalComponent } from './modif-categ-modal.component';

describe('ModifCategModalComponent', () => {
  let component: ModifCategModalComponent;
  let fixture: ComponentFixture<ModifCategModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifCategModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifCategModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
