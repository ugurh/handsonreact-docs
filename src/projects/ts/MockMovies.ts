import Movie from "./Movie";

export const MOCK_MOVIES = [
  new Movie({
    id: 1,
    name: " Titanic",
    description:
      "A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.",
    type: "Drama",
  }),
  ,
  new Movie({
    id: 2,
    name: " E.T. the Extra-Terrestrial",
    description:
      "A troubled child summons the courage to help a friendly alien escape Earth and return to his home world.",
    type: "Fantasy",
  }),
  new Movie({
    id: 3,
    name: "The Wizard of Oz",
    description:
      "Dorothy Gale is swept away from a farm in Kansas to a magical land of Oz in a tornado and embarks on a quest with her new friends to see the Wizard who can help her return home in Kansas and help her friends as well.",
    type: "Fantasy",
  }),
  new Movie({
    id: 4,
    name: "Star Wars: Episode IV - A New Hope ",
    description:
      "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire/`s world-destroying battle-station while also attempting to rescue Princess Leia from the evil Darth Vader.",
    type: "Action",
  }),
];
