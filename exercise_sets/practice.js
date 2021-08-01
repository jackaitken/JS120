function human(name, occupation) {
	return {
		name: name,
    occupation: occupation,
    sayName: function() {
      console.log(`${this.name}`);
    }
	}
}

let jack = human('Jack', 'Software Engineer');
jack.sayName();