import React, {FC} from 'react';
import Card from 'Components/card';

const OopPrinciples:FC = () => {
	return (
		<Card title='OOP Principles'>
			<h6>Encapsulation</h6>
			<p>
				Even if we have no idea what encapsulation is, we can guess just by the word that we are “enclosing” or hiding something, that’s exactly what is! With encapsulation, object’s methods and properties are enclosed within the object, so there are not exposed.
			</p>
			<h6>Abstraction</h6>
			<p>
				If we look at the car, we can only see what is outside. We see wheels, doors, windows and so on. But what we don’t see is the complex engine and all those inner parts. That’s what abstraction is: hiding complex details and showing simple ones. It helps the code to be more understandable.
			</p>
			<h6>Inheritance</h6>
			<p>
				Inheritance allows for parent class to pass functionality to a child class, again, creating clean and reusable code, avoiding repeats. If we have class Car that has a function ’drive’ and class Motocycle with the same function, we can extend that function into the Motocycle. Here is how it looks in code.
			</p>
			<h6>Polymorphism</h6>
			<p>
				In this instance, polymorphism means the same method can be used on different objects. For example , if a Car and a Motocycle have the same function — drive, polymorphism gives us an ability to call the same method on different objects.
			</p>
		</Card>
	);
};

export default OopPrinciples;
