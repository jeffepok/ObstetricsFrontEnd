import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BioDataComponent } from './bio-data.component';

describe('BioDataComponent', () => {
  let component: BioDataComponent;
  let fixture: ComponentFixture<BioDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BioDataComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BioDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
