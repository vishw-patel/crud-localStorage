import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { FormsModule } from '@angular/forms';
import { welcome } from '../appPipes/welcome.pipe';
import { ExponentialStrengthPipe } from '../appPipes/exponential-strength.pipe';
import { HighlightTextDirective } from '../directives/highlighttext.directive';
import { RendererHightlightDirective } from '../directives/renderer-hightlight.directive';
import { HostlisDirective } from '../directives/hostlis.directive';
import { AlternateIfDirective } from '../directives/alternatif.directive';
import { InOutTestComponent } from './component/in-out-test/in-out-test.component';
import { ParentComponent } from './component/parent/parent.component';
import { ChildComponent } from './component/child/child.component';


@NgModule({
  declarations: [
    HomeComponent,
    welcome,
    ExponentialStrengthPipe,
    HighlightTextDirective,
    RendererHightlightDirective,
    HostlisDirective,
    AlternateIfDirective,
    InOutTestComponent,
    ParentComponent,
    ChildComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    
  ],
  providers : []
})
export class HomeModule { }
