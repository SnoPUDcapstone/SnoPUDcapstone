// === Preset Dataset API Links ===
const PRESET_ENDPOINTS = {
    current: {
        solar: "https://raw.githubusercontent.com/SnoPUDcapstone/pages-test/refs/heads/main/day_data/solar_data_live.json",
        metrics: "https://raw.githubusercontent.com/SnoPUDcapstone/pages-test/refs/heads/main/day_data/metrics.json",
        "30_30": "https://raw.githubusercontent.com/SnoPUDcapstone/pages-test/refs/heads/main/day_data/per_30_30.json",
        "30_30_soc": "https://raw.githubusercontent.com/SnoPUDcapstone/pages-test/refs/heads/main/day_data/per_30_30_soc.json",
        "30_30_battery": "https://raw.githubusercontent.com/SnoPUDcapstone/pages-test/refs/heads/main/day_data/per_30_30_battery.json",
        "30_60": "https://raw.githubusercontent.com/SnoPUDcapstone/pages-test/refs/heads/main/day_data/per_30_60.json",
        "30_60_soc": "https://raw.githubusercontent.com/SnoPUDcapstone/pages-test/refs/heads/main/day_data/per_30_60_soc.json",
        "30_60_battery": "https://raw.githubusercontent.com/SnoPUDcapstone/pages-test/refs/heads/main/day_data/per_30_60_battery.json",
        "trend": "https://raw.githubusercontent.com/SnoPUDcapstone/pages-test/refs/heads/main/day_data/trend.json",
        "trend_soc": "https://raw.githubusercontent.com/SnoPUDcapstone/pages-test/refs/heads/main/day_data/trend_soc.json",
        "trend_battery": "https://raw.githubusercontent.com/SnoPUDcapstone/pages-test/refs/heads/main/day_data/trend_battery.json",
        "proportional": "https://raw.githubusercontent.com/SnoPUDcapstone/pages-test/refs/heads/main/day_data/proportional.json",
        "proportional_soc": "https://raw.githubusercontent.com/SnoPUDcapstone/pages-test/refs/heads/main/day_data/proportional_soc.json",
        "proportional_battery": "https://raw.githubusercontent.com/SnoPUDcapstone/pages-test/refs/heads/main/day_data/proportional_battery.json",
        "averaged": "https://raw.githubusercontent.com/SnoPUDcapstone/pages-test/refs/heads/main/day_data/averaged.json",
        "averaged_soc": "https://raw.githubusercontent.com/SnoPUDcapstone/pages-test/refs/heads/main/day_data/averaged_soc.json",
        "averaged_battery": "https://raw.githubusercontent.com/SnoPUDcapstone/pages-test/refs/heads/main/day_data/averaged_battery.json",
        "70_60": "https://raw.githubusercontent.com/SnoPUDcapstone/pages-test/refs/heads/main/day_data/per_70_60.json",
        "70_60_soc": "https://raw.githubusercontent.com/SnoPUDcapstone/pages-test/refs/heads/main/day_data/per_70_60_soc.json",
        "70_60_battery": "https://raw.githubusercontent.com/SnoPUDcapstone/pages-test/refs/heads/main/day_data/per_70_60_battery.json"

    },
    last_week: {
        solar: "https://raw.githubusercontent.com/SnoPUDcapstone/pages-test/refs/heads/main/week_data/solar_data_live_week.json",
        metrics: "https://raw.githubusercontent.com/SnoPUDcapstone/pages-test/refs/heads/main/week_data/metrics.json",
        "30_30": "https://raw.githubusercontent.com/SnoPUDcapstone/pages-test/refs/heads/main/week_data/per_30_30.json",
        "30_30_soc": "https://raw.githubusercontent.com/SnoPUDcapstone/pages-test/refs/heads/main/week_data/per_30_30_soc.json",
        "30_30_battery": "https://raw.githubusercontent.com/SnoPUDcapstone/pages-test/refs/heads/main/week_data/per_30_30_battery.json",
        "30_60": "https://raw.githubusercontent.com/SnoPUDcapstone/pages-test/refs/heads/main/week_data/per_30_60.json",
        "30_60_soc": "https://raw.githubusercontent.com/SnoPUDcapstone/pages-test/refs/heads/main/week_data/per_30_60_soc.json",
        "30_60_battery": "https://raw.githubusercontent.com/SnoPUDcapstone/pages-test/refs/heads/main/week_data/per_30_60_battery.json",
        "trend": "https://raw.githubusercontent.com/SnoPUDcapstone/pages-test/refs/heads/main/week_data/trend.json",
        "trend_soc": "https://raw.githubusercontent.com/SnoPUDcapstone/pages-test/refs/heads/main/week_data/trend_battery.json",
        "trend_battery": "https://raw.githubusercontent.com/SnoPUDcapstone/pages-test/refs/heads/main/week_data/trend_battery.json",
        "proportional": "https://raw.githubusercontent.com/SnoPUDcapstone/pages-test/refs/heads/main/week_data/proportional.json",
        "proportional_soc": "https://github.com/SnoPUDcapstone/pages-test/blob/main/week_data/proportional_soc.json",
        "proportional_battery": "https://raw.githubusercontent.com/SnoPUDcapstone/pages-test/refs/heads/main/week_data/proportional_battery.json",
        "averaged": "https://raw.githubusercontent.com/SnoPUDcapstone/pages-test/refs/heads/main/week_data/averaged.json",
        "averaged_soc": "https://raw.githubusercontent.com/SnoPUDcapstone/pages-test/refs/heads/main/week_data/averaged_soc.json",
        "averaged_battery": "https://raw.githubusercontent.com/SnoPUDcapstone/pages-test/refs/heads/main/week_data/averaged_battery.json",
        "70_60": "https://raw.githubusercontent.com/SnoPUDcapstone/pages-test/refs/heads/main/week_data/per_70_60.json",
        "70_60_soc": "https://raw.githubusercontent.com/SnoPUDcapstone/pages-test/refs/heads/main/week_data/per_70_60_soc.json",
        "70_60_battery": "https://raw.githubusercontent.com/SnoPUDcapstone/pages-test/refs/heads/main/week_data/per_70_60_battery.json"
    },
    winter_2024: {
        solar: "https://raw.githubusercontent.com/SnoPUDcapstone/pages-test/refs/heads/main/seasonal_data/winter_data.json",
        metrics: "https://raw.githubusercontent.com/SnoPUDcapstone/pages-test/refs/heads/main/seasonal_data/metrics_winter.json",
        "30_30": "https://raw.githubusercontent.com/SnoPUDcapstone/pages-test/refs/heads/main/seasonal_data/per_30_30_winter.json",
        "30_30_soc": "https://raw.githubusercontent.com/SnoPUDcapstone/pages-test/refs/heads/main/seasonal_data/per_30_30_soc_winter.json",
        "30_30_battery": "https://raw.githubusercontent.com/SnoPUDcapstone/pages-test/refs/heads/main/seasonal_data/per_30_30_battery_winter.json",
        "30_60": "https://raw.githubusercontent.com/SnoPUDcapstone/pages-test/refs/heads/main/seasonal_data/per_30_60_winter.json",
        "30_60_soc": "https://raw.githubusercontent.com/SnoPUDcapstone/pages-test/refs/heads/main/seasonal_data/per_30_60_soc_winter.json",
        "30_60_battery": "https://raw.githubusercontent.com/SnoPUDcapstone/pages-test/refs/heads/main/seasonal_data/per_30_60_battery_winter.json",
        "trend": "https://raw.githubusercontent.com/SnoPUDcapstone/pages-test/refs/heads/main/seasonal_data/trend_winter.json",
        "trend_soc": "https://raw.githubusercontent.com/SnoPUDcapstone/pages-test/refs/heads/main/seasonal_data/trend_soc_winter.json",
        "trend_battery": "https://raw.githubusercontent.com/SnoPUDcapstone/pages-test/refs/heads/main/seasonal_data/trend_battery_winter.json",
        "proportional": "https://raw.githubusercontent.com/SnoPUDcapstone/pages-test/refs/heads/main/seasonal_data/proportional_winter.json",
        "proportional_soc": "https://raw.githubusercontent.com/SnoPUDcapstone/pages-test/refs/heads/main/seasonal_data/proportional_soc_winter.json",
        "proportional_battery": "https://raw.githubusercontent.com/SnoPUDcapstone/pages-test/refs/heads/main/seasonal_data/proportional_battery_winter.json",
        "averaged": "https://raw.githubusercontent.com/SnoPUDcapstone/pages-test/refs/heads/main/seasonal_data/averaged_winter.json",
        "averaged_soc": "https://raw.githubusercontent.com/SnoPUDcapstone/pages-test/refs/heads/main/seasonal_data/averaged_soc_winter.json",
        "averaged_battery": "https://raw.githubusercontent.com/SnoPUDcapstone/pages-test/refs/heads/main/seasonal_data/averaged_battery_winter.json",
        "70_60": "https://raw.githubusercontent.com/SnoPUDcapstone/pages-test/refs/heads/main/seasonal_data/per_70_60_winter.json",
        "70_60_soc": "https://raw.githubusercontent.com/SnoPUDcapstone/pages-test/refs/heads/main/seasonal_data/per_70_60_soc_winter.json",
        "70_60_battery": "https://raw.githubusercontent.com/SnoPUDcapstone/pages-test/refs/heads/main/seasonal_data/per_70_60_battery_winter.json"
    },
    summer_2024: {
        solar: "https://raw.githubusercontent.com/SnoPUDcapstone/pages-test/refs/heads/main/seasonal_data/summer_data.json",
        metrics: "https://raw.githubusercontent.com/SnoPUDcapstone/pages-test/refs/heads/main/seasonal_data/metrics_summer.json",
        "30_30": "https://raw.githubusercontent.com/SnoPUDcapstone/pages-test/refs/heads/main/seasonal_data/per_30_30_summer.json",
        "30_30_soc": "https://raw.githubusercontent.com/SnoPUDcapstone/pages-test/refs/heads/main/seasonal_data/per_30_30_soc_summer.json",
        "30_30_battery": "https://raw.githubusercontent.com/SnoPUDcapstone/pages-test/refs/heads/main/seasonal_data/per_30_30_battery_summer.json",
        "30_60": "https://raw.githubusercontent.com/SnoPUDcapstone/pages-test/refs/heads/main/seasonal_data/per_30_60_summer.json",
        "30_60_soc": "https://raw.githubusercontent.com/SnoPUDcapstone/pages-test/refs/heads/main/seasonal_data/per_30_60_soc_summer.json",
        "30_60_battery": "https://raw.githubusercontent.com/SnoPUDcapstone/pages-test/refs/heads/main/seasonal_data/per_30_60_battery_summer.json",
        "trend": "https://raw.githubusercontent.com/SnoPUDcapstone/pages-test/refs/heads/main/seasonal_data/trend_summer.json",
        "trend_soc": "https://raw.githubusercontent.com/SnoPUDcapstone/pages-test/refs/heads/main/seasonal_data/trend_soc_summer.json",
        "trend_battery": "https://raw.githubusercontent.com/SnoPUDcapstone/pages-test/refs/heads/main/seasonal_data/trend_battery_summer.json",
        "proportional": "https://raw.githubusercontent.com/SnoPUDcapstone/pages-test/refs/heads/main/seasonal_data/proportional_summer.json",
        "proportional_soc": "https://raw.githubusercontent.com/SnoPUDcapstone/pages-test/refs/heads/main/seasonal_data/proportional_soc_summer.json",
        "proportional_battery": "https://raw.githubusercontent.com/SnoPUDcapstone/pages-test/refs/heads/main/seasonal_data/proportional_battery_summer.json",
        "averaged": "https://raw.githubusercontent.com/SnoPUDcapstone/pages-test/refs/heads/main/seasonal_data/averaged_summer.json",
        "averaged_soc": "https://raw.githubusercontent.com/SnoPUDcapstone/pages-test/refs/heads/main/seasonal_data/averaged_soc_summer.json",
        "averaged_battery": "https://raw.githubusercontent.com/SnoPUDcapstone/pages-test/refs/heads/main/seasonal_data/averaged_battery_summer.json",
        "70_60": "https://raw.githubusercontent.com/SnoPUDcapstone/pages-test/refs/heads/main/seasonal_data/per_70_60_summer.json",
        "70_60_soc": "https://raw.githubusercontent.com/SnoPUDcapstone/pages-test/refs/heads/main/seasonal_data/per_70_60_soc_summer.json",
        "70_60_battery": "https://raw.githubusercontent.com/SnoPUDcapstone/pages-test/refs/heads/main/seasonal_data/per_70_60_battery_summer.json"
    }
};

let selectedPreset = 'current';
let solarVisible = true;
let solarDataset = null;
let selectedDataMode = "solar"; // options: "solar", "soc", "battery"

function getEndpoints() {
    return PRESET_ENDPOINTS[selectedPreset];
}

async function fetchData() {
    try {
        const url = getEndpoints().solar;
        const response = await fetch(url);
        const data = await response.json();
        updateChart(data);
    } catch (error) {
        console.error("Error fetching main data:", error);
        updateChart([]);
    }
}

async function fetchMetrics() {
    try {
        const url = getEndpoints().metrics;
        const response = await fetch(url);
        const data = await response.json();
        updateMetrics(data);
    } catch (error) {
        console.error("Error fetching metrics:", error);
        updateMetrics({});
    }
}

function updateChart(data) {
    const ctx = document.getElementById("dataChart").getContext("2d");
    const dates = data.map(row => new Date(row["Date and Time"]).toLocaleString());
    const values = data.map(row => row["Value (KW)"]);

    solarDataset = {
        label: "Solar Power (KW)",
        data: values,
        borderColor: "blue",
        borderWidth: 2,
        fill: false,
        pointRadius: 0,
        pointHoverRadius: 5
    };

    if (!window.myChart) {
        window.myChart = new Chart(ctx, {
            type: "line",
            data: {
                labels: dates,
                datasets: solarVisible ? [solarDataset] : []
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    x: {
                        type: 'category',
                        title: {
                            display: true,
                            text: 'Date and Time'
                        }
                    },
                    y: {
                        title: {
                            display: true,
                            text: 'Solar Power (KW)'
                        }
                    }
                }
            }
        });
    } else {
        window.myChart.data.labels = dates;
        window.myChart.data.datasets = window.myChart.data.datasets.filter(ds => ds.label !== "Solar Power (KW)");
        if (solarVisible) {
            window.myChart.data.datasets.unshift(solarDataset);
        }
        window.myChart.update();
    }
}

function updateMetrics(metrics) {
    document.getElementById('solar-value').textContent = metrics.solar || 0;
    for (let i = 1; i <= 6; i++) {
        const d = metrics[`dataset${i}`] || {};
        document.getElementById(`dataset${i}-rmse`).textContent = d.rmse || 0;
        document.getElementById(`dataset${i}-mae`).textContent = d.mae || 0;
        document.getElementById(`dataset${i}-mse`).textContent = d.mse || 0;
        document.getElementById(`dataset${i}-cycles`).textContent = d.cycles || 0;
        document.getElementById(`dataset${i}-energy`).textContent = d.energy || 0;
    }
}

function removeDatasetFromChart(labels) {
    if (window.myChart) {
        window.myChart.data.datasets = window.myChart.data.datasets.filter(dataset => !labels.includes(dataset.label));
        window.myChart.update();
    }
}

async function fetchDataset(label, color, key) {
    try {
        const url = getEndpoints()[key];
        const response = await fetch(url);
        const data = await response.json();
        addDatasetToChart(data, label, color);
    } catch (error) {
        console.error(`Error fetching ${label} dataset:`, error);
    }
}

function addDatasetToChart(data, label, color) {
    const dates = data.map(row => new Date(row["Date and Time"]).toLocaleString());
    const values = data.map(row => row["Value (KW)"]);

    if (!window.myChart) return;

    window.myChart.data.datasets = window.myChart.data.datasets.filter(ds => ds.label !== label);
    window.myChart.data.datasets.push({
        label,
        data: values,
        borderColor: color,
        borderWidth: 2,
        fill: false,
        pointRadius: 0,
        pointHoverRadius: 5
    });
    window.myChart.update();
}

function setupDatasetToggle(datasetId, label, color, keysByMode) {
    const element = document.getElementById(datasetId);
    element.addEventListener('click', async () => {
        element.classList.toggle('active');

        const key = keysByMode[selectedDataMode];

        if (!key) {
            console.warn(`No key defined for mode "${selectedDataMode}" in ${label}`);
            return;
        }

        if (element.classList.contains('active')) {
            await fetchDataset(label, color, key);
        } else {
            removeDatasetFromChart([label]);
        }

        await fetchMetrics();
    });
}

const toggleKeysByMode = {
    dataset1: { solar: "30_30", soc: "30_30_soc", battery: "30_30_battery" },
    dataset2: { solar: "30_60", soc: "30_60_soc", battery: "30_60_battery" },
    dataset3: { solar: "trend", soc: "trend_soc", battery: "trend_battery" },
    dataset4: { solar: "proportional", soc: "proportional_soc", battery: "proportional_battery" },
    dataset5: { solar: "averaged", soc: "averaged_soc", battery: "averaged_battery" },
    dataset6: { solar: "70_60", soc: "70_60_soc", battery: "70_60_battery" }
};

document.addEventListener('DOMContentLoaded', async () => {
    // === Solar Preset Buttons ===
    document.querySelectorAll('.solar-btn').forEach(button => {
        button.addEventListener('click', async () => {
            document.querySelectorAll('.solar-btn').forEach(b => b.classList.remove('selected'));
            button.classList.add('selected');
            selectedPreset = button.getAttribute('data-set');

            // Clear chart
            window.myChart.data.datasets = [];
            window.myChart.update();

            // Re-fetch solar data (only if solar mode)
            if (selectedDataMode === "solar") {
                await fetchData();
            }

            // Reload all active dataset toggles
            const toggles = [
                { id: 'dataset1', label: "30_30 Data", color: "red", key: "30_30" },
                { id: 'dataset2', label: "30_60 Data", color: "green", key: "30_60" },
                { id: 'dataset3', label: "Trend Data", color: "orange", key: "trend" },
                { id: 'dataset4', label: "Proportional Data", color: "purple", key: "proportional" },
                { id: 'dataset5', label: "Averaged Data", color: "cyan", key: "averaged" },
                { id: 'dataset6', label: "70_60 Data", color: "pink", key: "70_60" }
            ];

            for (const toggle of toggles) {
                const element = document.getElementById(toggle.id);
                if (element.classList.contains('active')) {
                    const key = toggleKeysByMode[element.id][selectedDataMode];
                    await fetchDataset(toggle.label, toggle.color, key);
                }
            }

            await fetchMetrics();
        });
    });

    // === Dataset Toggle Button Setup ===
    setupDatasetToggle('dataset1', "30_30 Data", "red", {
        solar: "30_30",
        soc: "30_30_soc",
        battery: "30_30_battery"
    });
    setupDatasetToggle('dataset2', "30_60 Data", "green", {
        solar: "30_60",
        soc: "30_60_soc",
        battery: "30_60_battery"
    });
    setupDatasetToggle('dataset3', "Trend Data", "orange", {
        solar: "trend",
        soc: "trend_soc",
        battery: "trend_battery"
    });
    setupDatasetToggle('dataset4', "Proportional Data", "purple", {
        solar: "proportional",
        soc: "proportional_soc",
        battery: "proportional_battery"
    });
    setupDatasetToggle('dataset5', "Averaged Data", "cyan", {
        solar: "averaged",
        soc: "averaged_soc",
        battery: "averaged_battery"
    });
    setupDatasetToggle('dataset6', "70_60 Data", "pink", {
        solar: "70_60",
        soc: "70_60_soc",
        battery: "70_60_battery"
    });

    // === Option Box (Mode Toggle: solar / soc / battery) ===
    document.querySelectorAll(".option-box").forEach(box => {
        box.addEventListener("click", async () => {
            document.querySelectorAll(".option-box").forEach(b => b.classList.remove("selected"));
            box.classList.add("selected");

            const value = box.getAttribute("data-value");
            if (value === "option1") {
                selectedDataMode = "solar";
                solarVisible = true;
            } else if (value === "option2") {
                selectedDataMode = "soc";
                solarVisible = false;
            } else if (value === "option3") {
                selectedDataMode = "battery";
                solarVisible = false;
            }

            // Clear datasets
            window.myChart.data.datasets = [];

            // Show solar only in solar mode
            if (selectedDataMode === "solar" && solarDataset && solarVisible) {
                window.myChart.data.datasets.push(solarDataset);
            }
            window.myChart.update();

            // Re-fetch active toggles
            const toggles = [
                { id: 'dataset1', label: "30_30 Data", color: "red" },
                { id: 'dataset2', label: "30_60 Data", color: "green" },
                { id: 'dataset3', label: "Trend Data", color: "orange" },
                { id: 'dataset4', label: "Proportional Data", color: "purple" },
                { id: 'dataset5', label: "Averaged Data", color: "cyan" },
                { id: 'dataset6', label: "70_60 Data", color: "pink" }
            ];

            for (const toggle of toggles) {
                const el = document.getElementById(toggle.id);
                if (el.classList.contains("active")) {
                    const key = toggleKeysByMode[toggle.id][selectedDataMode];
                    await fetchDataset(toggle.label, toggle.color, key);
                }
            }

            await fetchMetrics();
        });
    });

    // === Solar Hide Button Toggle ===
    document.getElementById("toggleSolarButton").addEventListener("click", () => {
        solarVisible = !solarVisible;

        const chart = window.myChart;
        if (!chart) return;

        chart.data.datasets = chart.data.datasets.filter(ds => ds.label !== "Solar Power (KW)");
        if (selectedDataMode === "solar" && solarVisible && solarDataset) {
            chart.data.datasets.unshift(solarDataset);
        }
        chart.update();

        document.getElementById("toggleSolarButton").textContent =
            solarVisible ? "Hide Solar Data" : "Show Solar Data";
    });

    // === Initial Load ===
    await fetchData();
    await fetchMetrics();
});