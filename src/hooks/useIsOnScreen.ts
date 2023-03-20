import React from 'react';

interface IOptions {
	threshold: number | number[];
}

const useIsOnScreen = (ref: React.RefObject<HTMLElement>, options: IOptions) => {
	const [isIntersecting, setIsIntersecting] = React.useState(false);

	React.useEffect(() => {
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
	}, []);

	return isIntersecting;
};

export default useIsOnScreen;
