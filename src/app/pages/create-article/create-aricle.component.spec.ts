import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAricleComponent } from './create-aricle.component';

describe('CreateAricleComponent', () => {
  let component: CreateAricleComponent;
  let fixture: ComponentFixture<CreateAricleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateAricleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAricleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
