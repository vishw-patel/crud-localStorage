
import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from "@angular/core";

@Directive({
    selector: '[appalternateif]'
})

export class AlternateIfDirective implements OnInit {
    @Input() appalternateif : boolean

    constructor(
        private templateref: TemplateRef<any>,
        private vcRef: ViewContainerRef
    ){}
    ngOnInit(){
        if (!this.appalternateif){
            this.vcRef.createEmbeddedView(this.templateref)
            
        } else {
            this.vcRef.clear()
        }
    }
}