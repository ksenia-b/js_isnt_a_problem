const flights = '_____dafs_sdfasdfa+_sadfasdf;ads+fasd;adsfa;dsfa333';


console.log(flights.split('+'));

for (const flight of flights.split('+')){
    console.log(flight);
    const [type, from, to, time] = flight.split(';');
    const output = `${type} ${from ${to} (${time}.replace(':','h'})`;

}

