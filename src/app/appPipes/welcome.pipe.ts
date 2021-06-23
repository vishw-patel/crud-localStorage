import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'welcome'
})
export class welcome implements PipeTransform {
    transform(value:any) {
            return "this is custome pipe " + value
    }
}