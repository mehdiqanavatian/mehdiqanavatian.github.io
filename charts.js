const ctx = document.getElementById("overall-skills").getContext("2d");
const gradient = ctx.createLinearGradient(0, 0, 400, 400);

gradient.addColorStop(0, "#ff00002f");
gradient.addColorStop(1, "#ffff00af");

Chart.defaults.borderColor = "#ffffffff";
const myChart = new Chart(ctx, {
	type: "radar",
	data: {
		labels: [
			"Curiosity",
			"Teamwork",
			"Adaptability",
			"Attitude",
			"Communication Skills",
			"Critical Thinking",
		],
		datasets: [
			{
				label: "Mehdi",
				data: [90, 80, 85, 90, 90, 90],
				fill: true,
				backgroundColor: gradient,
				borderColor: "#ffaa00",
				pointBorderColor: "#ffaa00",
				pointBackgroundColor: "#ffaa00",
				pointBorderWidth: 1,
				pointHoverRadius: 6,
			},
		],
	},
	options: {
		plugins: {
			title: {
				display: false,
			},
			legend: { display: false },
		},
		scales: {
			r: {
				ticks: {
					display: false,
				},
				suggestedMin: 60,
				suggestedMax: 100,
			},
		},
	},
});
