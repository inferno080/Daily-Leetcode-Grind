// debounce waits for a set period of time before it actully calls our fn
function debounce(fn: F, t: number): F {
    let timeout;
    return function(...args) {
        // every time input changes, old timeout is cleared and new timer starts
        clearTimeout(timeout);
        timeout = setTimeout(()=>{fn(...args)}, t);
    }
};

/**
