// Your code here
function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`
}

const mondayWork = function(activity = "go to the office") {
  return `This Monday, I will ${activity}.`;
}

const wrapAdjective = function(flair = "*") {
  return function(something = "special") {
    return `You are ${flair}${something}${flair}!`;
  }
}