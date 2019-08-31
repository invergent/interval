import { Component } from '@angular/core';

@Component({
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  slideOpts = {
    autoplay: true,
    loop: true,
    speed: 400
  };
  bgs: string[] = ['sandra.png', 'study.jpg', 'working-c.png'];

  constructor() {}

}
