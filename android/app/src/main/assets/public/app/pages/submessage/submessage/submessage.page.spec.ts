import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SubmessagePage } from './submessage.page';

describe('SubmessagePage', () => {
  let component: SubmessagePage;
  let fixture: ComponentFixture<SubmessagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmessagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SubmessagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
