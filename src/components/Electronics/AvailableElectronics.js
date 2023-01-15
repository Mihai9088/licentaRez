import React from 'react'
import classes from './AvailableElectronics.module.css'
import Card from '../UI/Card';
import ElectronicItem from './ElectronicItem/ElectronicItem';

const DUMMY_ITEMS = [
    {
        id: 'm1',
        name: 'Monitor',
        description: 'Best Monitor',
        price: 79.99
    }, {
        id: 'm2',
        name: 'Iphone',
        description: 'Best mobile',
        price: 4000
    }, {
        id: 'm3',
        name: 'Laptop',
        description: 'Best Laptop',
        price: 3000
    }, {
        id: 'm4',
        name: 'Macbook',
        description: 'Best Macbook',
        price: 4999.99
    }
];

const AvailableElectronics = () => {

    const itemslist = DUMMY_ITEMS.map(
        item => <ElectronicItem
            key={item.id}
            id={item.id}
            name={item.name}
            description={item.description}
            price={item.price}/>
    )

    return <section className={classes.items}>
        <Card>
            <ul>
                {itemslist}
            </ul>
            <div className={classes.div1}></div>
            <div className={classes.div2}> </div>
        </Card>

    </section>

}

export default AvailableElectronics