import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    Draw on me:
    <canvas (jrPencil)="onDraw($event)"
            style="width: 500px; height: 500px"
            #demoCanvas>
    </canvas>
  `
})
export class AppComponent implements AfterViewInit {

  @ViewChild('demoCanvas')
  private canvasRef: ElementRef;
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;

  ngAfterViewInit(): void {
    this.canvas = this.canvasRef.nativeElement;
    this.ctx = this.canvas.getContext('2d');
    this.setCanvasBackground();
  }

  onDraw(point: { x: number, y: number }) {
    // this.ctx.clearRect(point.x, point.y, 1, 1);
    this.ctx.fillStyle = '#6d6a65';
    this.ctx.fillRect(point.x, point.y, 1, 1);
  }

  private setCanvasBackground() {
    this.ctx.fillStyle = "#e5e5e5";
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
  }
}
