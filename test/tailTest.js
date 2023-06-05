const tail = require("../tail");

let tailResult = tail([5, 6, 7]);

assertEqual(tailResult.length, 2);
assertEqual(tailResult[0], 6);
assertEqual(tailResult[1], 7);

tailResult = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(tailResult.length, 2);
assertEqual(tailResult[0], "Lighthouse");
assertEqual(tailResult[1], "Labs");
