/* eslint-disable no-alert */
import * as React from 'react';
import { Modal, useModal } from './Modal';
import { Button } from '../../inputs/button';

export default {
	title: 'Feedback/Modal',
	component: Modal,
};

export const Default = () => {
	const { isOpen, onClose, onOpen } = useModal();

	return (
		<>
			<Button color="primary" variant="contained" onClick={onOpen}>
				Open modal
			</Button>
			<Modal
				maxWidth="sm"
				open={isOpen}
				onClose={onClose}
				title="Modal"
				renderFooter={() => {
					return (
						<>
							<Button variant="outlined" onClick={onClose}>
								Close
							</Button>
							<Button color="primary" onClick={() => alert('Saved progress!')}>
								Save
							</Button>
						</>
					);
				}}
			>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
					et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat.
				</p>
			</Modal>
		</>
	);
};
