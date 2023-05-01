import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefinitionCreationPageComponent } from './definition-creation-page.component';

describe('DefinitionCreationPageComponent', () => {
  let component: DefinitionCreationPageComponent;
  let fixture: ComponentFixture<DefinitionCreationPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefinitionCreationPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DefinitionCreationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
