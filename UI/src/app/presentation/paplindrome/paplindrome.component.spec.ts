/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PaplindromeComponent } from './paplindrome.component';

describe('PaplindromeComponent', () => {
  let component: PaplindromeComponent;
  let fixture: ComponentFixture<PaplindromeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaplindromeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaplindromeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
