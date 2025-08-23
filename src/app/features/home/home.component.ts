import { Component } from '@angular/core';
import { SliderComponent } from "./slider/slider.component";
import { MenuComponent } from "./menu/menu.component";
import { WhyusComponent } from "./whyus/whyus.component";
import { AdviceComponent } from "./advice/advice.component";
import { ContactusComponent } from "../contactus/contactus.component";

@Component({
  selector: 'app-home',
  imports: [SliderComponent, MenuComponent, WhyusComponent, AdviceComponent, ContactusComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
