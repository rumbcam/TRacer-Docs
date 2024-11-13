---
title: Getting Started
description: Initial setup instructions for TRacer
---

# Getting Started

Welcome to TRacer, an app that simplifies race tracking by sending racer times to net control over radio. There are two ways to set up your app:

1. **Manual Setup** - Enter event details and station info directly in the app.
2. **File Import Setup** - Import pre-configured race data from a file.

---

## Option 1: Manual Setup

### Step 1: Add a New Event
1. Tap the **+** icon to create a new event.
2. Enter the race name (e.g., "Race Demo") and tap **Save**.

### Step 2: Add Your Station
1. Select or add your race, which takes you to the station selection page.
2. Enter your **Station Name** (optional, usually the location name).
3. Enter the **Station Number** (REQUIRED) — this identifies each station.
   - For example, the starting station is usually **Station 0**.
4. (Optional) Enter the **Distance** from the start line, which is informational.

---

## Option 2: Import Race Data

If you have race data prepared, you can import it for easier setup.

### Step 1: Upload Race Data
1. In the event selection page, tap the **paperclip icon**.
2. Select the race data file from your device.

If the file contains station information, you’ll be able to select your station directly. Otherwise, follow the manual steps above to add a station.

> **Note:** Ensure the data file follows the [JSON format](./jsonSchema.md) specified for TRacer.

---

## Next Steps

After setup, you’re ready to start logging racer times! Head to [Entering Racer Times](./usage/enteringTimes.md) to learn more.

---

Need help? Visit the full [TRacer Documentation](../index.md) for additional support.
