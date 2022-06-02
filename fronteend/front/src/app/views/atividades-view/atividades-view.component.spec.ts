import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtividadesViewComponent } from './atividades-view.component';

describe('AtividadesViewComponent', () => {
  let component: AtividadesViewComponent;
  let fixture: ComponentFixture<AtividadesViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtividadesViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtividadesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
