const signs = [
  {
    id: '1',
    name: 'aquarius',
    dates: 'Jan 21 - Feb 19',
    symbol: 'Water Bearer',
    horoscope:
      'Cosmic activity in the career area of your chart is encouraging you to do something out of the ordinary on the work front, something that people in positions of power can’t help but praise you for. Don’t do what has been done already, be a pioneer.',
  },
  {
    id: '2',
    name: 'aries',
    dates: 'Mar 21 - Apr 19',
    symbol: 'Ram',
    horoscope:
      'The more someone insists you can trust their advice the more you should doubt it. It’s okay to be cautious occasionally and this is one of those times when the planets warn you must trust nothing but your own instincts. So-called “experts” are not always right.',
  },
  {
    id: '3',
    name: 'cancer',
    dates: 'Jun 21 - Jul 22',
    symbol: 'Crab',
    horoscope:
      'Do you forgive a friend or colleague for the hurtful things they said or do you hold a grudge and aim to get back at them some point in the future? Forgiving is the best course by far, not for them but for your own peace of mind.',
  },
  {
    id: '4',
    name: 'capricorn',
    dates: 'Dec 22 - Feb 19',
    symbol: 'Goat',
    horoscope:
      'The most important thing today is that you make a conscious decision to channel your energy into areas that are positive and uplifting, rather than negative and divisive. Be someone who brings people together, not someone who delights in tearing them apart.',
  },
  {
    id: '5',
    name: 'gemini',
    dates: 'May 21 - Jun 20',
    symbol: 'Twins',
    horoscope:
      'Do you push on with something you know is going to take up a lot of your time for a return that is modest at best, or do you junk it and start something new? If other people are concerned it’s a no-brainer: you must get it done.',
  },
  {
    id: '6',
    name: 'leo',
    dates: 'Jul 23 - Aug 22',
    symbol: 'Lion',
    horoscope:
      'At some point today you will get the chance to stand up and tell those you work and do business with why you think they have got it wrong. They may not thank you for it now but they will do later on if they listen to your advice.',
  },
  {
    id: '7',
    name: 'libra',
    dates: 'Sept 23 - Oct 22',
    symbol: 'Balance',
    horoscope:
      'You may not care that someone is being openly critical about you but you do need to recognize that their negative remarks could harm you professionally. Stay cool but also make sure they don’t get away with their wildly inaccurate claims.',
  },
  {
    id: '8',
    name: 'pisces',
    dates: 'Feb 19 - Mar 20',
    symbol: 'Fish',
    horoscope:
      'You may be having doubts about a partnership that works great one minute but becomes a burden the next but give it more time. Maybe you are partly to blame for being a little too intense. Slow down, calm down and let it just happen.',
  },
  {
    id: '9',
    name: 'sagittarius',
    dates: 'Nov 22 - Dec 21',
    symbol: 'Archer',
    horoscope:
      'Cosmic activity in the most sensitive area of your chart means you may not be as full of yourself as you usually are today. But that’s okay. Even a Sagittarius has moments when it all gets a bit too much to cope with – it’s quite natural.',
  },
  {
    id: '10',
    name: 'scorpio',
    dates: 'Oct 23 - Nov 21',
    symbol: 'Scorpion',
    horoscope:
      'With the Sun, Mercury and Venus all moving through your birth sign any doubts you had about the path you are planning to take will disappear over the next 24 hours. You have no doubt that you will succeed and your self-belief will make it a fact.',
  },
  {
    id: '11',
    name: 'taurus',
    dates: 'Apr 20 - May 20',
    symbol: 'Bull',
    horoscope:
      'It’s possible that someone will let you down at the very last moment today, but there is no point getting annoyed about it. Simply ask them to reschedule whatever it was you were going to do together but make it clear they only get the two chances.',
  },
  {
    id: '12',
    name: 'virgo',
    dates: 'Aug 23 - Sep 22',
    symbol: 'Virgin',
    horoscope:
      'You do so much for other people, especially for family and friends, but today you need to carve out some time and space for yourself so you can get your head and your heart working on the same level again. “Me time” is of the utmost importance.',
  },
];

const horoscopes = [
  {
    name: 'virgo',
    horoscope:
      'You do so much for other people, especially for family and friends, but today you need to carve out some time and space for yourself so you can get your head and your heart working on the same level again. “Me time” is of the utmost importance.',
  },
  {
    name: 'taurus',
    horoscope:
      'It’s possible that someone will let you down at the very last moment today, but there is no point getting annoyed about it. Simply ask them to reschedule whatever it was you were going to do together but make it clear they only get the two chances.',
  },
  {
    name: 'scorpio',
    horoscope:
      'With the Sun, Mercury and Venus all moving through your birth sign any doubts you had about the path you are planning to take will disappear over the next 24 hours. You have no doubt that you will succeed and your self-belief will make it a fact.',
  },
  {
    name: 'sagittarius',
    horoscope:
      'Cosmic activity in the most sensitive area of your chart means you may not be as full of yourself as you usually are today. But that’s okay. Even a Sagittarius has moments when it all gets a bit too much to cope with – it’s quite natural.',
  },
  {
    name: 'pisces',
    horoscope:
      'You may be having doubts about a partnership that works great one minute but becomes a burden the next but give it more time. Maybe you are partly to blame for being a little too intense. Slow down, calm down and let it just happen.',
  },
  {
    name: 'libra',
    horoscope:
      'You may not care that someone is being openly critical about you but you do need to recognize that their negative remarks could harm you professionally. Stay cool but also make sure they don’t get away with their wildly inaccurate claims.',
  },
  {
    name: 'leo',
    horoscope:
      'At some point today you will get the chance to stand up and tell those you work and do business with why you think they have got it wrong. They may not thank you for it now but they will do later on if they listen to your advice.',
  },
  {
    name: 'gemini',
    horoscope:
      'Do you push on with something you know is going to take up a lot of your time for a return that is modest at best, or do you junk it and start something new? If other people are concerned it’s a no-brainer: you must get it done.',
  },
  {
    name: 'capricorn',
    horoscope:
      'The most important thing today is that you make a conscious decision to channel your energy into areas that are positive and uplifting, rather than negative and divisive. Be someone who brings people together, not someone who delights in tearing them apart.',
  },
  {
    name: 'cancer',
    horoscope:
      'Do you forgive a friend or colleague for the hurtful things they said or do you hold a grudge and aim to get back at them some point in the future? Forgiving is the best course by far, not for them but for your own peace of mind.',
  },
  {
    name: 'aries',
    horoscope:
      'The more someone insists you can trust their advice the more you should doubt it. It’s okay to be cautious occasionally and this is one of those times when the planets warn you must trust nothing but your own instincts. So-called “experts” are not always right.',
  },
  {
    name: 'aquarius',
    horoscope:
      'Cosmic activity in the career area of your chart is encouraging you to do something out of the ordinary on the work front, something that people in positions of power can’t help but praise you for. Don’t do what has been done already, be a pioneer.',
  },
];

module.exports = { signs, horoscopes };
