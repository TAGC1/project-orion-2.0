import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TsubmessagePage } from './tsubmessage.page';

describe('TsubmessagePage', () => {
  let component: TsubmessagePage;
  let fixture: ComponentFixture<TsubmessagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TsubmessagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TsubmessagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
