for (let i = 0; i <= 50; i++) {
    if (i % 2 != 0) {
      continue;
    }
    else if (i == 42) {
      console.log(i)
      break;
    } else {
      console.log(i);
    }
  }