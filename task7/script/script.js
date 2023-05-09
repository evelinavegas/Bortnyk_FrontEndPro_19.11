class Hamburger{
    constructor(size){
        this.size = size;
        if(size == 'small'){
            this.calories = 20
            this.price = 50
        } else if(size == 'big'){
            this.calories = 40
            this.price = 100
        }
        
    }
    getCalories(data){
        let caloriesComponents
        switch(data){
            case 'chees':
                return caloriesComponents = 20;
            case 'salat':
                return caloriesComponents = 5;
            case 'potato':
                return caloriesComponents = 10;
            case 'seasoning':
                return caloriesComponents = 0;
            case 'mayo':
                return caloriesComponents = 5;
            default :
                return this.calories 
            }
    }
    getPrice(data){
        let priceFilling
        switch(data){
            case 'chees':
                return priceFilling= 10;
            case 'salat':
                return priceFilling= 20;
            case 'potato':
                return priceFilling= 15;
            case 'seasoning':
                return priceFilling = 15;
            case 'mayo':
                return priceFilling = 20;
            default:
                return this.price      
            }  
    }
    
    
    getPriceHumburger(){
        console.log(`Hamburger size: ${this.size} price ${this.price}`)
        console.log('\n')

    }
    getCaloriesHumburger(){
        console.log(`Hamburger size: ${this.size} have ${this.calories} calories`)
        console.log('\n')
    }
    
}

class  Filling extends Hamburger{
    constructor(size,filling){
        super(size)
        this.filling = filling
        if(filling) {
            this.calories = this.calories + this.getCalories(filling)
            this.price = this.price + this.getPrice(filling)
        } else{
            this.calories = this.calories
            this.price = this.price
        }
    }
    
    getPriceFilling(){
        console.log(`Hamburger size: ${this.size} with ${this.filling} price ${this.price}`)
        console.log('\n')
    }
    getCaloriesFilling() {
        console.log(`Hamburger size: ${this.size} with ${this.filling} have ${this.calories} calories`)
        console.log('\n')
    }

}

class Components extends Filling{
    constructor(size, filling, components) {
        super(size, filling);
        if(components) {
            this.calories = this.calories +this.getCalories(components)
            this.price = this.price + this.getPrice(components)
        }else{
            this.calories = this.calories
            this.price = this.price
        }
        this.components = components
    }
    getPriceComponent(){
        console.log(`Hamburger size: ${this.size} with ${this.filling} and ${this.components} price ${this.price} $`)
        console.log('\n')
    }
    getCaloriesComponent(){
        console.log(`Hamburger size: ${this.size} with ${this.filling} and ${this.components} have ${this.calories} calories`)
        console.log('\n')
    }
    
}
    
const hamburger = new Hamburger('big')
const smallHamburger = new Filling('big', 'chees')
const componentsHamburger = new Components('big','potato', 'mayo')


hamburger.getPriceHumburger()
hamburger.getCaloriesHumburger()

smallHamburger.getPriceFilling()
smallHamburger.getCaloriesFilling()


componentsHamburger.getPriceComponent()
componentsHamburger.getCaloriesComponent()
// console.log(hamburger)
// console.log(componentsHamburger)
// console.log(smallHamburger)

