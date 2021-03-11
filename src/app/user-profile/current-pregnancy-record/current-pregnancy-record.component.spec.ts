import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CurrentPregnancyRecordComponent } from './current-pregnancy-record.component';

describe('CurrentPregnancyRecordComponent', () => {
  let component: CurrentPregnancyRecordComponent;
  let fixture: ComponentFixture<CurrentPregnancyRecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentPregnancyRecordComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CurrentPregnancyRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
