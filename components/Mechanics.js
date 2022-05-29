// CSS

import mechanicsStyles from "../styles/Mechanics.module.css";

const Mechanics = () => {
  const objMechanics = [
    {
      id: "1",
      desc: `Clients/representatives will join as an individual representing the company they are working for. 
        A company can have multiple representatives.`,
    },
    {
      id: "2",
      desc: `There will be three categories: running, walking and cycling, participants can join one or all 
      three public events.`,
    },
    {
      id: "3",
      desc: `Race period will be from June 6, 2022 to July 6, 2022.`,
    },
    {
      id: "4",
      desc: `Event is open exclusively for Generali Members only.`,
    },
    {
      id: "5",
      desc: `Download the GenConnect Mobile App and register your Generali Policy ID.`,
    },
    {
      id: "6",
      desc: `Go to GenWellness, and select the category you want to join.`,
    },
    {
      id: "7",
      desc: `The running event will have a minimum distance of 40km, the walking event will have a minimum distance 
      of 180,000 steps (6,000 steps per day) equivalent to 137.16 km, and the cycling event will have a 
      minimum distance of 100km.`,
    },
    {
      id: "8",
      desc: `Distances are cumulative so participants can run, walk or cycle multiple times throughout the duration of the event.`,
    },
    {
      id: "9",
      desc: `Participants will submit their activities to the GenConnect App.`,
    },
    {
      id: "10",
      desc: `Any app that accurately tracks time and distance within the race period is allowed, as long as participants 
      can take a screenshot of their activity afterwards and submit it as an entry. - The easiest method is to Sync with 
      Tictrac. GenConnect integrated this feature so the participant’s entry is automatically validated by Tictrac.`,
    },
    {
      id: "11",
      desc: `Participants can submit entries on a daily basis or bulk only within the race period.`,
    },
  ];
  return (
    <div className={mechanicsStyles.container} id='mechanics'>
      <div className={mechanicsStyles.title}>Mechanics</div>
      <div className={mechanicsStyles.table}>
        {objMechanics.map((mechanics, index) => {
          return (
            <div className={mechanicsStyles.card} key={index}>
              <div className={mechanicsStyles.card_index}>{mechanics.id}</div>
              <div className={mechanicsStyles.card_description}>
                {mechanics.desc}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Mechanics;
