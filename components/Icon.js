const Icon = ({ name }) => {
  const iconsList = {
    heart: '❤️',
    star: '🌟',
    like: '❤️‍🔥',
    dislike: '❌',
    flash: '⚡️',
    marker: '📍',
    filter: '⚙️',
    user: '🇮🇳',
    circle: '⭕️',
    hashtag: '🔄',
    calendar: '🗓️',
    chevronLeft: '◀️',
    optionsV: '\uF142',
    optionsH: '\uF141',
    chat: '💬',
    explore: '🔍'
  };

  let icon = iconsList[name];

  return icon;
};

export default Icon;