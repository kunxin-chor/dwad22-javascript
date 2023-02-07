function foobar() {
  
    console.log("Hello world"); 
  }
  
  // let a = ["apples", "bananas"];
  // let b = a;
  
  foobar();
  // assign the reference in foobar to f 
  let f = foobar;
  console.log(f);
  f = 3;
  console.log(foobar);
  f();