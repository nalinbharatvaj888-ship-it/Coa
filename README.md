# 💻 Computer Organization & Architecture

### An Interactive Journey Inside the Brain of a Computer 🧠

<p align="center">
  <b>Understand how a computer works internally — visually, interactively, and step by step.</b>
</p>

---

## 🌐 Live Demo

🚀 **[Open the Interactive COA Project](https://nalinbharatvaj888-ship-it.github.io/Coa/)**

---

## 📌 About the Project

**Computer Organization & Architecture (COA)** is a fundamental subject that explains how the internal components of a computer system work together.

This project transforms important COA concepts into an **interactive web-based learning experience**.

Instead of relying only on theoretical notes, the project uses:

- 🧠 Visual explanations
- 🖥️ Computer architecture diagrams
- 💾 Memory hierarchy visualization
- 🔄 Instruction-cycle simulation
- ⚡ Interactive CPU operations
- 🚌 System bus representation
- 📱 Responsive web design

The goal is to make complex COA concepts **easier to understand, visualize, and remember**.

---

# 🎯 Project Objectives

The main objectives of this project are:

- Understand the internal organization of a computer.
- Understand the major components of a CPU.
- Visualize communication between CPU, memory and I/O.
- Understand the instruction execution cycle.
- Demonstrate the **FETCH → DECODE → EXECUTE → STORE** process.
- Connect theoretical COA concepts with an interactive implementation.
- Provide an alternative to traditional theory-based learning.

---

# 🧩 Concepts Covered

## 🖥️ 1. Basic Computer Architecture

The project introduces the major components of a computer system:

```text
                 ┌─────────────────────┐
                 │         CPU         │
                 │                     │
                 │  ┌─────┐  ┌──────┐ │
                 │  │ ALU │  │  CU  │ │
                 │  └─────┘  └──────┘ │
                 │     Registers       │
                 └─────────┬───────────┘
                           │
                       System Bus
                           │
             ┌─────────────┼─────────────┐
             ↓             ↓             ↓
        ┌─────────┐   ┌─────────┐   ┌─────────┐
        │ Memory  │   │  Input  │   │ Output  │
        └─────────┘   └─────────┘   └─────────┘

              FASTEST
                 ▲
                 │
          ┌─────────────┐
          │  Registers  │
          └─────────────┘
                 │
          ┌─────────────┐
          │    Cache    │
          └─────────────┘
                 │
          ┌─────────────┐
          │     RAM     │
          └─────────────┘
                 │
          ┌─────────────┐
          │     SSD     │
          └─────────────┘
                 │
          ┌─────────────┐
          │ HDD/Storage │
          └─────────────┘
                 │
                 ▼
              SLOWEST

┌─────────┐
│  FETCH  │
└────┬────┘
     ↓
┌─────────┐
│ DECODE  │
└────┬────┘
     ↓
┌─────────┐
│ EXECUTE │
└────┬────┘
     ↓
┌─────────┐
│  STORE  │
└────┬────┘
     ↓
Next Instruction
FETCH
  ↓
DECODE
  ↓
EXECUTE
  ↓
STORE

Instruction → ADD R1, R2

R1 = 5
R2 = 3

       ↓

ALU → 5 + 3

       ↓

Result → 8

       ↓

R1 = 8



                 CPU
                  │
          ┌───────┼───────┐
          ↓       ↓       ↓
       Address   Data   Control
         Bus      Bus      Bus
          │       │       │
          └───────┼───────┘
                  ↓
               MEMORY



Coa/
│
├── 📄 index.html
│   └── Main webpage and COA content
│
├── 🎨 style.css
│   └── Website design and responsive styling
│
├── ⚙️ script.js
│   └── Instruction-cycle simulator logic
│
└── 📖 README.md
    └── Project documentation


User clicks FETCH
       ↓
Instruction is fetched
       ↓
User clicks DECODE
       ↓
Instruction is decoded
       ↓
User clicks EXECUTE
       ↓
ALU performs operation
       ↓
User clicks STORE
       ↓
Result is stored



