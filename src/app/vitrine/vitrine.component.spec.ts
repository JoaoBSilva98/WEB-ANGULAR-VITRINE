import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VitrineComponent } from './vitrine.component';

describe('VitrineComponent', () => {
  let component: VitrineComponent;
  let fixture: ComponentFixture<VitrineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VitrineComponent]
    });
    fixture = TestBed.createComponent(VitrineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
