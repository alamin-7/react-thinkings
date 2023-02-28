
import Card from '../UI/Card';
import classes from './AvailableMeals.module.css';
import MealItem from './MealItem/MealItem';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Rice',
    description: 'Finest plain rice',
    price: 22.99,
  },
  {
    id: 'm2',
    name: 'Teheri',
    description: 'DSi special!',
    price: 16.5,
  },
  {
    id: 'm3',
    name: 'Khicuri',
    description: 'Give you the feel of bristy',
    price: 12.99,
  },
  {
    id: 'm4',
    name: 'Dal',
    description: 'Tasty',
    price: 18.99,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => 
   <MealItem
   key={meal.id}
   id={meal.id}
   name={meal.name}
   description={meal.description}
   price={meal.price}
   />
  );

  return (
    <section className={classes.meals}> 
        <Card>
        <ul>{mealsList}</ul>
        </Card>
    </section>
  );
};

export default AvailableMeals;