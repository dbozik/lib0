import { TestBed, async } from '@angular/core/testing';
import { DemoComponent } from './demo.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DemoComponent]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(DemoComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'app0'`, () => {
    const fixture = TestBed.createComponent(DemoComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('app0');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(DemoComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain(
      'Welcome to app0!'
    );
  });
});
