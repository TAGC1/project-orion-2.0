import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ThomePage } from './thome.page';

describe('ThomePage', () => {
  let component: ThomePage;
  let fixture: ComponentFixture<ThomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThomePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ThomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
