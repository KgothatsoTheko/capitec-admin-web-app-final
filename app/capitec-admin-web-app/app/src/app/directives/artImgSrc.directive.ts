// _neu_generated_code__dont_modify_directly_
import { HttpClient } from '@angular/common/http';
import {
    Directive,
    ElementRef,
    Input,
    OnDestroy,
    OnInit,
    Renderer2,
} from '@angular/core';
import { NSystemService } from 'neutrinos-seed-services';

@Directive({ selector: '[artImgSrc]' })
export class ArtImgSrcDirective implements OnInit, OnDestroy {
    @Input() collectionName: string;
    @Input() imageFilter: string;
    private systemService = NSystemService.getInstance();
    private _internalSubscription;
    private imgSource;

    constructor(
        private el: ElementRef,
        private _renderer: Renderer2,
        private http: HttpClient
    ) {}

    ngOnInit() {
        if (this.collectionName && typeof this.imageFilter === 'object') {
            this.imgSource =
                this.systemService.getFileIOUrl() +
                this.collectionName +
                '?metadataFilter=' +
                encodeURI(JSON.stringify(this.imageFilter));
            this._internalSubscription = this.http
                .get(this.imgSource, {
                    responseType: 'blob',
                })
                .subscribe(m => {
                    this._renderer.setAttribute(
                        this.el.nativeElement,
                        'src',
                        URL.createObjectURL(m)
                    );
                });
        }
    }

    ngOnDestroy(): void {
        if (this._internalSubscription) {
            this._internalSubscription.unsubscribe();
        }
    }
}
