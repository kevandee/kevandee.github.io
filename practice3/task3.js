function circleArray() {
    if (new.target) {
        let arr = [];
        this.add = function(data) {
            arr.push(data);
        }
        this.get = function(ind) {
            while (ind >= arr.length) {
                ind -= arr.length;
            }
            while (ind < 0) {
                ind += arr.length;
            }
            return arr[ind];
        }
    }
    else {
        return new circleArray();
    }
}

let circledArray = new circleArray();

circledArray.add("Київ");
circledArray.add("Харків");
circledArray.add("Херсон");

console.log(circledArray.get(4));
console.log(circledArray.get(-1));

