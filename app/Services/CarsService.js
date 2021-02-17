import { ProxyState } from "../AppState.js"
import Car from "../Models/Car.js"

class CarsService {
    constructor() {
        console.log("Cars Service Working")
    }

    createCar(rawCar) {
        let newCar = new Car(rawCar)
        ProxyState.cars = [...ProxyState.cars, newCar] // pushes newCar to ProxyState.cars
    }

    bid(id) {
        let temp = ProxyState.cars
        let car = temp.find(c => c.id == id)
        car.price += 100
        ProxyState.cars = temp
    }

    deleteCar(id) {
        let temp = ProxyState.cars
        let carIndex = temp.findIndex(c => c.id == id)
        temp.splice(carIndex, 1)
        ProxyState.cars = temp
    }
}

export const carsService = new CarsService()