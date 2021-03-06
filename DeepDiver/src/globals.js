import {Dimensions} from 'react-native';

exports.GLOBALS = {
  font: 'Noise Machine',
  secondaryFont: 'Raleway-Bold',
  sensitivity: 75,
  topBoundary: 29500,
  dimensions: {
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height
  },
  wheelSpacing: 150,
  initCharacterPosition: {
    x: 40,
    y: Dimensions.get('window').height*.13,
  },
  initBackgroundPosition: {
    x: 0,
    y: 29000,
  },
  initBackgroundDimensions: {
    width: 2000*5,
    height: 6000*5,
  },
  projectiles: {
    harpoon: {
      speed: 15
    }
  },
  coins: {
    multiplier: 22,
    height: 17,
    width: 17,
  },
  maxEnemies: 2,
  regions: {
    beach: {
      start: 30000,
      enemies: [
        {
          type: 'HAMMERHEAD',
          dimensions: {
            width: 200,
            height: 100
          },
          widthInMeters: 6,
          damage: 25,
          wave: {
            frequency: -150,
            wavelength: 400,
            trackAngle: true
          },
          speed: 3,
          steps: [3, 1],
          src: require('./images/HammerHead.png'),
          damageAnimations: {
            up: 2,
            straight: 3,
            down: 4,
          }
        },
        {
          type: 'PIRANHA',
          dimensions: {
            width: 100,
            height: 100
          },
          widthInMeters: 0.75,
          damage: 5,
          wave: {
            frequency: -50,
            wavelength: 100,
            trackAngle: true
          },
          speed: 2,
          steps: [3],
          src: require('./images/Piranha.png'),
          damageAnimations: {
            up: 2,
            straight: 3,
            down: 4,
          }
        },
        {
          type: 'STING_RAY',
          dimensions: {
            width: 150,
            height: 125
          },
          widthInMeters: 2.1336,
          damage: 10,
          wave: {
            frequency: 100,
            wavelength: 300,
            trackAngle: true
          },
          speed: 1,
          steps: [3, 4, 1, 1, 1],
          src: require('./images/StingRay.png'),
          damageAnimations: {
            up: 2,
            straight: 3,
            down: 4,
          }
        },
      ]
    },
    midsea: {
      start: 26250,
      enemies: [
        {
          type: 'GREAT_WHITE',
          dimensions: {
            width: 300,
            height: 150
          },
          widthInMeters: 6.4008,
          damage: 10,
          wave: {
            frequency: 100,
            wavelength: 300,
            trackAngle: true
          },
          speed: 3,
          steps: [3, 3, 1, 1, 1],
          src: require('./images/GreatWhite.png'),
          damageAnimations: {
            up: 2,
            straight: 3,
            down: 4,
          }
        },
        {
          type: 'JELLYFISH',
          dimensions: {
            width: 100,
            height: 100
          },
          widthInMeters: 0.4,
          damage: 5,
          wave: {
            frequency: 70,
            wavelength: 100,
            trackAngle: false
          },
          speed: 0.1,
          steps: [4, 1, 1, 1],
          src: require('./images/JellyFish.png'),
          damageAnimations: {
            up: 1,
            straight: 2,
            down: 3,
          }
        },
        {
          type: 'STING_RAY',
          dimensions: {
            width: 150,
            height: 125
          },
          widthInMeters: 2.1336,
          damage: 10,
          wave: {
            frequency: 100,
            wavelength: 300,
            trackAngle: true
          },
          speed: 1,
          steps: [3, 4, 1, 1, 1],
          src: require('./images/StingRay.png'),
          damageAnimations: {
            up: 2,
            straight: 3,
            down: 4,
          }
        },
        {
          type: 'PUFFER',
          dimensions: {
            width: 150,
            height: 125
          },
          widthInMeters: 0.6,
          damage: 5,
          wave: {
            frequency: 50,
            wavelength: 150,
            trackAngle: true
          },
          speed: 1,
          steps: [3, 3, 1, 1],
          src: require('./images/Puffer.png'),
          damageAnimations: {
            up: 2,
            straight: 3,
            down: 4,
          }
        }
      ]
    },
    midnight: {
      start: 15000,
      enemies: [
        {
          type: 'ELECTRICEEL',
          dimensions: {
            width: 150,
            height: 63
          },
          widthInMeters: 2.4384,
          damage: 25,
          wave: {
            frequency: 50,
            wavelength: 100,
            trackAngle: true
          },
          speed: 2,
          src: require('./images/ElectricEel.png'),
          steps: [1],
          damageAnimations: {
            up: 2,
            straight: 3,
            down: 4,
          }
        },
        {
          type: 'JELLYFISH-GLOW',
          dimensions: {
            width: 100,
            height: 100
          },
          widthInMeters: 0.4,
          damage: 10,
          wave: {
            frequency: 70,
            wavelength: 100,
            trackAngle: false
          },
          speed: 1,
          steps: [4],
          src: require('./images/Jellyfish-Glow.png'),
          damageAnimations: {
            up: 2,
            straight: 3,
            down: 4,
          }
        },
        {
          type: 'LIGHT-FISH',
          dimensions: {
            width: 150,
            height: 100
          },
          widthInMeters: 0.4,
          damage: 10,
          wave: {
            frequency: 70,
            wavelength: 100,
            trackAngle: true
          },
          speed: 1,
          steps: [4],
          src: require('./images/LightFish.png'),
          damageAnimations: {
            up: 2,
            straight: 3,
            down: 4,
          }
        }
      ]
    },
  },

  gameSpeed: {
    horiziontal: 5,
    vertical: 4
  },
  forceUp: 5,
  forceLeft: 5,
  SeaLord: {
    steps: [0, 5, 16, 16, 15, 16, 2, 2, 2],
    fallingAnimation: 3,
    upAnimation: 4,
    downAnimation: 5,
    attackingAnimation: 6,
    damageAnimation: 7,
    eelDamageAnimation: 8,
    offsetY: 73,
    tileWidth: 150,
    tileHeight: 200,
    tiles: [
      {
        tileWidth: 150,
        tileHeight: 200,
      },
      {
        tileWidth: 150,
        tileHeight: 200,
      },
      {
        tileWidth: 150,
        tileHeight: 200
      },
      {
        tileWidth: 150,
        tileHeight: 200,
      },
      {
        tileWidth: 150,
        tileHeight: 200,
      },
      {
        tileWidth: 150,
        tileHeight: 200,
      },
      {
        tileWidth: 150,
        tileHeight: 200,
      },
      {
        tileWidth: 150,
        tileHeight: 200,
      },
      {
        tileWidth: 150,
        tileHeight: 200,
      },
      {
        tileWidth: 150,
        tileHeight: 200,
      },


    ],
  },
  Aquaria: {
    steps: [0, 3, 4, 4, 4, 1, 1, 2],
    fallingAnimation: 2,
    upAnimation: 3,
    downAnimation: 4,
    tileWidth: 150,
    tileHeight: 250,

  },
  CommanderTurtle: {
    tileHeight: 400,
    tileWidth: 300,
    steps: [0, 1, 3, 3, 3, 3, 3, 3, 3],
    fallingAnimation: 3,
    upAnimation: 2,
    downAnimation: 3,
    heightInMeters: 2
  },
  player: {
    type: 'SEA_LORD'
  },
  jumpConstant: 40,
  defaultEnemyHeight: 75,
  defaultEnemyWidth: 75,
  playerHeightInMeters: 1.8288,
  playerWidthInMeters: 0.5,
  pixelsInAMeter: 60,
  playerMass: 95.2544,
  seaWeedDistance: 50,
  visibilityInMeters: 100,
}
