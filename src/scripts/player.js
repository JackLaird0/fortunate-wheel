import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from "constants";

class Player {
  constructor(p1, p2, p3) {
    this.p1 = { name: p1,
                balance: 0,
                bank: 0
              };
    this.p2 = { name: p2,
                balance: 0,
                bank: 0
              }; 
    this.p3 = { name: p3,
                balance: 0,
                bank: 0
              };
    this.roundBalance = 0;
  }

  buyVowel(p) {
    this[p].balance -= 250;
  }

  guessLetter(p, amount, factor) {
    this[p].balance += (amount * factor);
    this.roundBalance += (amount * factor);
  }

  winRound(p) {
    this.p1.balance = 0;
    this.p2.balance = 0;
    this.p3.balance = 0;
    this[p].bank += this.roundBalance;
    this.roundBalance = 0;
  }
}

export default Player;