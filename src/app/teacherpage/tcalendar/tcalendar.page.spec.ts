import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TcalendarPage } from './tcalendar.page';

describe('TcalendarPage', () => {
  let component: TcalendarPage;
  let fixture: ComponentFixture<TcalendarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TcalendarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TcalendarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
