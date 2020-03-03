function swaping(x,y){
    var a= x;
    var b= y;

    a= a+b;
    a= a-b;
    b=a+b;
  
        
      //   a=a*b;
      //   b=a/b;
      //   a=a/b;
      //     console.log(a,b);
        a = a ^ b; b = a ^ b; a = a ^ b; 
          console.log(a,b);
      }
      
      swaping(2,3)
