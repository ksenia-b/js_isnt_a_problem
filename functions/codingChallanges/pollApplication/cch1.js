let poll1 = {
    question: "What is your favourite programming language?",
    options: ["0: JavaScript", "1: Python", "2: Rust", "3:C++"],
    // This generates [0, 0, 0, 0]. More in the next section!
    answers: new Array(4).fill(0),

    registerNewAnswer: function () {


            const answer = Number(prompt((`${this.question} \n ${this.options}`)));
            if (typeof(answer) == 'number' && (((this.answers.length) - 1) <= answer)) {
                this.answers[answer]++;
                console.log("here");
            }

            this.displayResults(this.answers);
        },
    displayResults: function(type){
        console.log(`Poll results are ${type}`);

    }
};


document.body.append(document.createElement('button'));
document.querySelector('button').textContent = 'Answer poll';


document.querySelector('button').addEventListener('click', function(){
poll1.registerNewAnswer();
});