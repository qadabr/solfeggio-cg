const modeFunctions = [
    {
        name: 'T',
        mode: 'M',
    },
    {
        name: 'II',
        mode: 'm',
    },
    {
        name: 'III',
        mode: 'm',
    },
    {
        name: 'S',
        mode: 'M',
    },
    {
        name: 'D',
        mode: 'M',
    },
    {
        name: 'VI',
        mode: 'm',
    },
    {
        name: 'VII',
        mode: 'm',
    },
];

export const progressions = [
    [ 'T', 'S', 'VI', 'D' ],
    [ 'T', 'VI', 'T', 'VI' ],
];

const modeChord = (mode) => {
    switch (mode) {
        case 'M':
            return [0, 4, 7];
        case 'm':
            return [0, 3, 7];
    }

    return null;
};

export const composeProgression = (progression, key, octave) => {
    
};