db.users.insert({username:'RoperTest',
	goal:
		{goalTitle: 'Architecture License', goalDue: new Date('<2018-01-01>'), goalComplete: false,
			subtask: [
				{taskTitle: 'Pass Exam 1', completed: false},
				{taskTitle: 'Pass Exam 2', completed: false},
				{taskTitle: 'Pass Exam 3', completed: false},
				{taskTitle: 'Pass Exam 4', completed: false},
				{taskTitle: 'Pass Exam 5', completed: false}
		]},
	gear: './assets/images/level-1.png',
	experience: 500
});

// db.goals.insert({goalTitle: 'Architecture License', goalDue: new Date('<2018-01-01>'),
// 	subtask: [
// 		{taskTitle:'Pass Exam 1', completed: false},
// 		{taskTitle: 'Pass Exam 2', completed: false},
// 		{taskTitle: 'Pass Exam 3', completed: false},
// 		{taskTitle: 'Pass Exam 4', completed: false},
// 		{taskTitle: 'Pass Exam 5', completed: false}]
// });

// db.gears.insert({
// 	levelOne: './assets/images/level-1.png',
// 	levelTwo: './assets/images/level-2.png',
// 	levelThree: './assets/images/level-3.png',
// 	levelFour: './assets/images/level-4.png',
// 	levelFive: './assets/images/level-5.png',
// 	levelSix: './assets/images/level-6.png'
// });