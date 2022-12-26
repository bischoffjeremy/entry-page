import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss']
})
export class TileComponent implements OnInit {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() color: string = '';
  @Input() iconUrl: string = '';
  @Input() url: string = '';

  hover = false;

  constructor() { }

  ngOnInit(): void {
  }

  onHover() {
    this.hover = true;
  }

  onLeave() {
    this.hover = false;
  }
}