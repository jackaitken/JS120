class Banner {
  constructor(message) {
    this.message = message;
  }

  displayBanner() {
    console.log([this.horizontalRule(this.message), this.emptyLine(this.message), this.messageLine(), this.emptyLine(this.message), this.horizontalRule(this.message)].join("\n"));
  }

  horizontalRule(message) {
    return '+-' + '-'.repeat(message.length) + '-+';
  }

  emptyLine(message) {
    return '| ' + ' '.repeat(message.length) + ' |';
  }

  messageLine() {
    return `| ${this.message} |`
  }
}

let banner2 = new Banner('');
banner2.displayBanner();
console.log(Object.getPrototypeOf(Function.prototype));