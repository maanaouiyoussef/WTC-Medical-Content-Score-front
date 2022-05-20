const bulletpoints = document.getElementById("bullet-points-chart");
const pictures = document.getElementById("pictures-chart");
const videoInGallery = document.getElementById("video-in-gallery-chart");
const brandConnection = document.getElementById("brand-connection-chart");
const prodKey = document.getElementById("prodkey-qa-chart");
const productType = document.getElementById("products-type-chart");
const checkAvailibility = document.getElementById("availibiliy-check-chart");
const dermatoRecommandation = document.getElementById(
  "dermato-recommandation-chart"
);
const amazonChoice = document.getElementById("amazon-choice-chart");
const subscribtion = document.getElementById("subs-chart");
const climate = document.getElementById("climate-chart");
const buyBox = document.getElementById("buybox-chart");
const fulfill = document.getElementById("fulfill-chart");
const instock = document.getElementById("instock-chart");
const enhanced = document.getElementById("enhanced-chart");
const medicalContent = document.getElementById("medical-content-chart");
const reviewsCount = document.getElementById("reviews-count-chart");
const reviewsRating = document.getElementById("reviews-rating-chart");
const newReviews = document.getElementById("new-reviews-chart");

// BulletPoints Chart
const bulletpointsChart = echarts.init(bulletpoints, null, {
  width: 110,
  height: 110,
});

const bpcOption = {
  tooltip: {
    trigger: "item",
  },
  series: [
    {
      name: "Access From",
      type: "pie",
      radius: ["40%", "70%"],
      avoidLabelOverlap: false,
      label: {
        show: false,
        position: "center",
      },
      emphasis: {
        label: {
          show: true,
          fontSize: "40",
          fontWeight: "bold",
        },
      },
      labelLine: {
        show: false,
      },
      data: [
        { value: 75, name: "Search Engine" },
        { value: 25, name: "Direct" },
      ],
      color: ["#55D8FE", "#0946EC"],
    },
  ],
};

bulletpointsChart.setOption(bpcOption);

// Pictures Chart
const picturesChart = echarts.init(pictures, null, {
  width: 110,
  height: 110,
});

const picOption = {
  tooltip: {
    trigger: "item",
  },
  series: [
    {
      name: "Access From",
      type: "pie",
      radius: ["40%", "70%"],
      avoidLabelOverlap: false,
      label: {
        show: false,
        position: "center",
      },
      emphasis: {
        label: {
          show: true,
          fontSize: "40",
          fontWeight: "bold",
        },
      },
      labelLine: {
        show: false,
      },
      data: [
        { value: 75, name: "Search Engine" },
        { value: 25, name: "Direct" },
      ],
      color: ["#55D8FE", "#0946EC"],
    },
  ],
};

picturesChart.setOption(picOption);

// ProdKey QA Chart
const pkData = {
  labels: [],
  datasets: [
    {
      label: "My First Dataset",
      data: [300, 100],
      backgroundColor: ["#55D8FE", "#0946EC"],
      hoverOffset: 4,
    },
    {
      label: "My First Dataset",
      data: [300, 100],
      backgroundColor: ["#55D8FE", "#D72D4E"],
      hoverOffset: 4,
    },
  ],
};

const pkConfig = {
  type: "doughnut",
  data: pkData,
};

const pkChart = new Chart(prodKey, pkConfig);

// Buy Box Charts
const buyBoxChart = echarts.init(buyBox, null, {
  width: 110,
  height: 110,
});

const bBOption = {
  tooltip: {
    trigger: "item",
  },
  series: [
    {
      name: "Access From",
      type: "pie",
      radius: ["40%", "70%"],
      avoidLabelOverlap: false,
      label: {
        show: false,
        position: "center",
      },
      emphasis: {
        label: {
          show: true,
          fontSize: "40",
          fontWeight: "bold",
        },
      },
      labelLine: {
        show: false,
      },
      data: [
        { value: 75, name: "Search Engine" },
        { value: 25, name: "Direct" },
      ],
      color: ["#55D8FE", "#0946EC"],
    },
  ],
};

buyBoxChart.setOption(bBOption);

// Fullfillment option chart
const fulfillChart = echarts.init(fulfill, null, {
  width: 110,
  height: 110,
});

const ffOption = {
  tooltip: {
    trigger: "item",
  },
  series: [
    {
      name: "Access From",
      type: "pie",
      radius: ["40%", "70%"],
      avoidLabelOverlap: false,
      label: {
        show: false,
        position: "center",
      },
      emphasis: {
        label: {
          show: true,
          fontSize: "40",
          fontWeight: "bold",
        },
      },
      labelLine: {
        show: false,
      },
      data: [
        { value: 75, name: "Search Engine" },
        { value: 25, name: "Direct" },
      ],
      color: ["#55D8FE", "#0946EC"],
    },
  ],
};

fulfillChart.setOption(ffOption);

//
const instockChart = echarts.init(instock, null, {
  width: 60,
  height: 60,
});

const StkOption = {
  tooltip: {
    trigger: "item",
  },
  series: [
    {
      name: "Access From",
      type: "pie",
      radius: ["40%", "70%"],
      avoidLabelOverlap: false,
      label: {
        show: false,
        position: "center",
      },
      emphasis: {
        label: {
          show: true,
          fontSize: "40",
          fontWeight: "bold",
        },
      },
      labelLine: {
        show: false,
      },
      data: [
        { value: 75, name: "Search Engine" },
        { value: 25, name: "Direct" },
      ],
      color: ["#55D8FE", "#0946EC"],
    },
  ],
};

instockChart.setOption(StkOption);

//
const enhancedChart = echarts.init(enhanced, null, {
  width: 60,
  height: 60,
});

const hncOption = {
  tooltip: {
    trigger: "item",
  },
  series: [
    {
      name: "Access From",
      type: "pie",
      radius: ["40%", "70%"],
      avoidLabelOverlap: false,
      label: {
        show: false,
        position: "center",
      },
      emphasis: {
        label: {
          show: true,
          fontSize: "40",
          fontWeight: "bold",
        },
      },
      labelLine: {
        show: false,
      },
      data: [
        { value: 75, name: "Search Engine" },
        { value: 25, name: "Direct" },
      ],
      color: ["#55D8FE", "#0946EC"],
    },
  ],
};

enhancedChart.setOption(hncOption);

// Medical Content Score CHart
const mdContentScoreData = {
  labels: [],
  datasets: [
    {
      label: "My First Dataset",
      data: [300, 100],
      backgroundColor: ["#55D8FE", "#0946EC"],
      hoverOffset: 4,
    },
    {
      label: "My First Dataset",
      data: [300, 100],
      backgroundColor: ["#55D8FE", "#D72D4E"],
      hoverOffset: 4,
    },
    {
      label: "My First Dataset",
      data: [300, 100],
      backgroundColor: ["#55D8FE", "#D72D4E"],
      hoverOffset: 4,
    },
    {
      label: "My First Dataset",
      data: [300, 100],
      backgroundColor: ["#55D8FE", "#D72D4E"],
      hoverOffset: 4,
    },
  ],
};

const mdConfig = {
  type: "doughnut",
  data: mdContentScoreData,
  option: {
    cutout: "90%",
  },
};

const mdChart = new Chart(medicalContent, mdConfig);

// Reviews Count Chart
const reviewsCountChart = echarts.init(reviewsCount, null, {
  width: 200,
  height: 200,
});
const rcOption = {
  tooltip: {
    trigger: "item",
  },
  series: [
    {
      name: "Access From",
      type: "pie",
      radius: "70%",
      data: [
        { value: 75, name: "75%" },
        { value: 25, name: "25%" },
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: "rgba(0, 0, 0, 0.5)",
        },
      },
      color: ["#55D8FE", "#0946EC"],
    },
  ],
};

reviewsCountChart.setOption(rcOption);

// Reviews Rating CHart
const reviewsRatingChart = echarts.init(reviewsRating, null, {
  width: 200,
  height: 200,
});
const rrOption = {
  tooltip: {
    trigger: "item",
  },
  series: [
    {
      name: "Access From",
      type: "pie",
      radius: "70%",
      data: [
        { value: 25, name: "25%" },
        { value: 75, name: "75%" },
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: "rgba(0, 0, 0, 0.5)",
        },
      },
      color: ["#0946EC", "#55D8FE"],
    },
  ],
};

reviewsRatingChart.setOption(rrOption);

// New Reviews Count Chart
const newReviewsChart = echarts.init(newReviews, null, {
  width: 180,
  height: 180,
});

const nROption = {
  tooltip: {
    trigger: "item",
  },
  series: [
    {
      name: "Access From",
      type: "pie",
      radius: ["40%", "70%"],
      avoidLabelOverlap: false,
      label: {
        show: false,
        position: "center",
      },
      emphasis: {
        label: {
          show: true,
          fontSize: "40",
          fontWeight: "bold",
        },
      },
      labelLine: {
        show: false,
      },
      data: [
        { value: 75, name: "Search Engine" },
        { value: 25, name: "Direct" },
      ],
      color: ["#55D8FE", "#0946EC"],
    },
  ],
};
newReviewsChart.setOption(nROption);

// Charts Array
const charts = [bulletpointsChart];

window.onresize = function () {
  bulletpointsChart.resize();
};
