import "../css/style.scss"

// Our modules / classes
import MobileMenu from "./modules/MobileMenu"
import Like from "./modules/like"
import HeroSlider from "./modules/HeroSlider"
import Search from "./modules/Search"
import MyNotes from "./modules/myNotes"

// Instantiate a new object using our modules/classes
var mobileMenu = new MobileMenu()
var heroSlider = new HeroSlider()
const search = new Search()
const myNotes = new MyNotes()
const like = new Like()