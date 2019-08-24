class UI {
  constructor() {
    this.budgetFeedback = document.querySelector(".budget-feedback");
    this.expenseFeedback = document.querySelector(".expense-feedback");
    this.budgetForm = document.getElementById("budget-form");
    this.budgetInput = document.getElementById("budget-input");
    this.budgetAmount = document.getElementById("budget-amount");
    this.expenseAmount = document.getElementById("expense-amount");
    this.balance = document.getElementById("balance");
    this.balanceAmount = document.getElementById("balance-amount");
    this.expenseForm = document.getElementById("expense-form");
    this.expenseInput = document.getElementById("expense-input");
    this.amountInput = document.getElementById("amount-input");
    this.expenseList = document.getElementById("expense-list");
    this.itemList = [];
    this.itemID = 0;
  }

  //submit budget method
  submitBudgetForm() {
    const value = this.budgetInput.value;
    if (value === '' || value < 0) {

      this.budgetFeedback.classList.add('showItem');
      this.budgetFeedback.innerHTML = `<p>values can not be empty or negative.</p>`;

      const self = this;
      setTimeout(function () {
        self.budgetFeedback.classList.remove('showItem');
      }, 3000);

    }
    else {
      this.budgetAmount.textContent = value;
      this.budgetInput.value = '';
      this.showBalance();
    }
  }

  //show balance
  showBalance() {
    const expenses = this.toatalExpenses();
    const total = parseInt(this.budgetAmount.textContent) - expenses;
    this.balanceAmount.textContent = total;
    if(total < 0) {
      this.balance.classList.remove('showGreen', 'showBlack');
      this.balance.classList.add('showRed');
    } else if(total > 0) {
      this.balance.classList.remove('showBlack', 'showRed');
      this.balance.classList.add('showGreen');
    } else {
      this.balance.classList.remove('showGreen', 'showRed');
      this.balance.classList.add('showBlack');
    }
  }


  //calcualte total expenses
  toatalExpenses() {
    let total = 40;  //@todo
    return total;
  }


}

function eventListeners() {
  const budgetForm = document.getElementById("budget-form");
  const expenseForm = document.getElementById("expense-form");
  const expenseList = document.getElementById("expense-list");

  const ui = new UI();

  //budget form submit event
  budgetForm.addEventListener('submit', function (event) {
    event.preventDefault();
    ui.submitBudgetForm();

  });

  //expense add event
  expenseForm.addEventListener('submit', function () {
    event.preventDefault();
  });

  //expense delete event
  expenseList.addEventListener('click', function () { });


}


document.addEventListener('DOMContentLoaded', function () {
  eventListeners();
})


