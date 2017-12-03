export default [
  {
    title: 'JS: Numbers',
    text: 'sup',
    code: `console.log('sahh');`,
  },
  {
    title: 'JS: Engine, runtime, and call stack',
    text: `<p>Javascript is single-threaded (single call stack) and uses a callback queue. Most popular JS engine is V8 from Google. Consists of 
    two main components: The <b>memory heap</b> - where memory allocation happens - and the <b>call stack</b> - stack frames
    that become executed code. The call stack is a data structure that records where in the code we are.            
    <br><b>Web API's</b> - DOM (document), setTimeout, XMLHttpRequest
    <br><b>Event Loop</b> - the event loop sits next to the call stack and is full of events that might take place. It has the ability 
    to "listen" for an event. Only when the Execution Stack is empty, will JS process the event queue and check if a function should be 
    run when an Event Queue action occurs. Ie, the browser asynchronously builds the event queue.the process that constantly checks 
    whether the call stack is empty, and whenever it’s empty, it checks 
    if the event queue has any functions waiting to be invoked. If it does, then the first function in the queue gets invoked and 
    moved over into the call stack. If the event queue is empty, then this monitoring process just keeps on running indefinitely. 
    <br><b>Callback Queue</b> - A JavaScript runtime contains a message queue, which is a list of messages to be processed. A 
    function is associated with each message. When the stack has enough capacity, a message is taken out of the queue and 
    processed. The processing consists of calling the associated function (and thus creating an initial stack frame). The message 
    processing ends when the stack becomes empty again. 
    <br><b>Maximum call stack size exceeded error</b> - when the call stack gets too big
    <br><br><i>https://blog.sessionstack.com/how-does-javascript-actually-work-part-1-b0bacc073cf</i></p>
    <i>https://blog.sessionstack.com/how-javascript-works-inside-the-v8-engine-5-tips-on-how-to-write-optimized-code-ac089e62b12e</i></p>`,
    code: '',
  },
  {
    title: 'HTTP request and response headers',
    text: '',
    code: '',
  },
  {
    title: 'JS: IIFE',
    text: 'Print the numbers 1 to 10, 500ms apart',
    code: `// fails
for (var i = 0; i < 10; i++) {
  setTimeout(function(){
    console.log(i + 1);
  }, 500 * i);
}

// works with block-scoped let variable i
// using let to define i, i gets a new closure for every loop iteration
// https://stackoverflow.com/questions/16473350/let-keyword-in-the-for-loop
for (let i = 0; i < 10; i++) {
  setTimeout(function(){
    console.log(i + 1);
  }, 500 * i);
}

// works with internally invoked function
for (var i = 0; i < 10; i++) {
  (function(j){
    setTimeout(function(){
      console.log(j + 1);
    }, 500 * j);
  })(i);
}`,
  },
  {
    title: 'JS: Function arguments',
    text: `The arguments object is being deprecated, avoid using it.<br>
    Arguments are the actual function values passed in (1, 5, 10, 15, 20), whereas parameters are variables in the method definition.`,
    code: `let x = sum(1, 5, 10, 15, 20);

function sum() {
  let sum = 0;
  for (var i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}`,
  },
  {
    title: '',
    text: '',
    code: '',
  },
];
