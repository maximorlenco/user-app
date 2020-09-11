import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiFilterUserContainerComponent } from './multi-filter-user-container.component';

describe('MultiFilterUserContainerComponent', () => {
  let component: MultiFilterUserContainerComponent;
  let fixture: ComponentFixture<MultiFilterUserContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiFilterUserContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiFilterUserContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
