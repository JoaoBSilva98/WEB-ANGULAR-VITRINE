import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReenvioSenhaComponent } from './reenvio-senha.component';

describe('ReenvioSenhaComponent', () => {
  let component: ReenvioSenhaComponent;
  let fixture: ComponentFixture<ReenvioSenhaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReenvioSenhaComponent]
    });
    fixture = TestBed.createComponent(ReenvioSenhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
