import {generateId} from "../Utils/generateId.js"

export default class Car {
    constructor ({make, model, year, price, description, imgUrl, miles}) {
        this.make = make
        this.model = model
        this.year = year
        this.price = price
        this.description = description
        this.imgUrl = imgUrl
        this.miles = miles
        this.id = generateId()
    }

    get Template() {
        return /*html*/`
            <div class="card col-sm-2">
                <img src="${this.imgUrl}" alt="${this.model}" class="card-img-top">
                <div class="card-body">
                    <h4>${this.year} ${this.make} ${this.model}</h4>
                    <p>${this.description}</p>
                    <p>Miles: ${this.miles}</p>
                    <p>Price: $${this.price}</p>
                    <div>
                        <button class="btn btn-success" onclick="app.CarsController.bid('${this.id}')">Bid</button>
                        <button onclick="app.CarsController.deleteCar(${this.id})" class="btn btn-danger px-2">X</button>
                    </div>
                </div>
            </div>`
    }
}

