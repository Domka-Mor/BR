import React from 'react';
import RoomFilter from './RoomFilter';
import RoomList from './RoomList';
import {RoomConsumer} from '../../context';
import Loader from '../Loader';


export default function RooomContainer() {
	return (
		<RoomConsumer>
			{value => {
				const {loading,sortedRooms,rooms} = value


				if (loading) {
					return <Loader/>
				}
				return(
					<div>
						<RoomFilter rooms={rooms}/>
						<RoomList rooms={sortedRooms}/>
					</div>
			)
		}}
		</RoomConsumer>
		
	)
}