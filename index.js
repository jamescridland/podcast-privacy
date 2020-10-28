const abilities = {
  TRACKING: 'Tracking',
  STATS: 'Stats',
  HOSTING: 'Hosting',
  ADVERTISING: 'Advertising',
};

const podcastHostData = {
  'podtrac.com': {
    name: 'Podtrac',
    abilities: [abilities.STATS],
    privacyPolicyURL: 'http://analytics.podtrac.com/consumer-privacy-policy',
  },
  'pdst.fm': {
    name: 'Podsights',
    abilities: [abilities.TRACKING],
    privacyPolicyURL: 'https://podsights.com/privacy/',
  },
  'chtbl.com': {
    name: 'Chartable',
    abilities: [abilities.TRACKING, abilities.STATS],
    privacyPolicyURL: 'https://chartable.com/privacy',
  },
  'art19.com': {
    name: 'Art19',
    abilities: [abilities.ADVERTISING, abilities.TRACKING, abilities.HOSTING],
    privacyPolicyURL: 'https://art19.com/privacy',
  },
  'podbean.com': {
    name: 'Podbean',
    abilities: [abilities.HOSTING],
    privacyPolicyURL: 'https://www.podbean.com/privacy',
  },
  'prxu.org': {
    name: 'PRX',
    abilities: [abilities.HOSTING],
    privacyPolicyURL: 'https://www.prx.org/privacy-policy',
  },
  'megaphone.fm': {
    name: 'Megaphone',
    abilities: [abilities.ADVERTISING, abilities.TRACKING, abilities.HOSTING],
    privacyPolicyURL: 'https://www.megaphone.fm/terms/privacy',
  },
  'soundcloud.com': {
    name: 'Soundcloud',
    abilities: [abilities.HOSTING],
    privacyPolicyURL: 'https://soundcloud.com/pages/privacy',
  },
  'cdn.simplecast.fm': {
    name: 'Simplecast',
    abilities: [abilities.HOSTING, abilities.STATS],
    privacyPolicyURL: 'https://simplecast.com/privacy/',
  },
  'transistor.fm': {
    name: 'Transistor.fm',
    abilities: [abilities.HOSTING, abilities.STATS],
    privacyPolicyURL: 'https://transistor.fm/privacy',
  },
  'traffic.libsyn.com': {
    name: 'Libsyn',
    abilities: [abilities.HOSTING, abilities.STATS],
    privacyPolicyURL: 'https://libsyn.com/tos-policies/privacy-policy/',
  },
  'npr.org': {
    name: 'NPR',
    abilities: [abilities.ADVERTISING, abilities.TRACKING, abilities.HOSTING],
    privacyPolicyURL: 'https://www.npr.org/about-npr/179878450/privacy-policy',
  },
  'anchor.fm': {
    name: 'Anchor (from Spotify)',
    abilities: [abilities.ADVERTISING, abilities.TRACKING, abilities.HOSTING],
    privacyPolicyURL: 'https://anchor.fm/privacy',
  },
  'omny.fm': {
    name: 'Omny',
    abilities: [abilities.ADVERTISING, abilities.TRACKING, abilities.HOSTING],
    privacyPolicyURL: 'https://omnystudio.com/policies/listener',
  },
  'feedproxy.google.com': {
    name: 'Feedburner (from Google)',
    abilities: [abilities.TRACKING, abilities.STATS],
    privacyPolicyURL: 'https://policies.google.com/privacy',
  },
  'noxsolutions.com': {
    name: 'Nox Solutions',
    abilities: [abilities.ADVERTISING, abilities.TRACKING, abilities.HOSTING],
    privacyPolicyURL: 'https://www.noxsolutions.com/',
  },
  'acast.com': {
    name: 'Acast',
    abilities: [abilities.ADVERTISING, abilities.TRACKING, abilities.HOSTING],
    privacyPolicyURL: 'https://www.acast.com/en/privacy',
  },
  'podomatic.com': {
    name: 'Podomatic',
    abilities: [abilities.STATS, abilities.HOSTING],
    privacyPolicyURL: 'https://www.podomatic.com/about/privacy',
  },
  'blubrry.com': {
    name: 'Blubrry',
    abilities: [abilities.STATS, abilities.HOSTING],
    privacyPolicyURL: 'https://blubrry.com/about/privacy-policy/',
  },
  'fireside.fm': {
    name: 'Fireside',
    abilities: [abilities.STATS, abilities.HOSTING],
    privacyPolicyURL: 'https://fireside.fm/privacy',
  },
  'pdcn.co': {
    name: 'Podcorn',
    abilities: [abilities.STATS],
    privacyPolicyURL: 'https://podcorn.com/privacy/',
  },
  'audioboom.com': {
    name: 'Audioboom',
    abilities: [abilities.ADVERTISING, abilities.STATS, abilities.HOSTING],
    privacyPolicyURL: 'https://audioboom.com/about/privacy',
  },
  'spreaker.com': {
    name: 'Spreaker',
    abilities: [abilities.STATS, abilities.HOSTING],
    privacyPolicyURL: 'https://www.spreaker.com/privacy',
  },
  'buzzsprout.com': {
    name: 'Buzzsprout',
    abilities: [abilities.STATS, abilities.HOSTING],
    privacyPolicyURL: 'https://www.buzzsprout.com/privacy',
  },
  'captivate.fm': {
    name: 'Captivate',
    abilities: [abilities.STATS, abilities.HOSTING],
    privacyPolicyURL: 'https://www.captivate.fm/privacy-policy-for-listeners/',
  },
  'podigee.com': {
    name: 'Podigee',
    abilities: [abilities.ADVERTISING, abilities.TRACKING, abilities.HOSTING],
    privacyPolicyURL: 'https://www.podigee.com/en/about/privacy',
  },
  'castfire.com': {
    name: 'WideOrbit',
    abilities: [abilities.ADVERTISING, abilities.TRACKING, abilities.HOSTING],
    privacyPolicyURL: 'https://www.wideorbit.com/privacy/',
  },
  'redcircle.com': {
    name: 'RedCircle',
    abilities: [
      abilities.ADVERTISING,
      abilities.STATS,
      abilities.TRACKING,
      abilities.HOSTING,
    ],
    privacyPolicyURL: 'https://redcircle.com/privacy',
  },
};

function podcastPrivacyInfo(url) {
  if (!url || typeof url != 'string')
    throw new Error('Invalid or missing url.');
  return Object.keys(podcastHostData)
    .filter(key => url.toLowerCase().includes(key))
    .map(key => podcastHostData[key]);
}

module.exports = podcastPrivacyInfo;
