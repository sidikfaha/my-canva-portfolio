export class Canvas {
    private static $instance: Canvas;

    public $context: CanvasRenderingContext2D;
    public $el: HTMLCanvasElement;
    public $size: Size;

    private constructor() {
        this.$el = document.createElement('canvas');
        this.$context = this.$el.getContext('2d')!;

        this.$size = {
            width: window.innerWidth,
            height: window.innerHeight
        }

        this.build();
    }

    private build() {
        const el = this.$el;

        // Setting document styles
        document.body.style.margin = '0px';

        // Setting size
        el.width = this.$size.width;
        el.height = this.$size.height;

        document.body.append(el);
    }

    public static getInstance() {
        if (!this.$instance) {
            this.$instance = new Canvas();
        }
        return this.$instance;
    }
}

export interface Size {
    width: number;
    height: number;
}