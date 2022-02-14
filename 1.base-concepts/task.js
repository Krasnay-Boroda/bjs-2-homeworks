function solveEquation(a, b, c) {
    let arr = [];
    let rootFirst;
    let rootSecond;
    let d = b ** 2 - 4 * a * c;
    
    if (d > 0) {
        rootFirst = (-b + Math.sqrt(d)) / (2 * a);
        rootSecond = (-b - Math.sqrt(d)) / (2 * a);
        arr.push (rootFirst);
        arr.push (rootSecond);
        return arr;

    } else if (d < 0) { 
      return arr = [];
    } else {
        rootFirst = -b/(2*a);
        arr.push (rootFirst);
        return arr;
    }
}

  








