const express = require('express');
const app = express();
const port = 3000;

app.use(express.json()); // Middleware to parse JSON bodies

// Function to calculate carbon emission
function calculateCarbonEmission(cpuUsage, gpuUsage, runtime, powerCpu, powerGpu, emissionFactor) {
    powerCpu /= 1000; // Convert power from Watts to Kilowatts
    powerGpu /= 1000;
    runtime /= 60; // Convert runtime from minutes to hours
    let energyCpu = powerCpu * runtime * (cpuUsage / 100);
    let energyGpu = powerGpu * runtime * (gpuUsage / 100);
    return (energyCpu + energyGpu) * emissionFactor;
}

// Endpoint to calculate carbon emission
app.post('/calculate', (req, res) => {
    const { cpuUsage, gpuUsage, runtime, powerCpu, powerGpu, emissionFactor } = req.body;
    const carbonEmission = calculateCarbonEmission(cpuUsage, gpuUsage, runtime, powerCpu, powerGpu, emissionFactor);
    res.json({ carbonEmission });
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
