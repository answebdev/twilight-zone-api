# The Twilight Zone API

![banner](https://user-images.githubusercontent.com/36783010/147993445-4deaea94-b39f-48a5-9dd8-8df6f0ef5ddb.png)

## Documentation

Welcome to the Twilight Zone API. This documentation should provide with you all the information you need to start making your HTTP requests. This API is free. Feel free to use it in your projects.

### Base Url

`https://the-twilight-zone-api.herokuapp.com/`


### Episode Attributes

| Attribute | Type | Description |
| :---         |     :---      |          :--- |
| id   | integer     | Unique id per episode    |
| title     | string       | Episode title      |
| season   | string     | Season number    |
| episode     | string       | Episode number      |
| directed_by   | string     | Episode director(s)    |
| written_by     | string       | Episode writer      |
| air_year   | string     | Original year episode aired    |
| air_date     | string       | Original air date      |
| storyline   | string     | Brief overview of episode    |
| cast     | array       | Episode actor(s)      |
| opening_narration   | string     | Narration at opening of episode    |
| closing_narration     | string       | Narration at closing of episode      |
| img   | string     | Image from episode    |
| wikipedia     | string       | Link to episode Wikipedia page      |
| imdb   | string     | Link to episode IMDb page    |


### Get all episodes

Endpoint to retrieve information from all episodes.

`/episodes`


The request for all of the episodes looks like this.

```
fetch('https://the-twilight-zone-api.herokuapp.com/episodes')
  .then(response => response.json())
  .then(json => console.log(json))
```


### Get a single episode

Example request by episode id. In this example, episode with an id of 1 is being requested.

```
fetch('https://the-twilight-zone-api.herokuapp.com/episodes/1')
  .then(response => response.json())
  .then(json => console.log(json))
```

Running this script will return the following data.

```
{
    "id": 1,
    "title": "Where Is Everybody?",
    "season": "1",
    "episode": "1",
    "directed_by": "Robert Stevens",
    "written_by": "Rod Serling",
    "air_year": "1959",
    "air_date": "10-02-1959",
    "storyline": "Mike Ferris finds himself alone in the small Oakwood town and without recollection about his name, where he is or who he is. Mike wanders through the town trying to find a living soul. The tension increases and Mike has a breakdown.",
    "cast": [
        "Earl Holliman",
        "James Gregory",
        "Garry Walberg"
    ],
    "opening_narration": "The place is here. The time is now, and the journey into the shadows that we are about to watch, could be our journey.",
    "closing_narration": "The barrier of loneliness: The palpable, desperate need of the human animal to be with his fellow man. Up there, up there in the vastness of space, in the void that is sky, up there is an enemy known as isolation. It sits there in the stars waiting, waiting with the patience of eons, forever waiting... in The Twilight Zone.",
    "img": "https://i.postimg.cc/DycfzqTJ/where-is-everybody.png",
    "wikipedia": "https://en.wikipedia.org/wiki/Where_Is_Everybody%3F",
    "imdb": "https://www.imdb.com/title/tt0734692/"
}
```


### Get all episodes by season

Endpoint to retrieve information from all episodes by season. To indicate the season, add the season number (1-5) at the end.

`/season1`


The request for all of the episodes from season 1 looks like this.

```
fetch('https://the-twilight-zone-api.herokuapp.com/season1')
  .then(response => response.json())
  .then(json => console.log(json))
```


### Get a single episode of a particular season

Example request by episode id from a particular season. In this example, episode with an id of 39 from season 2 is being requested.

```
fetch('https://the-twilight-zone-api.herokuapp.com/season2/39')
  .then(response => response.json())
  .then(json => console.log(json))
```


Running this script will return the following data.

```
{
    "id": 39,
    "title": "Nervous Man in a Four Dollar Room",
    "season": "2",
    "episode": "3",
    "directed_by": "Douglas Heyes",
    "written_by": "Rod Serling",
    "air_year": "1960",
    "air_date": "10-14-1960",
    "storyline": "Small time criminal Jackie Rhoades must face both his past and his conscience while waiting for his next assignment.",
    "cast": [
        "Joe Mantell",
        "William D. Gordon"
    ],
    "opening_narration": "This is Mr. Jackie Rhoades, age thirty-four, and where some men leave a mark of their lives as a record of their fragmentary existence on Earth, this man leaves a blot, a dirty, discolored blemish to document a cheap and undistinguished sojourn amongst his betters. What you're about to watch in this room is a strange mortal combat between a man and himself, for in just a moment, Mr. Jackie Rhoades, whose life has been given over to fighting adversaries, will find his most formidable opponent in a cheap hotel room that is in reality the outskirts of The Twilight Zone.",
    "closing_narration": "Exit Mr. John Rhoades, formerly a reflection in a mirror, a fragment of someone else's conscience, a wishful thinker made out of glass, but now made out of flesh, and on his way to join the company of men. Mr. John Rhoades, with one foot through the door and one foot out of the Twilight Zone.",
    "img": "https://i.postimg.cc/vZpzZWWb/nervous-man-in-a-four-dollar-room.png",
    "wikipedia": "https://en.wikipedia.org/wiki/Nervous_Man_in_a_Four_Dollar_Room",
    "imdb": "https://www.imdb.com/title/tt0734596/"
}
```


## Resources

The Twilight Zone API comes with a set of 6 common resources:

| Resource  | Description |
| ------------- | ------------- |
| /episodes  | 156 episodes  |
| /season1  | Season 1 episodes  |
| /season2  | Season 2 episodes  |
| /season3  | Season 3 episodes  |
| /season4  | Season 4 episodes  |
| /season5  | Season 5 episodes  |
