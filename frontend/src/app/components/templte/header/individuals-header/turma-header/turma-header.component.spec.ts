import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TurmaHeaderComponent } from './turma-header.component';

describe('TurmaHeaderComponent', () => {
  let component: TurmaHeaderComponent;
  let fixture: ComponentFixture<TurmaHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TurmaHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TurmaHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
