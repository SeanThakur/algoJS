// A ring buffer (also known as a circular buffer or circular queue) is a fixed-size data structure that wraps around upon reaching the end, overwriting old data if it becomes full
// This buffer has a fixed maximum size and uses two pointers: one for reading (usually called the read pointer) and one for writing (usually called the write pointer).
// The pointers move circularly within the buffer, looping back to the start when reaching the end.

// Key Features of a Ring Buffer
// Fixed Size: The buffer has a fixed size, making memory allocation straightforward.
// Circular Structure: When the end is reached, the buffer wraps around to the beginning, forming a continuous loop.
// Efficient in Continuous Data Processing: Particularly useful for continuous, real-time data processing where old data is discarded once the buffer is full.
// FIFO (First-In-First-Out): Data is read and written in a first-in-first-out manner, similar to a queue.

// How a Ring Buffer Works
// Let’s go through the basic operations in a ring buffer:

// Enqueue (Write/Insert): Adds data at the write pointer’s position and moves the write pointer forward.
//         If the buffer is full, it will overwrite the oldest data.
// Dequeue (Read): Reads data at the read pointer’s position and moves the read pointer forward.
// Wrap Around: When either pointer reaches the buffer’s end, it wraps around to the start,
//             ensuring that the buffer operates in a circular fashion.

class RingBuffer {
  constructor(size) {
    this.buffer = new Array(size);
    this.size = size;
    this.readPointer = 0;
    this.writePointer = 0;
    this.full = false;
  }

  enqueue(data) {
    // enter the data into buffer array with write pointer index;
    this.buffer[this.writePointer] = data;
    // increment the write pointer count circularly using moduleo
    this.writePointer = (this.writePointer + 1) % this.size;

    if (this.writePointer === this.readPointer) {
      // The Buffer array is full
      this.full = true;
      // increament the readpointer count circularly so that after the new data is overwritten in 0 index the read pointer should point to old data index
      this.readPointer = (this.readPointer + 1) % this.size;
    } else {
      this.full = false; // Buffer array is not full
    }
  }

  dequeue() {
    if (this.isEmpty()) return null; // array is empty

    const data = this.buffer[this.readPointer]; //
    this.readPointer = (this.readPointer + 1) % this.size;
    this.full = false;
    return data;
    // In the dequeue operation of a ring buffer (or circular buffer), the data is not actively "removed" from the buffer.
    // Instead, the readPointer is simply advanced to the next position, effectively skipping over the old data.
  }

  isEmpty() {
    return !this.full && this.readPointer === this.writePointer;
  }

  printBuffer() {
    console.log(this.buffer);
    return this.buffer;
  }
}

const ringBuffer = new RingBuffer(3);
ringBuffer.enqueue(1); // Buffer: [1, , ]
ringBuffer.enqueue(2); // Buffer: [1, 2, ]
ringBuffer.enqueue(3); // Buffer: [1, 2, 3], now full

ringBuffer.enqueue(4); // Buffer: [4, 2, 3], overwrites oldest data (1)
// console.log(ringBuffer.dequeue()); // Output: 2
// console.log(ringBuffer.dequeue()); // Output: 3
