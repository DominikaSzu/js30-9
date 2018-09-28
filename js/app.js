const dogs = [{ name: 'Snickers', age: 2 }, { name: 'Hugo', age: 8 }];
const p = document.querySelector('p');

function makeGreen() {
      const p = document.querySelector('p');
      p.style.color = '#BADA55';
      p.style.fontSize = '50px';
    }


    // Regular

    console.log('Harrold');
    
    // Interpolated

    console.log('Hi, this is a gorgeous %s !', 'Harrold');

    // Styled

    console.log('%c I am lovely and sweet', 'color: teal; font-size: 30px');

    // warning!

    console.warn('%c OMG, look what have you done!', 'font-size: 40px; color: red');

    // Error :|

    console.error('Shit!');

    // Info

    console.info('Today\'s weather is nice');

    // Testing

    console.assert(p.classList.contains('lola'), 'This is the wrong claaass');

    // clearing

    console.clear();

    // Viewing DOM Elements

    console.dir(p);

    // Grouping together

    dogs.forEach(dog => {
        console.groupCollapsed(`${dog.name}`);
        console.log(`This is lovely ${dog.name}`);
        console.log(`${dog.name} is a dog of ${dog.age}`);
        console.log(`${dog.name} has ${dog.age * 7} dog years`);
        console.groupEnd(`${dog.name}`)
    });
    
    // counting

    console.count('Dosia');
    console.count('Dosia');
    console.count('Dosia');
    console.count('Dosia');
    console.count('Dosia');
    console.count('Dosia');
    console.count('Dosia');
    console.count('Maćko');
    console.count('Maćko');
    console.count('Maćko');
    console.count('Maćko');

    // timing

    console.time('fetch it babe');
    fetch('https://api.github.com/users/wesbos')
        .then(data => data.json())
        .then(data => {
        console.timeEnd('fetch it babe');
        console.log(data);
    });
    
    console.table(dogs);
    
