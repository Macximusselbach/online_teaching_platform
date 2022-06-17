import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtividadesHeaderComponent } from './atividades-header.component';

describe('AtividadesHeaderComponent', () => {
  let component: AtividadesHeaderComponent;
  let fixture: ComponentFixture<AtividadesHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtividadesHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtividadesHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
