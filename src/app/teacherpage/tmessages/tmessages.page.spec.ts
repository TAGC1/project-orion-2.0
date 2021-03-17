import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TmessagesPage } from './tmessages.page';

describe('TmessagesPage', () => {
  let component: TmessagesPage;
  let fixture: ComponentFixture<TmessagesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TmessagesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TmessagesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
