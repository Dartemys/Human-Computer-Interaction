import { Component } from '@angular/core';
import { TabsPage } from '../tabs/tabs';
import { App } from 'ionic-angular';

@Component({
  templateUrl: 'slide.html'
})

export class SlidePage {
  constructor(public appCtrl: App) { }
  pushPage() {
    this.appCtrl.getRootNav().push(TabsPage);
  }
  slides = [
    {
      title: "In the 1st tab",
      description: "You can find all your <b>reservation</b> with your driver and the option to call him or see more information about him.",
      image: "assets/img/FinalScreenshots/Slides/1.png",
    },
    {
      title: "In the 2nd tab",
      description: "You can quickly <b>book</b> your route selecting the data we have prepared for you.",
      image: "assets/img/FinalScreenshots/Slides/2.png",
    },
    {
      title: "In the 3rd tab",
      description: "You can see all our <b>destination</b> for your travel.",
      image: "assets/img/FinalScreenshots/Slides/3.png",
    },
    {
      title: "In the 2nd tab",
      description: "You can quickly <b>book</b> your route selecting the data we have prepared for you.",
      image: "assets/img/FinalScreenshots/Slides/4.png",
    },
    {
      title: "In the 2nd tab",
      description: "You can quickly <b>book</b> your route selecting the data we have prepared for you.",
      image: "assets/img/FinalScreenshots/Slides/5.png",
    },
    {
      title: "In the 2nd tab",
      description: "You can quickly <b>book</b> your route selecting the data we have prepared for you.",
      image: "assets/img/FinalScreenshots/Slides/6.png",
    },
    {
      title: "In the 2nd tab",
      description: "You can quickly <b>book</b> your route selecting the data we have prepared for you.",
      image: "assets/img/FinalScreenshots/Slides/7.png",
    },
    {
      title: "In the 2nd tab",
      description: "You can quickly <b>book</b> your route selecting the data we have prepared for you.",
      image: "assets/img/FinalScreenshots/Slides/8.png",
    },
    {
      title: "In the 2nd tab",
      description: "You can quickly <b>book</b> your route selecting the data we have prepared for you.",
      image: "assets/img/FinalScreenshots/Slides/9.png",
    },
    {
      title: "In the 2nd tab",
      description: "You can quickly <b>book</b> your route selecting the data we have prepared for you.",
      image: "assets/img/FinalScreenshots/Slides/10.png",
    },
    {
      title: "In the 2nd tab",
      description: "You can quickly <b>book</b> your route selecting the data we have prepared for you.",
      image: "assets/img/FinalScreenshots/Slides/11.png",
    },
  ];
}