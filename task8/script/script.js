class SuperMath{
    constructor(x,y, znak) {
        this.y = y
        this.x = x
        this.znak = znak
    }
    confirm(){
        const result = confirm(`Want to perform: ${this.x}${this.znak}${this.y}`);
        return result
    }
    check(x, y, znak){
        znak = this.znak;
        x= this.x
        y= this.y
        let result = eval(`${x}${znak}${y}`)
        alert(`${x} ${znak} ${y} = ${result}`)
    }
}
const exersice = new SuperMath(12, 10 , '-')
const confirmResult = exersice.confirm()
if(confirmResult) {
    exersice.check()
} else{
    let data =prompt('Enter x, y, znak')
    data = data.replace(/ /g,'')
    const x = data.slice(0,1)
    const y = data.slice(1,2)
    const znak = data.slice(2,3)
    const exersiceData = new SuperMath(x, y, znak)
    exersiceData.check()
}