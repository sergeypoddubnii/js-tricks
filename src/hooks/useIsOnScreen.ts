import React from 'react';
import throttle from '../helpers/throttle';

interface IOptions {
	threshold: number | number[];
}

const useIsOnScreen = (ref: React.RefObject<HTMLElement>, options: IOptions) => {
	const [isIntersecting, setIsIntersecting] = React.useState(false);
	const observeFunctions = () => {
		const observer = new IntersectionObserver(([entry]) => {
			setIsIntersecting(entry.isIntersecting);
		}, options);

		if (ref.current) {
			observer.observe(ref.current);
		}

		return () => {
			if (ref.current) {
				observer.unobserve(ref.current);
			}
		};
	};

	const throttedObserve = throttle(observeFunctions, 200);

	React.useEffect(throttedObserve, []);

	return isIntersecting;
};

export default useIsOnScreen;
