import {observable, computed, action} from 'mobx'; 

class store {
    @observable animals = [];
    @computed get animalsLength() {
        return this.animals.length;
    };

    @action addAnimal = (animal) => {
        this.animals.push(animal);
    }
}

let appData = new store();
export default appData;

