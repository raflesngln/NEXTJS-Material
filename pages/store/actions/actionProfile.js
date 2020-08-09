

class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  // Getter
  get area() {
    return this.calcArea();
  }
   mydata(){
   return 'ATT-GROUP '+this.calcArea(); 
  }
  // Method
  calcArea() {
    return this.height * this.width;
  }
}

const MyProfile=()=>{
  return(
    <>
    <h1>HAIII</h1>
    </>
  )
}


export{
  Rectangle,
  MyProfile
}
