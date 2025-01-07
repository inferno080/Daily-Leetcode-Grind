	push(x)
	{
	    // Your code here
	    this.arr[this.rear] = x;
	    this.rear++;
	} 
	
	/**
     * @returns {number}
    */

    //Function to pop an element from queue and return that element.
	pop()
	{
		// Your code here
		if(this.rear === this.front)
		    return -1;
		this.front++;
		return this.arr[this.front-1];
	} 
