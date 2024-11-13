# Race Data JSON Schema

This document provides the JSON schema format for importing race data into the TRacer App.

## JSON File Format

This JSON format is required for loading race data into the TRacer app. Note the distinction between an **event** and a **race**: an event may contain multiple races occurring at the same time and sharing stations. For example, a single event could include 100M, 100K, and 50M races simultaneously.

The JSON file should consist of the following properties:

### File Structure

- **name** (string, required): Name of the event.
- **startDate** (string, optional): Date and time of the event start.
- **endDate** (string, optional): Date and time of the event end.
- **slug** (string, optional): URL-friendly name for the event.
- **stations** (array of [Station Object](#station-object), required): Array of station objects that define the event's stations.
- **races** (array of [Race Object](#race-object), optional): Array of race objects representing each race within the event (e.g., 100M, 100K).
- **participants** (array of [Participant Object](#participant-object), optional): Array of participant objects defining each participant in the event.

---

---

### Station Object

Represents a station within the event.

- **name** (string, optional): Name of the station.
- **stationNumber** (number, required): Unique number assigned to the station. The starting station should be `0`.
- **stationNumberDisplayed** (string, required): Displayed identifier for the station (e.g., `START`, `FINISH`).
- **distance** (number, optional): Distance to this station from the start, in miles or kilometers.

---

### Race Object

Defines a specific race within the event. Required only when the event includes multiple races.

- **name** (string, required): Name of the race.
- **distance** (number, optional): Distance of the race.
- **stations** (array of partial [Station Object](#station-object), required): Each object represents a station specific to this race. Only the `stationNumber` is required, and all other properties are optional, allowing for overrides of the default station information (e.g., custom name or distance).

---

### Participant Object

Represents a participant in the event.

- **age** (string, optional): Age or age group of the participant (e.g., `<20`, `20-29`).
- **bibNumber** (number, required): Unique bib number assigned to the participant.
- **firstName** (string, optional): First name of the participant.
- **lastName** (string, optional): Last name of the participant.
- **note** (string, optional): Additional note about the participant.
- **home** (string, optional): Home location of the participant.
- **raceName** (string, required if using multiple races, optional otherwise): Must match the `name` property of the Race Object to identify which race the participant is registered for.
- **sex** (string, optional): Gender of the participant (`M` for male, `F` for female).
- **team** (string, optional): Team affiliation of the participant.

---

## Example

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
      "name": "Custom name for Station 1",
      "stationNumber": 1,
      "distance": 4.65
    },
    ...
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
    },
    ...
  ]
}
```
