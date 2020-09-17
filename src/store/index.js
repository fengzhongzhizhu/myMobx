import {observable,action,computed} from "mobx"

class Calc {
    @observable count = 0;
    @observable text = ""
    @action updateCount(value){
        this.count += value
    }
    @computed get total(){
        return this.count +'个数'
    }

}

let calc = new Calc()
export default calc