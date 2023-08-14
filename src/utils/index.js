export const leastSquaresFitCalc = (map) => {
    const length = map.size;
    if (length < 2) {
        throw new Error("leastSquaresFit() map must be at least 2 values");
    }
    let resTotal = 0;
    let valueTotal = 0;
    map.forEach((value, res) => {
        resTotal = resTotal + res;
        valueTotal = valueTotal + value;
    });
    const resMean = resTotal / length;
    const valueMean = valueTotal / length;
    let multipliedDiff = 0;
    let squaredDiff = 0;
    map.forEach((value, res) => {
        const resDiff = res - resMean;
        const valueDiff = value - valueMean;
        multipliedDiff = multipliedDiff + resDiff * valueDiff;
        squaredDiff = squaredDiff + resDiff * resDiff;
    });
    const m = multipliedDiff / squaredDiff;
    const b = valueMean - m * resMean;
    return `calc(${m * 100}vw + ${b}px)`;
};

export const legendaryPokemons = [
    {
        name: 'Mew',
        description: 'Mew is a Psychic-type Pokémon introduced in Generation I. Known as the New Species Pokémon, it is said to possess the genetic composition of all Pokémon.',
        points: [
            {text: 'Healthy Points', value: '100,000'},
            {text: 'Experience', value: '90,000'},
            {text: 'Attack', value: '95,000'},
            {text: 'Defense', value: '85,000'},
            {text: 'Special Attack', value: '98,000'},
            {text: 'Social Defense', value: '90,000'},
        ]
    },
    {
        name: 'MewTwo',
        description: 'Mewtwo is a Pokémon created by science. It is a bipedal, humanoid creature with some feline features. It is primarily gray with a long, purple tail.',
        points: [
            {text: 'Healthy Points', value: '110,000'},
            {text: 'Experience', value: '95,000'},
            {text: 'Attack', value: '99,000'},
            {text: 'Defense', value: '89,000'},
            {text: 'Special Attack', value: '97,000'},
            {text: 'Social Defense', value: '93,000'},
        ]
    },
    {
        name: 'Lugia',
        description: 'Lugia is a Psychic/Flying-type Legendary Pokémon. Known as the Diving Pokémon, it is said to be the guardian of the seas.',
        points: [
            {text: 'Healthy Points', value: '108,000'},
            {text: 'Experience', value: '92,000'},
            {text: 'Attack', value: '93,000'},
            {text: 'Defense', value: '91,000'},
            {text: 'Special Attack', value: '96,000'},
            {text: 'Social Defense', value: '94,000'},
        ]
    },
    {
        name: 'Ho-oh',
        description: 'Ho-Oh is a Fire/Flying-type Legendary Pokémon. Known as the Rainbow Pokémon, it is said to bring joy to any who see it.',
        points: [
            {text: 'Healthy Points', value: '106,000'},
            {text: 'Experience', value: '91,000'},
            {text: 'Attack', value: '94,000'},
            {text: 'Defense', value: '90,000'},
            {text: 'Special Attack', value: '95,000'},
            {text: 'Social Defense', value: '92,000'},
        ]
    },
    {
        name: 'Rayquaza',
        description: 'Rayquaza is a Dragon/Flying-type Legendary Pokémon. It has lived for hundreds of millions of years in the ozone layer.',
        points: [
            {text: 'Healthy Points', value: '108,000'},
            {text: 'Experience', value: '92,000'},
            {text: 'Attack', value: '93,000'},
            {text: 'Defense', value: '91,000'},
            {text: 'Special Attack', value: '96,000'},
            {text: 'Social Defense', value: '94,000'},
        ]
    },
    {
        name: 'Kyogre',
        description: 'Kyogre is a Water-type Legendary Pokémon. It is said to represent the ocean’s surface.',
        points: [
            {text: 'Healthy Points', value: '108,000'},
            {text: 'Experience', value: '92,000'},
            {text: 'Attack', value: '93,000'},
            {text: 'Defense', value: '91,000'},
            {text: 'Special Attack', value: '96,000'},
            {text: 'Social Defense', value: '94,000'},
        ]
    },
    {
        name: 'Groudon',
        description: 'Groudon is a Ground-type Legendary Pokémon. It is said to represent the land itself.',
        points: [
            {text: 'Healthy Points', value: '108,000'},
            {text: 'Experience', value: '92,000'},
            {text: 'Attack', value: '93,000'},
            {text: 'Defense', value: '91,000'},
            {text: 'Special Attack', value: '96,000'},
            {text: 'Social Defense', value: '94,000'},
        ]
    },
    {
        name: 'Arceus',
        description: 'Arceus is known as "The Original One", as it is said that it created the Pokémon universe and the lake and creation trios.',
        points: [
            {text: 'Healthy Points', value: '108,000'},
            {text: 'Experience', value: '92,000'},
            {text: 'Attack', value: '93,000'},
            {text: 'Defense', value: '91,000'},
            {text: 'Special Attack', value: '96,000'},
            {text: 'Social Defense', value: '94,000'},
        ]
    },
    {
        name: 'Dialga',
        description: 'Dialga is a Steel/Dragon-type Legendary Pokémon. It is known to control time.',
        points: [
            {text: 'Healthy Points', value: '108,000'},
            {text: 'Experience', value: '92,000'},
            {text: 'Attack', value: '93,000'},
            {text: 'Defense', value: '91,000'},
            {text: 'Special Attack', value: '96,000'},
            {text: 'Social Defense', value: '94,000'},
        ]
    },
    {
        name: 'Palkia',
        description: 'Palkia is a Water/Dragon-type Legendary Pokémon. It is known to control space.',
        points: [
            {text: 'Healthy Points', value: '108,000'},
            {text: 'Experience', value: '92,000'},
            {text: 'Attack', value: '93,000'},
            {text: 'Defense', value: '91,000'},
            {text: 'Special Attack', value: '96,000'},
            {text: 'Social Defense', value: '94,000'},
        ]
    },
    {
        name: 'Giratina',
        description: 'Giratina is a Ghost/Dragon-type Legendary Pokémon. It is known to inhabit the Distortion World.',
        points: [
            {text: 'Healthy Points', value: '108,000'},
            {text: 'Experience', value: '92,000'},
            {text: 'Attack', value: '93,000'},
            {text: 'Defense', value: '91,000'},
            {text: 'Special Attack', value: '96,000'},
            {text: 'Social Defense', value: '94,000'},
        ]
    },
    {
        name: 'Reshiram',
        description: 'Reshiram is a Dragon/Fire-type Legendary Pokémon. It represents yang and is partnered with Zekrom.',
        points: [
            {text: 'Healthy Points', value: '108,000'},
            {text: 'Experience', value: '92,000'},
            {text: 'Attack', value: '93,000'},
            {text: 'Defense', value: '91,000'},
            {text: 'Special Attack', value: '96,000'},
            {text: 'Social Defense', value: '94,000'},
        ]
    },
    {
        name: 'Zekrom',
        description: 'Zekrom is a Dragon/Electric-type Legendary Pokémon. It represents yin and is partnered with Reshiram.',
        points: [
            {text: 'Healthy Points', value: '108,000'},
            {text: 'Experience', value: '92,000'},
            {text: 'Attack', value: '93,000'},
            {text: 'Defense', value: '91,000'},
            {text: 'Special Attack', value: '96,000'},
            {text: 'Social Defense', value: '94,000'},
        ]
    },
    {
        name: 'Kyurem',
        description: 'Kyurem is a Dragon/Ice-type Legendary Pokémon. It represents wuji and is associated with both Reshiram and Zekrom.',
        points: [
            {text: 'Healthy Points', value: '108,000'},
            {text: 'Experience', value: '92,000'},
            {text: 'Attack', value: '93,000'},
            {text: 'Defense', value: '91,000'},
            {text: 'Special Attack', value: '96,000'},
            {text: 'Social Defense', value: '94,000'},
        ]
    },
    {
        name: 'Zapdos',
        description: 'Zapdos is an Electric/Flying-type Legendary Pokémon. It is one of the three Legendary birds of Kanto.',
        points: [
            {text: 'Healthy Points', value: '108,000'},
            {text: 'Experience', value: '92,000'},
            {text: 'Attack', value: '93,000'},
            {text: 'Defense', value: '91,000'},
            {text: 'Special Attack', value: '96,000'},
            {text: 'Social Defense', value: '94,000'},
        ]
    },
    {
        name: 'Moltres',
        description: 'Moltres is a Fire/Flying-type Legendary Pokémon. It is one of the three Legendary birds of Kanto.',
        points: [
            {text: 'Healthy Points', value: '108,000'},
            {text: 'Experience', value: '92,000'},
            {text: 'Attack', value: '93,000'},
            {text: 'Defense', value: '91,000'},
            {text: 'Special Attack', value: '96,000'},
            {text: 'Social Defense', value: '94,000'},
        ]
    },
    {
        name: 'Articuno',
        description: 'Articuno is an Ice/Flying-type Legendary Pokémon. It is one of the three Legendary birds of Kanto.',
        points: [
            {text: 'Healthy Points', value: '108,000'},
            {text: 'Experience', value: '92,000'},
            {text: 'Attack', value: '93,000'},
            {text: 'Defense', value: '91,000'},
            {text: 'Special Attack', value: '96,000'},
            {text: 'Social Defense', value: '94,000'},
        ]
    }
];
