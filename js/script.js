var subTypeElement = document.querySelector("#subscription");
var subDurationElement = document.querySelector("#months");
var result = document.querySelector(".result");
var subType = "basic";
var subDuration = 1;
var updateSubscriptionDiv = function () {
  var monthlyCost = 5;
  if (subType === "standard") {
    monthlyCost = 7;
  } else if (subType === "premium") {
    monthlyCost = 10;
  }
  // console.log(monthlyCost);
  // console.log(subDuration);

  var total = monthlyCost * subDuration;
  result.innerText = `You have chosen a ${subDuration} month ${subType} plan for ${total}.`;

  console.log(total);
  // console.log(subDuration);
};

subTypeElement.addEventListener("change", function (e) {
  subType = e.target.value;
  updateSubscriptionDiv();
});

subDurationElement.addEventListener("change", function (e) {
  subDuration = e.target.value;
  updateSubscriptionDiv();
});
