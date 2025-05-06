import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewQuestoesComponent } from './view-questoes.component';

describe('ViewQuestoesComponent', () => {
  let component: ViewQuestoesComponent;
  let fixture: ComponentFixture<ViewQuestoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewQuestoesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewQuestoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
