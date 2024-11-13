# Getting Set Up

There are two ways to get set up.

1. The simplest way is to follow the instructions and manually type in the event name and station info where you're positioned.

2. Or, you can import the race data from a file. This requires the race data to be put in the correct format, which will be specified later.

## Manual Setup

### Add a New Event

1. Press the **+** button to add a new event.
2. Enter the race name (e.g., "Race Demo"), then press **Save**.

### Add Your Station

After adding or selecting your race, you’ll be taken to a page to add or select your station. This app is designed with multiple aid stations in mind, each with a unique number.

- **Station Name** (optional): Usually the name of the location of the station.
- **Station Number** (required): A unique number for the station. Usually, `START` is station `0`.
- **Distance** (optional): Information usually about the distance from the starting line.

## Importing Race Data from a File

When on the page to add or select the event, press the **Paper Clip** button to upload a file. Browse to the file with the race data and select it. If the file contains stations, you’ll be able to select your station or manually add one.

# Entering Runners' Times

On the **Input** tab, enter the runner's bib number and add the time the runner came into and left the station.

- If you enter a bib number (e.g., `24`) and see "Runner 24 not found," it may mean:
  - You haven’t imported race data.
  - The bib number was not included in imported data.

For quick entry:
1. Tap **Add** or **Next** to auto-jump to **Time In**.
2. Press **Save** on **Time In** to jump to **Time Out**.

### Quick Options

- **Auto Time In / Auto Time Out**: Marks the current time for `Time In` or `Time Out`.
- **Quick Entry Mode**:
  - Tap the **Gear Icon** in the top right to enable **Time Out Only Input** or **Time In Only Input**.
  - You can also enable **Dialpad View** to adjust the keypad to a familiar phone dialpad layout.

# Sending and Receiving Data

## Sending

When ready to transmit runner times to net control, go to the **Send/Receive** tab.

1. Check the data to be sent.
2. Press **Transmit All Changes** to start transmitting.
3. Hold your phone near the radio mic (but not directly pointed at it).

### Retransmitting Data

- To retransmit data for a single runner:
  1. Go to the **Station** tab, select the runner(s), and press the **Transmit** button in the top right.
- If net control requests certain blocks, select the blocks to retransmit, then tap the **Speaker Icon** next to the data summary.

## Receiving

1. Tap the **Mic Icon** in the top right to enable listening mode.
2. Grant permission for microphone access.
3. The app will listen for transmissions while in **Listening Mode**.

> **Pro Tip:** To always have the device listening, enable **Always Listening** in the **Gear Icon** settings.

# Viewing Records

On the **Records** tab, view entries by pressing **Recent** for filtering/sorting options. For runners without a `Time In` or `Time Out`, you’ll see a quick entry button to update the time.

# Changing Aid Station or Event

1. Tap the station name in the top left to view available stations for this event.
2. Select your station or tap **Switch Event** to go to the events list, add a new event, or select a different one.

# JSON File Format

This format is required for importing race data into the app.

- An **Event** may contain multiple races (e.g., 100M, 100K, 50M).

```json
{
  "name": "50 Miler 2023",
  "startDate": "2023-04-05T05:00:00",
  "slug": "50M23",
  "stations": [
    {
      "name": "Start Line",
      "stationNumber": 0,
      "stationNumberDisplayed": "START",
      "distance": 0
    },
    {
      "name": "Finish Line",
      "stationNumber": 10,
      "stationNumberDisplayed": "FINISH",
      "distance": 50
    }
  ],
  "participants": [
    {
      "bibNumber": 104,
      "firstName": "John",
      "lastName": "Doe",
      "sex": "M"
    }
  ]
}
