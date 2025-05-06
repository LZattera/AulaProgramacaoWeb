import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProvasComponent } from './view-provas.component';

describe('ViewProvasComponent', () => {
  let component: ViewProvasComponent;
  let fixture: ComponentFixture<ViewProvasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewProvasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewProvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
