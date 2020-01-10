const friends = [
    {
    "name":"Caitlan",
    "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
    "scores":
        [
            5,
            1,
            4,
            4,
            5,
            1,
            2,
            5,
            4,
            1
        ]
    },

    {
    "name":"Emma",
    "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
    "scores":
        [
            5,
            1,
            4,
            4,
            5,
            1,
            2,
            5,
            4,
            1
        ]
    }
]

const totalDifference = function (userOne, userTwo) {
    var scoreOne = 0;
    var scoreTwo = 0;
    var difference = 0;

    for (let i = 0; i < userOne.scores.length; i++) {
        scoreOne = scoreOne + userOne.scores[i]
    }

    for (let i = 0; i < userTwo.scores.length; i++) {
        scoreTwo = scoreTwo + userTwo.scores[i]
    }

    difference = scoreOne - scoreTwo;

    return difference;

    return userTwo;
}

console.log(totalDifference(friends[0], friends[1]));

module.exports = friends;