import { NgModule } from '@angular/core';
import { CounterComponent } from './components/counter/counter.component';

@NgModule({
  declarations: [CounterComponent], // las declarations dejan usar el modulo dentro del scope del folder
  exports: [CounterComponent], // exports deja usar el modulo fuera del scope del folder
})
export class CounterModule {}
