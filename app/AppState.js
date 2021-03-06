import Car from "./Models/Car.js"
import House from "./Models/House.js"
import Job from "./Models/Job.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {

  /** @type {Car[]} */
  cars = [new Car({make: "Jeep", model: "Wrangler", price: 20000, imgUrl: "https://media.ed.edmunds-media.com/jeep/wrangler/2020/oem/2020_jeep_wrangler_convertible-suv_unlimited-freedom_fq_oem_1_1600.jpg", year: 2012, description: "Black Star on Hood", miles: 40000}), new Car({make: "Ford", model: "F-150", price: 7000, imgUrl: "https://www.motortrend.com/uploads/sites/10/2015/11/2004-ford-f-150-stx-2wd-truck-angular-front.png?fit=around%7C875:492.1875", year: 2004, description: "Aged Headlights", miles: 80000}) ]

  /** @type {House[]} */
  houses = [new House({type: "House", address: "4200 W. Test Dr.", city: "Denver", description: "Clean, Quiet and Cheap", zip: 83646, price: 140000, imgUrl: "https://www.idahostatesman.com/latest-news/vndpp6/picture227439999/alternates/FREE_1140/Boise%20Caddis%203rd%20and%20Myrtle%20corner%20view%20from%20CCDC%203-11-19%20cropped%20jpg.jpg"})]

  /** @type {Job[]} */
  jobs = [new Job({title: "Software Developer", city: "Boise", pay: 50000, tasks: "Create and build user-orientated software", website: "www.github.com", imgUrl: "https://www.usnews.com/dims4/USNEWS/600fce7/2147483647/crop/2000x1313%2B0%2B0/resize/640x420/quality/85/?url=http%3A%2F%2Fmedia.beam.usnews.com%2Ff9%2Ff1%2Fa6174c87479b8222c09903d7651c%2F190219-softwaredevelopers-stock.jpg", phone: "(208) 123-4567"})]
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
