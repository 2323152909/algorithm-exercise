var addTwoNumbers = function(l1, l2) {
  let count = 0;
  let l3 = [];
  let current1 = l1.head;
  let current2 = l2.head;
  let current3 = l3.head;
  while(current1){
      count = current1.val + current2.val;
      let val = 0;
      if(count > 10){  
          val = 1;
      }
      current3.val = count % 10 + val;
      current1 = current1.next;
      current2 = current2.next;
      current3 = current3.next;
  }

  return l3;
};