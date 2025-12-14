import bigMac from '../assets/images/big-mac.jpg'
import fordImg from '../assets/images/ford-f-150.jpg'
import mansion from '../assets/images/mansion.jpg'
import monaLisa from '../assets/images/mona-lisa.jpg'
import nbaTeam from '../assets/images/nba-team.jpg'
import puppy from '../assets/images/puppy.jpg'
import netflix from '../assets/images/year-of-netflix.jpg'
import farmland from '../assets/images/acre-of-farmland.jpg'
import airJordans from '../assets/images/air-jordans.jpg'
import airpods from '../assets/images/airpods.jpg'
import amazonEcho from '../assets/images/amazon-echo.jpg'
import apacheHelicopter from '../assets/images/apache-helicopter.jpg'
import autoRickshaw from '../assets/images/auto-rickshaw.jpg'
import bike from '../assets/images/bike.jpg'
import boeing747 from '../assets/images/boeing-747.jpg'
import book from '../assets/images/book.jpg'
import cocaCola from '../assets/images/coca-cola-pack.jpg'
import cruiseShip from '../assets/images/cruise-ship.jpg'
import designerHandbag from '../assets/images/designer-handbag.jpg'
import drone from '../assets/images/drone.jpg'
import ferrari from '../assets/images/ferrari.jpg'
import flipFlops from '../assets/images/flip-flops.jpg'
import formula1Car from '../assets/images/formula-1-car.jpg'
import gamingConsole from '../assets/images/gaming-console.jpg'
import goldBar from '../assets/images/gold-bar.jpg'
import horse from '../assets/images/horse.jpg'
import hotTub from '../assets/images/hot-tub.jpg'
import kitten from '../assets/images/kitten.jpg'
import lobsterDinner from '../assets/images/lobster-dinner.jpg'
import m1Abrams from '../assets/images/m1-abrams.jpg'
import makeAMovie from '../assets/images/make-a-movie.jpg'
import mcdonaldsFranchise from '../assets/images/mcdonalds-franchise.jpg'
import monsterTruck from '../assets/images/monster-truck.jpg'
import movieTicket from '../assets/images/movie-ticket.jpg'
import rolex from '../assets/images/rolex.jpg'
import singleFamilyHome from '../assets/images/single-family-home.jpg'
import skyscraper from '../assets/images/skyscraper.jpg'
import smartphone from '../assets/images/smartphone.jpg'
import superbowlAd from '../assets/images/superbowl-ad.jpg'
import tesla from '../assets/images/tesla.jpg'
import videoGame from '../assets/images/video-game.jpg'
import yacht from '../assets/images/yacht.jpg'

export interface Product {
    id: number
    name: string
    price: number
    image: string
}

export const products: Product[] = [
    { id: 1, name: "Big Mac", price: 5, image: bigMac },
    { id: 2, name: "Ford F-150", price: 30000, image: fordImg },
    { id: 3, name: "Mona Lisa Painting", price: 850000000, image: monaLisa },
    { id: 4, name: "Mansion", price: 25000000, image: mansion },
    { id: 5, name: "NBA Team", price: 2000000000, image: nbaTeam },
    { id: 6, name: "Cute Puppy", price: 1500, image: puppy },
    { id: 7, name: "Year of Netflix", price: 180, image: netflix },
    { id: 8, name: "Acre of Farmland", price: 3000, image: farmland },
    { id: 9, name: "Air Jordans", price: 200, image: airJordans },
    { id: 10, name: "AirPods", price: 250, image: airpods },
    { id: 11, name: "Amazon Echo", price: 100, image: amazonEcho },
    { id: 12, name: "Apache Helicopter", price: 31000000, image: apacheHelicopter },
    { id: 13, name: "Auto Rickshaw", price: 3500, image: autoRickshaw },
    { id: 14, name: "Bike", price: 500, image: bike },
    { id: 15, name: "Boeing 747", price: 350000000, image: boeing747 },
    { id: 16, name: "Book", price: 15, image: book },
    { id: 17, name: "Coca-Cola Pack", price: 6, image: cocaCola },
    { id: 18, name: "Cruise Ship", price: 930000000, image: cruiseShip },
    { id: 19, name: "Designer Handbag", price: 5000, image: designerHandbag },
    { id: 20, name: "Drone", price: 1000, image: drone },
    { id: 21, name: "Ferrari", price: 250000, image: ferrari },
    { id: 22, name: "Flip Flops", price: 10, image: flipFlops },
    { id: 23, name: "Formula 1 Car", price: 15000000, image: formula1Car },
    { id: 24, name: "Gaming Console", price: 500, image: gamingConsole },
    { id: 25, name: "Gold Bar", price: 68000, image: goldBar },
    { id: 26, name: "Horse", price: 3000, image: horse },
    { id: 27, name: "Hot Tub", price: 6000, image: hotTub },
    { id: 28, name: "Kitten", price: 200, image: kitten },
    { id: 29, name: "Lobster Dinner", price: 100, image: lobsterDinner },
    { id: 30, name: "M1 Abrams Tank", price: 8000000, image: m1Abrams },
    { id: 31, name: "Make a Movie", price: 200000000, image: makeAMovie },
    { id: 32, name: "McDonalds Franchise", price: 1500000, image: mcdonaldsFranchise },
    { id: 33, name: "Monster Truck", price: 150000, image: monsterTruck },
    { id: 34, name: "Movie Ticket", price: 12, image: movieTicket },
    { id: 35, name: "Rolex", price: 15000, image: rolex },
    { id: 36, name: "Single Family Home", price: 300000, image: singleFamilyHome },
    { id: 37, name: "Skyscraper", price: 850000000, image: skyscraper },
    { id: 38, name: "Smartphone", price: 1000, image: smartphone },
    { id: 39, name: "Superbowl Ad", price: 5500000, image: superbowlAd },
    { id: 40, name: "Tesla", price: 75000, image: tesla },
    { id: 41, name: "Video Game", price: 60, image: videoGame },
    { id: 42, name: "Yacht", price: 7500000, image: yacht },
]
