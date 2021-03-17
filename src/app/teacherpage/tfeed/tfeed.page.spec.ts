import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TfeedPage } from './tfeed.page';

describe('TfeedPage', () => {
  let component: TfeedPage;
  let fixture: ComponentFixture<TfeedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TfeedPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TfeedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
