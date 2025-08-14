// What is the linked list
// a linked is like a chain of peaople holding hands
// each person = node
// each person holds data (like thier name)
// Each person also know the next person (address of next node)

// so every node has 2 parts
// data = value(eg = 10)
// next = pointer / link to the next node
// the first node is called head.
// the last node points to null (end of the list).

// example
// // igameign we swant to 10 20 30
// // Node! :  data = 10 nest = address of Node 3
// // Node 3 Data = e nesxt address of the node 3
// // memore is continuour (firxed sixe, harder to insert / remov)
// // linked List (memory canbe anywhere (dynamic size , easy to inser/ remove)

// // types of linked list
// // singly liked list
// // each node had data + next
// // traverse only forwared 10 20 30 -- null
// // 2 .  double linked list
// // each node had data + next + prev
// // can go forwared and backward
// // example null = 10 ;=20 = 30 null
// // circular linked list
// // last node back to the head example
// // 10 20 30 40 (back to 10)

// // common operations
// // traversal(print all values)

// function Node(nodeData){
//     return{data:data  , next:null}
// }

// // let crease a newNode or new head of the code
// let head   = new Node(10)

// // how to print the linked list know here we are trying to print the linked list
// let temp = head
// while(temp !== null){
//     console.log(temp.data)
//     temp = temp.next
// }

// add a node in the front of the head each time at the point of the tail

// function createNode(nodeData){
//     return {
//         data:nodeData ,
//         next:null
//     }
// }

// // let create a node
// // is there no node avaible how to add a node in the linkedlist
// let head = new createNode(10)
// head.next = new createNode(20)
// head.next.next = new createNode(30)

// // now lets print the nodelist in detail
// let temp = head // store head into the temp variable
// let bag = ""
// while(temp !== null){
//     bag+=temp.data + " "
//     temp = temp.next
// }
// console.log(bag)

function problem() {
  // now here i am going to add a node into a front of the node list
  // suppose our liked list like these a , b ,c now after adding a node into the linked list
  // d - a - b - c. now i want to try out how a node added at the begining of the linked list

  // suppose first we create a linked list how i create a linked list
  function createNode(nodeData) {
    return {
      data: nodeData,
      next: null,
    };
  }

  // here i am create a function that helps to create a function. Now in these these cost worsk like
  // node data = a  it will look like [a|next == null] means [a|null] again the function is called meand
  // nodedata is like
  // second node is created let us b = [b|null] , similarly like [c|null]
  // node let create a linked list

  let head = new createNode("a");
  head.next = new createNode("b");
  head.next.next = new createNode("c");

  // now here i am trying to node at a begignnneg
  // value means data that i get from the linked list
  function addNodeAtBegining(head, value) {
    let newNode = createNode(value);
    // means create a headnode and create a node into a code how the code works
    // i want to ask you how i create a node from a linked list
    // i creae a newnode
    // first we have to linke the newnode into the starting point of the node
    // after that we have give the position of newnode to the head

    newNode.next = head;
    head = newNode;
    return head;
  }

  head = addNodeAtBegining(head, 5);
  head = addNodeAtBegining(head, 10); // in the return we get a head after the put print that head

  // now let's print the node into the linked list
  // i want to aske you how the code andd into the liked list how the code works
  // so that how the code works check into a single digit array
  // lets store a variable into the single variable

  let temp = head;
  let bag = "";
  while (temp !== null) {
    // now we have to add a temp into the means head into the front of the node her i am going to print the nodeList
    bag += temp.data + " ";
    console.log(bag);
    temp = temp.next;
  }
}

// problem();

// now at a node at a tail position of the code. How i add a node a tail position we can see that in these code.
// how the code and crete a works place how the works of the code and
// verify works at a semidcondustory how the full story of the concert of the cod e and it looks works like a
// santa close how the node add into a  code and how the code works

function problem1() {
  function createNode(nodeData) {
    return {
      data: nodeData,
      next: null,
    };
  }

  let head = new createNode("a");
  head.next = new createNode("b");
  head.next.next = new createNode("c");

  function addNodeAtTail(head, value) {
    let newNode = createNode(value);

    if (head == null) {
      return newNode;
    }

    let temp = head;
    while (temp.next !== null) {
      temp = temp.next;
    }
    temp.next = newNode;
    return head;
  }

  head = addNodeAtTail(head, 9);
  head = addNodeAtTail(head, 10);

  // Print the linked list
  let temp = head;
  let bag = "";
  while (temp !== null) {
    bag += temp.data + " ";
    console.log(bag);
    temp = temp.next;
  }
}
problem1();
