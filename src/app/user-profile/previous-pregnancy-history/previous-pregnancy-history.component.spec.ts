import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PreviousPregnancyHistoryComponent } from './previous-pregnancy-history.component';

describe('PreviousPregnancyHistoryComponent', () => {
  let component: PreviousPregnancyHistoryComponent;
  let fixture: ComponentFixture<PreviousPregnancyHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviousPregnancyHistoryComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PreviousPregnancyHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
