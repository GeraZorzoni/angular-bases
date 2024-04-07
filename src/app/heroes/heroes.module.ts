import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroComponent } from './Components/hero/hero.component';
import { ListComponent } from './Components/list/list.component';

@NgModule({
  exports: [HeroComponent, ListComponent],
  declarations: [HeroComponent, ListComponent],
  imports: [CommonModule],
})
export class HeroesModule {}
