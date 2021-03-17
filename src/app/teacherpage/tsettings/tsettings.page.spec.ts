import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TsettingsPage } from './tsettings.page';

describe('TsettingsPage', () => {
  let component: TsettingsPage;
  let fixture: ComponentFixture<TsettingsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TsettingsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TsettingsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
