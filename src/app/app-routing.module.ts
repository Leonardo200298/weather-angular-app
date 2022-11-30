import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { WeatherComponent } from './components/weather/weather.component';



const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path: 'about', component:AboutComponent},
  {path: 'home', component:WeatherComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
