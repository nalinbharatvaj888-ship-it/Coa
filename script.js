let current = 0;

const messages = {
  1: [
    "Fetching instruction…",
    "Memory sends ADD R1, R2 to the CPU."
  ],

  2: [
    "Decoding instruction…",
    "The Control Unit identifies the ADD operation and its operands."
  ],

  3: [
    "Executing instruction…",
    "The ALU performs the operation: 5 + 3 = 8."
  ],

  4: [
    "Storing result…",
    "The result 8 is written to R1. Instruction complete."
  ]
};

function step(n) {

  if (n !== current + 1) {

    document.getElementById("status").textContent =
      "Status: Please follow the sequence — " +
      (current + 1) +
      ". " +
      ["FETCH", "DECODE", "EXECUTE", "STORE"][current] +
      " next.";

    return;
  }

  current = n;

  document.getElementById("cpuState").textContent =
    messages[n][0];

  document.getElementById("status").textContent =
    "Status: " + messages[n][1];

  if (n === 4) {
    document.getElementById("mem").textContent =
      "Result = 8";
  }
}

function resetSim() {

  current = 0;

  document.getElementById("cpuState").textContent =
    "Waiting";

  document.getElementById("mem").textContent =
    "ADD R1, R2";

  document.getElementById("status").textContent =
    "Status: Click FETCH to begin.";
}
