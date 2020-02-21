   // function
//creating
//    function  fun() {
//    console.log(alert('this is function'));
//
//    }
   // call
   // steps to create a function()
   // 1: create a function
   // 2: call a function
   //this is functipn call
   // fun();
          /*
   lets create a function that
   take name  and say hell + your name
   if  you name is jenad
    return: "hello + jenad*/

    function greating() {
       var name = prompt(' what is your name?');
       // string concatenation
       var reult = 'Hello'+ ' '+ name;
   console.log(reult);


    }
     // this function call
   greating()

   // also a function can take arguments
    /*
     to that you can declare the var be before create the function
     and then pass those args in it
      eg:
     you cab take name and age from the use
     and let the function concatenate the in
      i side it
     */
    //adding tw o numbers together in thr function
   //
   // function add(num1, num2) {
   //     var result = num1 + num2;
   //     console.log(result);
   // }
   // add(20,20);
   // let create a function take s name in promp and return in the html tags
    var name = prompt(' what is your name?')
   function me(name) {
      return document.getElementById('show_me').innerHTML  =result = " hello " + '  '+  name


    }
    me(name);