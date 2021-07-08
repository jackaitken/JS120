function createInvoice(services = {}) {
  return {
    phonePrice: services.phone || 3000,
    internetPrice: services.internet || 5500,
    payments: [],
    total: function() {
      return this.phonePrice + this.internetPrice;
    },
    
    addPayment: function(services = {}) {
      this.payments.push(services)
    },

    addPayments: function(servicesArr) {
      servicesArr.forEach(this.addPayment, this);
    },

    totalPayment: function() {
      return this.payments.reduce((acc, elem) => acc + elem.total(), 0);
    },

    amountDue: function() {
      return this.total() - this.totalPayment();
    },
  }
}

function createPayment(services = {}) {
  return {
    phonePayment: services.phone || 0,
    internetPayment: services.internet || 0,
    amount: services.amount || 0,

    total: function() {
      if (this.phonePayment > 0 || this.internetPayment > 0) {
        return this.phonePayment + this.internetPayment;
      } else {
        return this.amount;
      }
    }
  }
}

let invoice = createInvoice({
  phone: 1200,
  internet: 4000,
});

let payment1 = createPayment({ amount: 2000 });
let payment2 = createPayment({
  phone: 1000,
  internet: 1200
});

let payment3 = createPayment({ phone: 1000 });

invoice.addPayment(payment1);
invoice.addPayments([payment2, payment3]);
console.log(invoice.amountDue());       // this should return 0
console.log(invoice.payments);