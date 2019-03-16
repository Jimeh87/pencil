# Pencil

A Canvas mouse / touch detection directive for Angular. It uses Bresenham's Line Drawing Algorithm to insure a smooth draw.

## Demo

[StackBlitz Demo](https://stackblitz.com/edit/pencil-sample)


## Latest Version

@jimeh87/pencil@1.0.0

## Setup

Add dependency `@jimeh87/pencil`

npm:
```shell
npm install --save @jimeh87/pencil
```

yarn:
```shell
yarn add @jimeh87/pencil
```

Add the `PencilModule` to your application module

```js
import { PencilModule } from '@jimeh87/pencil';

@NgModule({
  ...
  imports: [PencilModule, ...],
  ...
})
export class YourAppModule {
}
```

Add the directive to your canvas:
```html
<canvas (jrPencil)="onDraw($event)"
        style="width: 500px; height: 500px">
</canvas>
```

```js
export class AppComponent {

  onDraw(point: { x: number, y: number }) {
    console.log(point);
  }

}
```

## API

### Pencil Directive

#### Selector 
`[jrPencil]`

##### Properties
| Property                                                                                | Description                                                                            | Example                                                                                   |
|-----------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------|
| @Output('jrPencil') pencilPositionEvent = new EventEmitter<{ x: number, y: number }>(); | Emits mouse coordinates when `mousedown` or `touchstart` until `mouseup` or `touchend` | ``` <canvas (jrPencil)="onDraw($event)"></canvas>  ```                                    |
| @Output() pencilUp = new EventEmitter<void>();                                          | Emits event when `mouseup` or `touchend`                                               | ``` <canvas (jrPencil)="onDraw($event)"          (pencilUp)="onPencilUp()"></canvas>  ``` |
| @Input()  pencilDisabled = false;                                                       | disables pencil directive                                                              | ``` <canvas (jrPencil)="onDraw($event)"         [pencilDisabled]="true"></canvas> ```     |

## Development

### Publishing

Run `yarn build` and then in `./dist/pencil` run `yarn publish` 
