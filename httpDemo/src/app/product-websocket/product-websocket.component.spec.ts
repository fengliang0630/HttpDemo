import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductWebsocketComponent } from './product-websocket.component';

describe('ProductWebsocketComponent', () => {
  let component: ProductWebsocketComponent;
  let fixture: ComponentFixture<ProductWebsocketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductWebsocketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductWebsocketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
