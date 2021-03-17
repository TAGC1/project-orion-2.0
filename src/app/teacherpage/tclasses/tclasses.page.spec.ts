import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TclassesPage } from './tclasses.page';

describe('TclassesPage', () => {
  let component: TclassesPage;
  let fixture: ComponentFixture<TclassesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TclassesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TclassesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
