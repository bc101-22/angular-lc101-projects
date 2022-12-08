import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'My Favorite Photos';
  image1 = 'https://www.launchcode.org/assets/icons/target-00c7a0bc7776901e3c5cdc4c36c465f19e41a249bc7267a595f0bfa14ab944b7.png';
  image2 = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.krXgDcts2hh2AT61oGCDrgHaE8%26pid%3DApi&f=1&ipt=8233b5e96a876b80a477694c821bb1233657ac195bf99e4ee923a35372b8d3eb&ipo=images';
  image3 = '';

  constructor() { }

  ngOnInit() {
  }

}