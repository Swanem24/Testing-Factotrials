const Calculate = {
  factorial(x) {
    for (let i = x - 1; i >= 1; i--) {
      x *= i;
    }

    if(x == 0)
    {
      return 1;
    }

    return x;
  }
}

module.exports = Calculate;


