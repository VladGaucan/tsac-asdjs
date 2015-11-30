function rpn(stringa_polacca){
		var a=stringa_polacca.split(/\s+/),b,c=[];
		while(b=a.shift()){
		  if (b == +b){
		    c.push(b);
  }else{
      var n2=c.pop(), n1=c.pop();
      var re=/^[\+\-\/\*]$/;
      
      c.push(eval(n1+b+''+n2));
  }
}
 
		  return c.pop();
	}