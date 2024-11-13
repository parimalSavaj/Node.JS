![](./img/libuv.png)

## What is role of Libuv in side the Node.JS ?

- provides asynchronous I/O to node. Node.JS is `non-blocking I/O model` so using libuv this thing is happen.

- normally see JS is synchronous but same API's like file, network, and DNS requests this are asynchronous operation handel by libuv in side node.

- Thread Pool for Blocking Operations: While Node.js is single-threaded, it offloads some blocking operations to a background thread pool, such as file system operations and cryptographic functions. libuv manages this thread pool, ensuring these tasks don't block the main thread. (main thread is V8 engine)

![](./img/nodeLibuv.png)

`in last sync keyword's method are block main thread.`

---

---

## see inside Libuv

> **first know one thing V8 Engine not wait any async task, for async task handle Libuv**

- Node inside Libuv demo image.
  ![](./img/img_Inside_Libuv.png) 

- Event Loop working image.
  ![](./img/event_Loop.png)

- explain Libuv works 

    - first see the Libuv image; see inside have event loop, thread pool and callback queues.

    - mainly see event loop and callback queues thread pool see later.

    - see second image and event loop running like process.nextTick() than promise callbacks than timer like setTimeout and setInterval than again to process.nextTick and promise after this go poll in side poll have I/O callbacks, fs, crypto, http.get etc... after do this again go inner loop process.nextTick and promise; after check, inside this check have setImmediate after again go process and promise then last close inside this socket and on("close"), this loop run continuity.

    - if not any callback queues so go poll step and wait for any poll callback do. and running agent with start with poll step....

---

---

## Thread pool

