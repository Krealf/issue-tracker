import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DemoBoard } from './demo-board';

describe('DemoBoard', () => {
  let component: DemoBoard;
  let fixture: ComponentFixture<DemoBoard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemoBoard],
    }).compileComponents();

    fixture = TestBed.createComponent(DemoBoard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
