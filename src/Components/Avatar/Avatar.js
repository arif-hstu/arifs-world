import React from 'react';

import { useSpring, animated } from 'react-spring';
import { Rnd } from 'react-rnd';

import './Avatar.css';

const calc = (x, y) => {
	return [x - window.innerWidth / 2, y - window.innerHeight / 2]
};

const trans1 = (x, y) => `translate3d(${x / 5010}px,${y / 5010}px,0)`
const trans2 = (x, y) => `translate3d(${x / 5040 - 25}px,${y / 5040 - 70}px,0)`
const trans3 = (x, y) => `translate3d(${x / 5030 - 20 }px,${y / 5030 - 85}px,0)`
const trans4 = (x, y) => `translate3d(${x / 5025 - 120}px,${y / 5025 - 22}px,0)`


function Avatar() {
	const [props, set] = useSpring(() => ({ xy: [ 6000, 6000], config: { mass: 10, tension: 550, friction: 140 } }))
	return (
		<div className="avatarHolder" onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
				<div class="container" >
					<animated.div class="card1" style={{ transform: props.xy.interpolate(trans1) }} />
					<animated.div class="card2" style={{ transform: props.xy.interpolate(trans2) }} />
					<animated.div class="card3" style={{ transform: props.xy.interpolate(trans3) }} />
					<animated.div class="card4" style={{ transform: props.xy.interpolate(trans4) }} />
				</div>
		</div>
	)
}

export default Avatar;


/*const trans1 = (x, y) => `translate3d(${x / 50}px,${y / 50}px,0)`
const trans2 = (x, y) => `translate3d(${x / 40 - 25}px,${y / 40 -70}px,0)`
const trans3 = (x, y) => `translate3d(${x / 30 - 20 }px,${y / 30 - 85}px,0)`
const trans4 = (x, y) => `translate3d(${x / 25 - 120}px,${y / 25 - 22}px,0)`
*/