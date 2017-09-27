import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})


export class HomePage {

    cards = [
        {
            imgLoc: "carIMG.jpg",
            name: "Carcassone",
            blurb: "Tile Laying, Worker Placement game.",
            favorite: false,
            share: false
        },
        {
            imgLoc: "casIMG.jpg",
            name: "Castles of the Mad King Ludwig",
            blurb: "Castle Building game.",
            favorite: false,
            share: false
        },
        {
            imgLoc: "dicIMG.jpg",
            name: "Dice City",
            blurb: "Roll. Build. Win.",
            favorite: false,
            share: false
        },
        {
            imgLoc: "magIMG.jpg",
            name: "Mage Knight",
            blurb: "High stakes magical combat.",
            favorite: false,
            share: false
        },
        {
            imgLoc: "marIMG.jpg",
            name: "Terraforming Mars",
            blurb: "Crtically acclaimed game based on making Mars hospitable to humans.",
            favorite: false,
            share: false
        },
        {
            imgLoc: "panIMG.jpg",
            name: "Pandemic",
            blurb: "Save the world from deadly diseases before they take over.",
            favorite: false,
            share: false
        },
        {
            imgLoc: "scoIMG.jpg",
            name: "Scott Pilgrim Vs. The World Card Game",
            blurb: "Best the evil exs and fall in love. Or don't.",
            favorite: false,
            share: false
        },
        {
            imgLoc: "setIMG.jpg",
            name: "Catan",
            blurb: "Classic Euro-style game. Gateway to the rest.",
            favorite: false,
            share: false
        },
        {
            imgLoc: "swoIMG.jpg",
            name: "Sword & Sorcery",
            blurb: "Cooperative dungeon crawling miniature game.",
            favorite: false,
            share: false
        },
        {
            imgLoc: "terIMG.jpg",
            name: "Terra Mystica",
            blurb: "Play as one of many races and attempt superiority.",
            favorite: false,
            share: false
        }
    ];

  constructor(public navCtrl: NavController) {

  }
    faveChange(card) {
        let indexFave = this.cards.indexOf(card);
        if(indexFave > -1)
            if (card.favorite){
                this.cards[indexFave].favorite = false;
            }else{
                this.cards[indexFave].favorite = true;
            }
    }
    shareChange(card) {
        let indexShare = this.cards.indexOf(card);
        if(indexShare > -1)
            if (card.share){
                this.cards[indexShare].share = false;
            }else{
                this.cards[indexShare].share = true;
            }
    }
    deleteItem(listItem) {
        let index = this.cards.indexOf(listItem);
        this.cards.splice(index, 1)
    };

}
